import React from 'react'

const HeaderInfoRes = () => {
  return (
    <header id="header">
        <div className="header sub-header">
          <h1 className="sub-h1">
            <span className="headcategory-span">Đơn hàng</span>
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
            <a href="#none">back</a>
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
              <div id="mainMenuIn" className="xans-element- xans-product xans-product-menupackage swiper-container swiper-container0 swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                <ul className="swiper-wrapper">
                  <li className="swiper-slide my_li1 swiper-slide-active actdisplaynone">
                    <a className="my_a" href="/myshop/order/list.html">Đơn hàng</a>
                  </li>
                  <li className="swiper-slide my_li0 swiper-slide-next">
                    <a href="/myshop/addr/list.html">Sổ địa chỉ</a>
                  </li>
                  <li className="swiper-slide my_li3">
                    <a className="my_a" href="/myshop/wish_list.html">Danh sách yêu thích</a>
                  </li>
                  <li className="swiper-slide my_li4">
                    <a className="my_a" href="/myshop/recent_list.html">Đã xem</a>
                  </li>
                  <li className="swiper-slide my_li5">
                    <a className="my_a" href="/myshop/coupon/coupon.html">Mã giảm giá</a>
                  </li>
                  <li style={{display: 'none'}} className="my_li6">
                    <a className="my_a" href="/stores.html">Nhận xét của tôi</a>
                  </li>
                  <li className="swiper-slide my_li7">
                    <a className="my_a" href="/member/modify.html">Thông tin tài khoản</a>
                  </li>
                </ul>
              </div>
              <div className="swiper-scrollbar" style={{display: 'none', opacity: 0, transitionDuration: '400ms'}}>
                <div className="swiper-scrollbar-drag" style={{width: '820px', transform: 'translate3d(0px, 0px, 0px)'}} />
              </div>
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

export default HeaderInfoRes