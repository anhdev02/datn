import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LNLTV = () => {
  const [tvs, setTVs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/tv/all`)
      .then((res) => res.json())
      .then((data) => {
        setTVs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tvs.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tvs.length / itemsPerPage); i++) {
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
                <ol>
                  <li>
                    <a href="/">Trang Chủ</a>
                  </li>
                  <li className>
                    <a className="round-a" href="/category/locknlock-tv/108/">
                      LocknLock TV
                    </a>
                  </li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <h2 className="LockTv-h2">
                  <span>LocknLock TV</span>
                </h2>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpackage product_main_section main_section_list">
              <div className="xans-element- xans-product xans-product-listnormal wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {currentItems.map((tv) => (
                    <li>
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <Link
                                className="BG-thumbnailB"
                                to={`/locknlocktv/${tv.id}`}
                              >
                                <img
                                  src={`https://locknlock-d1171.web.app/assets/imgs/${tv.image}`}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <h4 className="name">
                            <Link to={`/locknlocktv/${tv.id}`}>
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#555555",
                                  fontWeight: "bold",
                                }}
                              >
                                {tv.name}
                              </span>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
              <ol>{renderPageNumbers}</ol>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
    </div>
  );
};

export default LNLTV;
