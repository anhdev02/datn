import React from "react";
const Header = () => {
  return (
    <div id="header">
      <div className="header-top">
        <div className="inner">
          <div className="topArea clearBoth">
            <h1 className="xans-element- xans-layout xans-layout-logotop">
              <a href="#st">
                <img src="assets/imgs/logo.png" alt="LocknLock" />
              </a>
            </h1>
            <form id="searchBarForm" action="/product/search.html">
              <div className="xans-element- xans-layout xans-layout-searchheader">
                <fieldset>
                  <legend>Tìm Kiếm</legend>
                  <input
                    id="keyword"
                    className="inputTypeText"
                    name="keyword"
                    type="text"
                  />
                  <span className="search-button-top">
                    <input
                      type="image"
                      src="assets/imgs/icon_tim kiem.png"
                      alt="Search"
                    />
                    Tìm kiếm
                  </span>
                  <ul className="autoDrop" id />
                </fieldset>
              </div>
            </form>
            <div className="header-right">
              <div className="xans-element- xans-layout xans-layout-statelogoff">
                <ul>
                  <li>
                    <a href="#st" className="log">
                      <span className="top_icon top_icon1" />
                      Đăng Nhập/Đăng Ký
                    </a>
                  </li>
                  <li className="shoppinginfo_li">
                    <a href="#st">
                      <span className="top_icon top_icon3" />
                      Giỏ Hàng
                      <span className="count displaynone EC-Layout_Basket-count-display">
                        <span className="EC-Layout-Basket-count">0</span>
                      </span>
                    </a>
                    <ul className="xans-element- xans-layout xans-layout-shoppinginfo">
                      <li className="displaynone">
                        <a href="#st">
                          {" "}
                          <strong />
                        </a>
                      </li>
                      <li className="displaynone">
                        <a href="#st">
                          Giỏ Hàng
                          <strong>
                            <span className="displaynone">()</span>
                          </strong>
                        </a>
                      </li>
                      <li className>
                        <a href="#st">
                          Danh Sách Yêu Thích
                          <strong>
                            <span id="xans_myshop_interest_prd_cnt">0</span>
                          </strong>
                        </a>
                      </li>
                      <li className="displaynone">
                        <a href="#st">
                          Mã Giảm Giá <strong />
                        </a>
                      </li>
                      <li className="displaynone">
                        <a href="#st">
                          {" "}
                          <strong />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="link" />
        </div>
      </div>
      <div className="header-bottom">
        <div className="inner">
          <div className="wrap-menu">
            <ul className="main-menu">
              <li className="all-li">
                <a className="view_all_menu top_icon" href>
                  All
                </a>
              </li>
              <li>
                <a href="#st">Deal Hot</a>
              </li>
              <li>
                <a href="#st">Hàng bán chạy</a>
              </li>
              <li>
                <a href="#st">Hàng mới</a>
              </li>
              <li>
                <a href="#st">Story</a>
              </li>
              <li>
                <a href="#st">Stores</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="xans-element- xans-layout xans-layout-category AllCategoryList category-menu on_AllCategory displaynone">
          <ul className="depth1">
            <li className="first-li first-li24" cate={24} value={24}>
              <a
                className="menu-a2"
                href="/category/bình-giữ-nhiệt-bình-nước/24/"
              >
                Bình giữ nhiệt / Bình nước
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li31" cate={31} value={31}>
                    <a className="menu-a3" href="/category/bình-nước/31/">
                      Bình nước
                    </a>
                  </li>
                  <li className="first-li first-li29" cate={29} value={29}>
                    <a className="menu-a3" href="/category/bình-giữ-nhiệt/29/">
                      Bình giữ nhiệt
                    </a>
                  </li>
                  <li className="first-li first-li30" cate={30} value={30}>
                    <a className="menu-a3" href="/category/hộp-giữ-nhiệt/30/">
                      Hộp giữ nhiệt
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="first-li first-li25" cate={25} value={25}>
              <a className="menu-a2" href="/category/hộp-bảo-quản/25/">
                Hộp bảo quản
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li32" cate={32} value={32}>
                    <a className="menu-a3" href="/category/hộp-nhựa/32/">
                      Hộp nhựa
                    </a>
                  </li>
                  <li className="first-li first-li33" cate={33} value={33}>
                    <a className="menu-a3" href="/category/hộp-thuỷ-tinh/33/">
                      Hộp thuỷ tinh
                    </a>
                  </li>
                  <li className="first-li first-li44" cate={44} value={44}>
                    <a className="menu-a3" href="/category/hộp-cơm/44/">
                      Hộp cơm
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="first-li first-li23" cate={23} value={23}>
              <a className="menu-a2" href="/category/Điện-gia-dụng/23/">
                Điện gia dụng
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li43" cate={43} value={43}>
                    <a
                      className="menu-a3"
                      href="/category/thiết-bị-nhà-bếp/43/"
                    >
                      Thiết bị nhà bếp
                    </a>
                    <div className="sub-category sub1 uldepth3">
                      <ul className="depth3">
                        <li
                          className="first-li first-li55"
                          cate={55}
                          value={55}
                        >
                          <a
                            className="menu-a4"
                            href="/category/nồi-chiên-không-dầu/55/"
                          >
                            Nồi chiên không dầu
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="first-li first-li42" cate={42} value={42}>
                    <a
                      className="menu-a3"
                      href="/category/thiết-bị-gia-dụng/42/"
                    >
                      Thiết bị gia dụng
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="first-li first-li26" cate={26} value={26}>
              <a className="menu-a2" href="/category/Đồ-dùng-nhà-bếp/26/">
                Đồ dùng nhà bếp
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li45" cate={45} value={45}>
                    <a className="menu-a3" href="/category/dụng-cụ-nấu-ăn/45/">
                      Dụng cụ nấu ăn
                    </a>
                  </li>
                  <li className="first-li first-li46" cate={46} value={46}>
                    <a className="menu-a3" href="/category/nồi-chảo/46/">
                      Nồi / Chảo
                    </a>
                  </li>
                  <li className="first-li first-li47" cate={47} value={47}>
                    <a
                      className="menu-a3"
                      href="/category/phụ-kiện-nhà-bếp/47/"
                    >
                      Phụ kiện nhà bếp
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="first-li first-li27" cate={27} value={27}>
              <a className="menu-a2" href="/category/Đồ-dùng-sinh-hoạt/27/">
                Đồ dùng sinh hoạt
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li34" cate={34} value={34}>
                    <a className="menu-a3" href="/category/gối/34/">
                      Gối
                    </a>
                  </li>
                  <li className="first-li first-li35" cate={35} value={35}>
                    <a
                      className="menu-a3"
                      href="/category/Đồ-dùng-sinh-hoạt/35/"
                    >
                      Đồ dùng sinh hoạt
                    </a>
                  </li>
                  <li className="first-li first-li49" cate={49} value={49}>
                    <a className="menu-a3" href="/category/bảo-quản-đồ-đạc/49/">
                      Bảo quản đồ đạc
                    </a>
                  </li>
                  <li className="first-li first-li50" cate={50} value={50}>
                    <a className="menu-a3" href="/category/dụng-cụ-vệ-sinh/50/">
                      Dụng cụ vệ sinh
                    </a>
                  </li>
                  <li className="first-li first-li51" cate={51} value={51}>
                    <a className="menu-a3" href="/category/dụng-cụ-nhà-tắm/51/">
                      Dụng cụ nhà tắm
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="first-li first-li108" cate={108} value={108}>
              <a className="menu-a2" href="/category/locknlock-tv/108/">
                LocknLock TV
              </a>
            </li>
            <li className="first-li first-li52" cate={52} value={52}>
              <a
                className="menu-a2"
                href="/category/hưỡng-dẫn-sử-dụng-sản-phẩm/52/"
              >
                Hưỡng dẫn sử dụng
                <br />
                sản phẩm
              </a>
            </li>
            <li className="first-li first-li68" cate={68} value={68}>
              <a className="menu-a2" href="/category/recipe/68/">
                Recipe
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li105" cate={105} value={105}>
                    <a className="menu-a3" href="/category/tất-cả/105/">
                      Tất cả
                    </a>
                  </li>
                  <li className="first-li first-li111" cate={111} value={111}>
                    <a className="menu-a3" href="/category/thịt/111/">
                      Thịt
                    </a>
                  </li>
                  <li className="first-li first-li71" cate={71} value={71}>
                    <a className="menu-a3" href="/category/hải-sản/71/">
                      Hải sản
                    </a>
                  </li>
                  <li className="first-li first-li80" cate={80} value={80}>
                    <a className="menu-a3" href="/category/món-ăn-kiêng/80/">
                      Món ăn kiêng
                    </a>
                  </li>
                  <li className="first-li first-li100" cate={100} value={100}>
                    <a className="menu-a3" href="/category/món-ăn-phụ/100/">
                      Món ăn phụ
                    </a>
                  </li>
                  <li className="first-li first-li101" cate={101} value={101}>
                    <a className="menu-a3" href="/category/món-ăn-chay/101/">
                      Món ăn chay
                    </a>
                  </li>
                  <li className="first-li first-li102" cate={102} value={102}>
                    <a
                      className="menu-a3"
                      href="/category/món-tráng-miệng/102/"
                    >
                      Món tráng miệng
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="first-li first-li57" cate={57} value={57}>
              <a className="menu-a2" href="/category/recipe/57/">
                Recipe
              </a>
            </li>
            <li className="first-li first-li64" cate={64} value={64}>
              <a className="menu-a2" href="/category/giảm-giá/64/">
                Giảm giá
              </a>
              <div className="sub-category sub1 uldepth2">
                <ul className="depth2">
                  <li className="first-li first-li93" cate={93} value={93}>
                    <a
                      className="menu-a3"
                      href="/category/bình-giữ-nhiệt-bình-nước/93/"
                    >
                      Bình giữ nhiệt / Bình nước
                    </a>
                  </li>
                  <li className="first-li first-li94" cate={94} value={94}>
                    <a className="menu-a3" href="/category/hộp-bảo-quản/94/">
                      Hộp bảo quản
                    </a>
                  </li>
                  <li className="first-li first-li95" cate={95} value={95}>
                    <a className="menu-a3" href="/category/Điện-gia-dụng/95/">
                      Điện gia dụng
                    </a>
                  </li>
                  <li className="first-li first-li96" cate={96} value={96}>
                    <a className="menu-a3" href="/category/Đồ-dùng-nhà-bếp/96/">
                      Đồ dùng nhà bếp
                    </a>
                  </li>
                  <li className="first-li first-li97" cate={97} value={97}>
                    <a
                      className="menu-a3"
                      href="/category/Đồ-dùng-sinh-hoạt/97/"
                    >
                      Đồ dùng sinh hoạt
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
