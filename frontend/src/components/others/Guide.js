import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Guide = () => {
  const [guides, setGuides] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/guide/all`)
      .then((res) => res.json())
      .then((data) => {
        setGuides(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = guides.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(guides.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "this" : "other";
    return (
      <li>
        <Link onClick={handleClick} id={number} to="" className={activeClass}>
          {number}
        </Link>
      </li>
    );
  });
  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="xans-element- xans-product xans-product-menupackage">
              <div className="xans-element- xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol className="path4displaynone path3displaynone path2displaynone path1">
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li className="path_li path_li1">
                    <Link
                      className="path-a"
                      to=""
                    >
                      Hướng dẫn sử dụng sản phẩm
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner" />
                <h2 className="product_headcategory_h2">
                  Hướng dẫn sử dụng sản phẩm
                </h2>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpackage product_main_section main_section_list">
              <div className="xans-element- xans-product xans-product-normalmenu">
                <div className="function" id="Product_ListMenu">
                  <p className="prdCount">
                    Tổng <strong>{guides.length}</strong> cái
                  </p>
                </div>
              </div>
              <div className="xans-element- xans-product xans-product-listnormal wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {
                    currentItems.map((guide) => (
                      <li>
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <Link
                                  className="BG-thumbnail"
                                  to={guide.link}
                                  name="anchorBoxName_773"
                                >
                                  <img
                                    src={`https://locknlock-d1171.web.app/assets/imgs/${guide.image}`}
                                    id="eListPrdImage773_1"
                                    alt=" EJC636Nồi Điện đa năng"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <Link
                                to={guide.link}
                                className
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    color: "#555555",
                                    fontWeight: "bold",
                                  }}
                                />
                              </Link>
                              <Link to={guide.link}>
                                <strong>{guide.name}</strong>
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
                <ol>{renderPageNumbers}</ol>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
    </div>
  );
};

export default Guide;
