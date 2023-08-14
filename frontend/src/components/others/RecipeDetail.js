import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RecipeDetail = (props) => {
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
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="xans-element- xans-product xans-product-headcategory Recipe">
            <div className="root_width">
              <div className="title xans-product-headcategory xans-product-headcategoryB">
                <p className="banner">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/shop1_68_top_616980.jpg"
                    useMap="#categoryhead_top_image_map_name"
                    alt=""
                  />
                </p>
                <div className="xans-product-headcategory-none xans-product-headcategory-Recipe">
                  <h2 className="product_headcategory_h2 Recipe-h2">Recipe</h2>
                </div>
              </div>
              <div className="xans-element- xans-product xans-product-detail">
                <div className="detailArea">
                  <div className="infoArea">
                    <div className="headingArea">
                      <h2>{recipe.name}</h2>
                      <div
                        className="reviewArea"
                        async_module="smartreview_dispRating"
                      ></div>
                      <div className="xans-element- xans-product xans-product-detail headingArea-bottom">
                        <span className="span_product_price on1"> đ 10</span>
                      </div>
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
                          {recipe.link === "" ? (
                            <img style={{width: "100%"}} src={`https://locknlock-d1171.web.app/assets/imgs/${recipe.image}`} alt=""></img>
                          ) : (
                            <div className="wrap-iframe">
                              <iframe
                                width={1140}
                                height="641.3"
                                src={recipe.link}
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          )}
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
        <hr className="layout" />
      </div>
    </div>
  );
};

export default RecipeDetail;
