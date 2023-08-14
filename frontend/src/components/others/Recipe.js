import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/recipe/all`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipes.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recipes.length / itemsPerPage); i++) {
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
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/shop1_68_top_616980.jpg"
                    useMap="#categoryhead_top_image_map_name"
                    alt=""
                  />
                </p>
                <h2 className="product_headcategory_h2">Recipe</h2>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpackage product_main_section main_section_list">
              <div className="xans-element- xans-product xans-product-normalmenu">
                <div className="function" id="Product_ListMenu">
                  <p className="prdCount">
                    Tổng <strong>{recipes.length}</strong> cái
                  </p>
                </div>
              </div>
              <div className="xans-element- xans-product xans-product-listnormal wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {
                    currentItems.map((recipe) => (
                      <li >
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <Link
                                  className="BG-thumbnail"
                                  to={`/recipe/${recipe.id}`}
                                >
                                  <img
                                    src={`https://locknlock-d1171.web.app/assets/imgs/${recipe.image}`}
                                    id="eListPrdImage589_1"
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <Link
                                to={`/recipe/${recipe.id}`}
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    color: "#555555",
                                    fontWeight: "bold",
                                  }}
                                >
                                 {recipe.name}
                                </span>
                              </Link>
                            </h4>
                            <ul className="xans-element- xans-product xans-product-listitem spec">
                              <li className="xans-record-">
                                <span
                                  style={{ fontSize: "12px", color: "#555555" }}
                                >
                                  {recipe.shortDetail}
                                </span>
                              </li>
                            </ul>
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

export default Recipe;
