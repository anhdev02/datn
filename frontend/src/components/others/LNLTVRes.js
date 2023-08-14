import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LNLTVRes = () => {
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
    <div id="contents">
      <div className="root_width">
        <div className="xans-element- xans-product xans-product-headcategory LocknLock TV">
          <div className="xans-element- xans-product xans-product-menupackage">
            <div id="shopQ" />
            <p className="xans-element- xans-product xans-product-headcategory banner" />
          </div>
          <div className="xans-element- xans-product xans-product-normalmenu xans-product-normalmenu-m">
            <p className="prdCount">
              Tổng <strong>{tvs.length}</strong> cái
            </p>
          </div>
          <article className="wrap-mProduct Product-list">
            <div className="in-article">
              <div className="xans-element- xans-product xans-product-listnormal productList mProduct typeThumb">
                <ul className="prdList">
                  {currentItems.map((tv) => (
                    <li>
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <Link
                                className="BG-thumbnail"
                                to={`/locknlocktv/${tv.id}`}
                                name="anchorBoxName_760"
                              >
                                <img
                                  src={`https://locknlock-d1171.web.app/assets/imgs/${tv.image}`}
                                  id="eListPrdImage760_1"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <h4 className="name">
                            <a
                              href="/product/lhc4160-riga-tumbler-vietnam-edition-cẢm-hỨng-hƯƠng-sẮc-viỆt-🇻🇳/760/category/108/display/1/"
                              className
                            >
                              [LHC4160] RIGA TUMBLER VIETNAM EDITION - CẢM HỨNG
                              HƯƠNG SẮC VIỆT 🇻🇳
                            </a>
                          </h4>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
                <ol>{renderPageNumbers}</ol>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LNLTVRes;
