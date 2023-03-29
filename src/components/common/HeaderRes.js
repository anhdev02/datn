import React from "react";

const HeaderRes = () => {
  return (
    <header id="header">
      <div className="header">
        <h1>
          <a href="/">
            <img src="assets/imgs/logo.png" alt="LocknLock" />
          </a>
        </h1>
        <div className="category">
          <a href="#none" className="fold">
            Danh Mục
          </a>
        </div>
        <div className="search">
          <a href="/product/search.html" className="search-foldB">
            search
          </a>
        </div>
        <div className="header-MyPage">
          <a href="/myshop/index.html">My page</a>
        </div>
        <section id="topArea">
          <nav id="mainMenu" className="swiper-container swiper-container0">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <a href="/Airfryer/dealhot.html">Deal Hot</a>
              </li>
              <li className="swiper-slide">
                <a href="/Airfryer/bestseller.html">Hàng bán chạy</a>
              </li>
              <li className="swiper-slide">
                <a href="/Airfryer/newproducts.html">Hàng mới</a>
              </li>
              <li className="swiper-slide">
                <a href="/story.html">Story</a>
              </li>
              <li className="swiper-slide">
                <a href="/stores.html">Stores</a>
              </li>
            </ul>
            <div className="swiper-scrollbar" />
          </nav>
        </section>
      </div>
    </header>
  );
};

export default HeaderRes;
