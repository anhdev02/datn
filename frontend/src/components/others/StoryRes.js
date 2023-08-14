import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StoryRes = () => {
  const [recipes, setRecipes] = useState([]);
  const [tvs, setTVS] = useState([]);
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/recipe/limit/3`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => console.log(err));
    fetch(`https://locknlock-dvxb.onrender.com/api/tv/limit/3`)
      .then((res) => res.json())
      .then((data) => {
        setTVS(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="contents">
      <div className="root_width story_width">
        <section className="story_section story_section2">
          <article className="root_width">
            <div className=" ">
              <h2 className="LockTv-h2">
                <span>LocknLock TV</span>
                <Link
                  className="story_sectio_more"
                  to="/locknlocktv"
                >
                  Xem tất cả
                </Link>
              </h2>
            </div>
            <div className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-element- xans-product xans-product-listmain-20 xans-product-listmain xans-product-20 productList mProduct typeThumb">
                    <ul className="prdList prdList1">
                      {
                        tvs.map((tv) => (
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
                                        id="eListPrdImage598_21"
                                        alt=""
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <h4 className="name">
                                  <Link
                                    to={`/locknlocktv/${tv.id}`}
                                  >
                                    {tv.name}
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="story_section story_section3">
          <article className="root_width">
            <div className=" ">
              <h2 className="Recipe-h2">
                <span>Recipe</span>
                <Link
                  className="story_sectio_more"
                  to="/recipe"
                >
                  Xem tất cả
                </Link>
              </h2>
            </div>
            <div className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-element- xans-product xans-product-listmain-17 xans-product-listmain xans-product-17 productList mProduct typeThumb">
                    <ul className="prdList prdList1">
                      {
                        recipes.map((recipe) => (
                          <li>
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
                                        id="eListPrdImage421_18"
                                        alt="Ba chỉ heo chiên giòn da"
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
                                <ul className="xans-product xans-product-listitem-17 xans-product-listitem xans-product-17 spec">
                                  <li>
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
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default StoryRes;
