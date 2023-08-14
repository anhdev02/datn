import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeDetailRes = (props) => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/recipe/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.error(error));
  }, [props.id]);
  return (
    <div id="contents" className="wrap-recipe-detail">
      <div className="root_width">
        <div className="xans-element- xans-product xans-product-headcategory Recipe">
          <div className="root_width">
            <div className="xans-element- xans-product xans-product-image overview">
              <div className="prdImgView">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to=""
                    id="prdDetailImg"
                    style={{ textAlign: "center" }}
                  >
                    <img
                      src={`https://locknlock-d1171.web.app/assets/imgs/${recipe.image}`}
                      className="bigImage"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-detail">
              <div className="detailArea">
                <div className="infoArea">
                  <div className="headingArea">
                    <h2>{recipe.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xans-element- xans-product xans-product-additional">
            <div id="prdDetail" className="ec-base-tab gFlex">
              <div className="root_width">
                <div className="cont">
                  <div className="recipe-section">
                    <div className="recipe-box" style={{ textAlign: "left" }}>
                      <div className="align-center">
                          {
                            recipe.link !== '' && (
                              <div className="wrap-iframe">
                                <iframe
                                  width={1140}
                                  height="641.3"
                                  src={recipe.link}
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>

                            )
                          }
                      </div>
                      <p className="brief-" />
                      <br />
                      <div
                          dangerouslySetInnerHTML={{ __html: recipe.details }}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailRes;
