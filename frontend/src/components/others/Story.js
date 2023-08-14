import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Story = () => {
  const [recipes, setRecipes] = useState([]);
  const [tvs, setTVS] = useState([]);
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/recipe/limit/6`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => console.log(err));
    fetch(`https://locknlock-dvxb.onrender.com/api/tv/limit/6`)
      .then((res) => res.json())
      .then((data) => {
        setTVS(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="path root_width">
            <span>Trang Hiện Tại</span>
            <ol>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <strong>Story</strong>
              </li>
            </ol>
          </div>
          <section className="story_section story_section1">
            <article className="root_width">
              <div className="wrap-banner story-banner clearBoth">
                <div className="box30">
                  <div className="in-box30">
                    <Link to="/locknlocktv">
                      <img src="https://locknlock-d1171.web.app/assets/imgs/rb1.gif" alt="" />
                      <h2>LocknLock TV</h2>
                      <div>Xem biết về Lifestyle với sản phẩm LocknLock!</div>
                    </Link>
                  </div>
                </div>
                <div className="box30">
                  <div className="in-box30">
                    <Link to="/recipe">
                      <img src="https://locknlock-d1171.web.app/assets/imgs/rb2.gif" alt="" />
                      <h2>Recipe</h2>
                      <div>
                        Giới thiệu hướng dẫn nấu ăn đa dạng bạn có thể làm theo.
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="box30">
                  <div className="in-box30">
                    <Link to="/productguide">
                      <img src="https://locknlock-d1171.web.app/assets/imgs/rb3.gif" alt="" />
                      <h2>Hướng dẫn sử dụng</h2>
                      <div>
                        Bạn bị mất giấy HDSD không? Đừng lo, xem lại tại đây nha
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="story_section story_section2">
            <article className="root_width">
              <div className=" ">
                <h2 className="LockTv-h2">
                  <span>LocknLock TV</span>
                  <Link className="story_sectio_more" to="/locknlocktv">
                    Xem tất cả
                  </Link>
                </h2>
              </div>
              <div className="wrap-mProduct Product-list">
                <div className="in-article">
                  <div className="root_width">
                    <div className="xans-element- xans-product xans-product-listmain-20 xans-product-listmain xans-product-20 productList mProduct typeThumb">
                      <ul className="prdList prdList3">
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
                                    <Link to={`/locknlocktv/${tv.id}`}>
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#555555",
                                        }}
                                      >
                                        {tv.name}
                                      </span>
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
                  <Link className="story_sectio_more" to="/recipe">
                    Xem tất cả
                  </Link>
                </h2>
              </div>
              <div className="wrap-mProduct Product-list">
                <div className="in-article">
                  <div className="root_width">
                    <div className="xans-element- xans-product xans-product-listmain-17 xans-product-listmain xans-product-17 productList mProduct typeThumb">
                      <ul className="prdList prdList3">
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
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <h4 className="name">
                                    <Link to={`/recipe/${recipe.id}`}>
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#555555",
                                        }}
                                      >
                                        {recipe.name}
                                      </span>
                                    </Link>
                                  </h4>
                                  <ul className="xans-product xans-product-listitem-17 xans-product-listitem xans-product-17 spec">
                                    <li>
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#555555",
                                        }}
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
        <hr className="layout" />
      </div>
    </div>
  );
};

export default Story;
