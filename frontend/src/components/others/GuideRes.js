import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GuideRes = () => {
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
    <div id="contents">
      <div className="root_width">
        <div className="xans-element- xans-product xans-product-headcategory Hưỡng dẫn sử dụng sản phẩm">
          <div className="xans-element- xans-product xans-product-normalmenu xans-product-normalmenu-m">
            <p className="prdCount">
              Tổng <strong>{guides.length}</strong> cái
            </p>
            <div className="story_section3 story_Recipe-h2">
              <h2 className="Recipe-h2">
                <span>Recipe</span>
              </h2>
            </div>
          </div>
          <article className="wrap-mProduct Product-list">
            <div className="in-article">
              <div className="xans-element- xans-product xans-product-listnormal productList mProduct typeThumb">
                <ul className="prdList">
                  {currentItems.map((guide) => (
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
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <h4 className="name">
                            <Link
                              to={guide.link}
                            >
                              {guide.name}
                            </Link>
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

export default GuideRes;
