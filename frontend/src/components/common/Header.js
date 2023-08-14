import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { store } from "../../store/store";
import { useSelector } from "react-redux";
import axios from "axios";
import { gapi } from "gapi-script";
const Header = ({ headerFlag }) => {
  const userId = localStorage.getItem("id");
  const [search, setSearch] = useState();
  const [isActive, setIsActive] = useState(false);
  const [categoryParent, setCategoryParent] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [isShow, setIsShow] = useState(false);
  const [logout, setLogout] = useState(false);
  const [productFavorites, setProductFavorites] = useState([]);
  const numberCart = useSelector((state) => state.cart.carts.length);

  const Logout = (event) => {
    event.preventDefault();
    if (
      localStorage.getItem("accessToken") === "google_accessToken" &&
      window.gapi &&
      window.gapi.auth2
    ) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2
        .signOut()
        .catch((error) => {
          console.error("Lỗi khi đăng xuất:", error);
        });
    }
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("role");
    localStorage.removeItem("accessToken");
    setIsShow(!isShow);
    setLogout(true);
  };

  useEffect(() => {
    setIsActive(false);
  }, [location]);
  useEffect(() => {
    setIsActive(false);
    fetch("https://locknlock-dvxb.onrender.com/api/category/parent/0")
      .then((res) => res.json())
      .then((data) => setCategoryParent(data))
      .catch((err) => console.log(err));

    fetchFavoriteProducts();

    fetch("https://locknlock-dvxb.onrender.com/api/category/all")
      .then((res) => res.json())
      .then((data) => setAllCategory(data))
      .catch((err) => console.log(err));
  }, [headerFlag]);

  const fetchFavoriteProducts = async () => {
    try {
      const response = await axios.get(
        `https://locknlock-dvxb.onrender.com/api/favorite/user/${userId}`
      );
      setProductFavorites(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm yêu thích:", error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?search=${search.toLowerCase().replace(/\s/g, "-")}`);
  };

  function renderLink(id, name) {
    if (id !== 6 && id !== 7 && id !== 8) {
      return (
        <Link
          className="menu-a2"
          to={`/productbycategoryparent/${id}?name=${name
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          {name}
        </Link>
      );
    } else if (id === 6) {
      return (
        <Link className="menu-a2" to="/locknlocktv">
          {name}
        </Link>
      );
    } else if (id === 7) {
      return (
        <Link className="menu-a2" to="/productguide">
          {name}
        </Link>
      );
    } else {
      return (
        <Link className="menu-a2" to="/recipe">
          {name}
        </Link>
      );
    }
  }

  function Show() {
    if (localStorage.getItem("accessToken") !== null) {
      return (
        <>
          <li>
            <Link to="" className="log" onClick={Logout}>
              <span className="top_icon top_icon2" />
              Đăng Xuất
            </Link>
          </li>
          <li>
            <Link to="/account" className="logon">
              <span className="top_icon top_icon10" />
              Tài khoản của tôi
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <Link to="/login" className="log">
            <span className="top_icon top_icon1" />
            Đăng Nhập/Đăng Ký
          </Link>
        </li>
      );
    }
  }

  if (logout === true) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="header">
      <div className="header-top">
        <div className="inner">
          <div className="topArea clearBoth">
            <h1 className="xans-element- xans-layout xans-layout-logotop">
              <Link to="/">
                <img
                  src="https://locknlock-d1171.web.app/assets/imgs/logo.png"
                  alt="LocknLock"
                />
              </Link>
            </h1>
            <form id="searchBarForm">
              <div className="xans-element- xans-layout xans-layout-searchheader">
                <fieldset>
                  <legend>Tìm Kiếm</legend>
                  <input
                    id="keyword"
                    className="inputTypeText"
                    name="keyword"
                    type="text"
                    onChange={searchOnChange}
                  />
                  <span className="search-button-top">
                    <input
                      type="image"
                      onClick={handleSubmit}
                      src="https://locknlock-d1171.web.app/assets/imgs/icon_tim kiem.png"
                      alt="Search"
                    />
                    Tìm kiếm
                  </span>
                  <ul className="autoDrop" />
                </fieldset>
              </div>
            </form>
            <div className="header-right">
              <div className="xans-element- xans-layout xans-layout-statelogoff">
                <ul>
                  {Show()}
                  <li className="shoppinginfo_li">
                    <Link to="/cart">
                      <span className="top_icon top_icon3" />
                      Giỏ Hàng
                      <span className="count EC-Layout_Basket-count-display">
                        <span className="EC-Layout-Basket-count">
                          {numberCart}
                        </span>
                      </span>
                    </Link>
                    <ul className="xans-element- xans-layout xans-layout-shoppinginfo">
                      <li>
                        <Link to="/favouriteslist">
                          Danh Sách Yêu Thích
                          <strong>
                            <span id="xans_myshop_interest_prd_cnt">
                              {" "}
                              {productFavorites.length}
                            </span>
                          </strong>
                        </Link>
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
                <Link
                  onClick={handleClick}
                  className="view_all_menu top_icon"
                  to=""
                >
                  All
                </Link>
              </li>
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
        </div>
        <div className={`AllCategoryList ${isActive ? "" : "displaynone"}`}>
          <ul className="depth1">
            {categoryParent.map((category, index) => (
              <li key={index} className="first-li">
                {renderLink(category.id, category.categoryName)}
                <div className="sub-category sub1 uldepth2">
                  <ul className="depth2">
                    {allCategory.map((categorychild) =>
                      categorychild.parent === category.id ? (
                        <li key={categorychild.id} className="first-li">
                          <Link
                            className="menu-a3"
                            to={`/productbycategory/${
                              categorychild.id
                            }?name=${categorychild.categoryName
                              .toLowerCase()
                              .replace(/\s/g, "-")}`}
                          >
                            {categorychild.categoryName}
                          </Link>
                        </li>
                      ) : (
                        ""
                      )
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
