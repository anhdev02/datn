import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside
      id="aside"
      className="xans-element- xans-layout xans-layout-slidepackage "
      style={{ display: "block", zIndex: 999, visibility: "visible" }}
    >
      <h1>
        <Link to="/">
          <img
            src="//cdn-0863.cafe24img.com/locknlockvn/NEW_LocknLock/logo.png"
            alt="LocknLock"
          />
        </Link>
      </h1>
      <p className="xans-element- xans-layout xans-layout-statelogoff member ">
        <Link to="/register">
          <strong>Đăng Ký </strong>(Bạn chưa đăng nhập.)
        </Link>
      </p>
      <div className>
        <ul className="xans-element- xans-layout xans-layout-statelogoff asidetop asidetop3 ">
          <li>
            <Link to="/login">
              <img src="//cdn-0863.cafe24img.com/locknlockvn/NEW_LocknLock/aside_join.png" />
              Đăng Nhập
            </Link>
          </li>
          <li className="xans-element- xans-layout xans-layout-orderbasketcount ">
            <Link to="" className="btnBasket">
              <img
                src="//cdn-0863.cafe24img.com/locknlockvn/NEW_LocknLock/aside_cart.png"
                alt=""
              />
              <span className="count displaynone EC-Layout_Basket-count-display">
                <span className="EC-Layout-Basket-count">0</span>
              </span>
            </Link>
            Giỏ hàng
          </li>
        </ul>
      </div>
      <div id="slideCateList" className="categoryCont">
        <ul className="xans-element- xans-layout xans-layout-category categoryList">
          <li id="cate24" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=24">
              Bình giữ nhiệt / Bình nước
            </a>
            <a href="/category/bình-giữ-nhiệt-bình-nước/24/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate25" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=25">
              Hộp bảo quản
            </a>
            <a href="/category/hộp-bảo-quản/25/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate23" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=23">
              Điện gia dụng
            </a>
            <a href="/category/Điện-gia-dụng/23/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate26" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=26">
              Đồ dùng nhà bếp
            </a>
            <a href="/category/Đồ-dùng-nhà-bếp/26/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate27" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=27">
              Đồ dùng sinh hoạt
            </a>
            <a href="/category/Đồ-dùng-sinh-hoạt/27/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate108" className="noChild">
            <a
              href="/product/list_thumb.html?cate_no=108"
              className="cate"
              cate="?cate_no=108"
            >
              LocknLock TV
            </a>
            <a href="/category/locknlock-tv/108/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate52" className="noChild">
            <a
              href="/product/list_thumb.html?cate_no=52"
              className="cate"
              cate="?cate_no=52"
            >
              Hưỡng dẫn sử dụng sản phẩm
            </a>
            <a href="/category/hưỡng-dẫn-sử-dụng-sản-phẩm/52/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate68" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=68">
              Recipe
            </a>
            <a href="/category/recipe/68/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate57" className="noChild">
            <a
              href="/product/list_thumb.html?cate_no=57"
              className="cate"
              cate="?cate_no=57"
            >
              Recipe
            </a>
            <a href="/category/recipe/57/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
          <li id="cate64" className="xans-record-">
            <a href="#none" className="cate" cate="?cate_no=64">
              Giảm giá
            </a>
            <a href="/category/giảm-giá/64/" className="view">
              Xem Sản Phẩm
            </a>
            <button type="button" className="icoBookmark" id="icoBookmark">
              Thêm vào Yêu Thích
            </button>
          </li>
        </ul>
        <div className="aside-sub-menu">
          <ul>
            <li>
              <Link to="/dealhot">Deal Hot</Link>
            </li>
            <li>
              <Link to="/bestseller">Hàng bán chạy</Link>
            </li>
            <li>
              <Link to="/newproducts">Hàng mới</Link>
            </li>
            <li>
              <Link to="/story">Story</Link>
            </li>
            <li>
              <Link to="/stores">Stores</Link>
            </li>
          </ul>
        </div>
        <div className="aside-sub-menu">
          <ul>
            <li>
              <Link to="/customercare">
                <strong>Chăm sóc khách hàng</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="xans-element- xans-myshop xans-myshop-main ">
        <Link to="/favouriteslist" className="wishList">
          Yêu Thích{" "}
          <span>
            <span className="xans_myshop_main_interest_prd_cnt">0</span>
          </span>
        </Link>
        <Link to="/seen" className="recentList">
          Đã Xem{" "}
          <span>
            <span className="xans_myshop_main_recent_cnt">1</span>
          </span>
        </Link>
        <Link to="/order" className="orderList">
          Đơn hàng{" "}
          <span className="xans-element- xans-myshop xans-myshop-orderhistorytab ">
            <span id="xans_myshop_total_orders" />
          </span>
        </Link>
      </div>
      <Link to="" className="btnClose">
        <img
          src="//cdn-0863.cafe24img.com/locknlockvn/NEW_LocknLock/m-close.png"
          width={16}
          alt="Close"
        />
      </Link>
    </aside>
  );
};

export default Aside;
