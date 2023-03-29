import React from 'react'

const HeaderBlogRes = () => {
  return (
    <header id="header">
        <div className="header sub-header">
          <h1 className="sub-h1">
            <span className="headcategory-span" />
            <a className="headcategory-top" href="#st">Story</a>
          </h1>
          <div className="xans-element- xans-layout xans-layout-category sub-top-menu">
            <ul className="clearBoth">
              <li className="xans-record-">
                <a className="menu-a2" href="/category/bình-giữ-nhiệt-bình-nước/24/">Bình giữ nhiệt / Bình nước</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/hộp-bảo-quản/25/">Hộp bảo quản</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/Điện-gia-dụng/23/">Điện gia dụng</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/Đồ-dùng-nhà-bếp/26/">Đồ dùng nhà bếp</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/Đồ-dùng-sinh-hoạt/27/">Đồ dùng sinh hoạt</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/locknlock-tv/108/">LocknLock TV</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/hưỡng-dẫn-sử-dụng-sản-phẩm/52/">Hưỡng dẫn sử dụng sản phẩm</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/recipe/68/">Recipe</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/recipe/57/">Recipe</a>
              </li>
              <li className="xans-record-">
                <a className="menu-a2" href="/category/giảm-giá/64/">Giảm giá</a>
              </li>
            </ul>
          </div>
          <div className="xans-element- xans-layout xans-layout-mobileaction go-back">
            <a href="#none" onclick="history.go(-1);return false;">back</a>
          </div>
          <div className="category">
            <a href="#none" className="fold">Danh Mục</a>
          </div>
          <div className="search">
            <a href="/product/search.html" className="search-foldB">search</a>
          </div>
          <div className="header-MyPage">
            <a href="/myshop/index.html">My page</a>
          </div>
          <section id="topArea">
            <nav id="mainMenu">
              <div id="mainMenuIn" className="swiper-container swiper-container0">
                <ul className="swiper-wrapper">
                  <li className="swiper-slide my_li0 actdisplaynone">
                    <a className="my_a" href="/story.html">Tất cả</a>
                  </li>
                  <li className="swiper-slide my_li1">
                    <a href="/category/t%E1%BA%A5t-c%E1%BA%A3/105/">Recipe</a>
                  </li>
                  <li className="swiper-slide my_li2">
                    <a className="my_a" href="/Airfryer/LocknLockTV.html?cate_no=108">LocknLock TV</a>
                  </li>
                  <li className="swiper-slide my_li3">
                    <a href="/Airfryer/RecipeBook.html?cate_no=52">Hướng dẫn sử dụng</a>
                  </li>
                </ul>
              </div>
              <div className="swiper-scrollbar" />
            </nav>
          </section>
        </div>
        <div className="searchWrap">
          <form id="searchBarForm" name action="/product/search.html" method="get" target="_self" encType="multipart/form-data">
            <input id="banner_action" name="banner_action" defaultValue type="hidden" />
            <div className="xans-element- xans-layout xans-layout-searchheader">
              <div className="searchForm">
                <input id="keyword" name="keyword" className="inputTypeText" placeholder defaultValue type="text" />
                <button type="button" className="btnDelete">Xoá</button>
                <div className="autoList" id>
                  <ul className="autoDrop" id />
                </div>
              </div>
            </div>
          </form>
        </div>
      </header>
  )
}

export default HeaderBlogRes