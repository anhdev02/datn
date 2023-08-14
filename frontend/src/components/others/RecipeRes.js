import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeRes = () => {
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
    <div id="contents">
      <div className="root_width">
        <div className="xans-element- xans-product xans-product-headcategory Recipe">
          <div className="xans-element- xans-product xans-product-normalmenu xans-product-normalmenu-m">
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
                  {
                    currentItems.map((recipe) => (
                      <li>
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <Link
                                  className="BG-thumbnail"
                                  to={`/recipe/${recipe.id}`}
                                  name="anchorBoxName_589"
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
                                {recipe.name}
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
          </article>
        </div>
      </div>
    </div>
  );
};

export default RecipeRes;
