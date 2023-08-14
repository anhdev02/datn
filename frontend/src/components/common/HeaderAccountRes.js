import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const HeaderAccountRes = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState();
  const [isActive, setIsActive] = useState(false);
  const [logout, setLogout] = useState(false);
  const [categoryParent, setCategoryParent] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [categoryState, setCategoryState] = useState({});
  const numberCart = useSelector((state) => state.cart.carts.length);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://locknlock-dvxb.onrender.com/api/category/parentR/0")
      .then((res) => res.json())
      .then((data) => setCategoryParent(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/category/all")
      .then((res) => res.json())
      .then((data) => setAllCategory(data))
      .catch((err) => console.log(err));
  }, [location]);

  const ShowSearch = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?search=${search.toLowerCase().replace(/\s/g, "-")}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const Logout = (event) => {
    event.preventDefault();
    if (
      localStorage.getItem("accessToken") === "google_accessToken" &&
      window.gapi &&
      window.gapi.auth2
    ) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().catch((error) => {
        console.error("Lỗi khi đăng xuất:", error);
      });
    }
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("role");
    localStorage.removeItem("accessToken");
    setLogout(true);
  };

  function Show() {
    if (localStorage.getItem("accessToken") !== null) {
      return (
        <>
          <p className="xans-element- xans-layout xans-layout-statelogon member ">
            Xin Chào
            <Link to="/account">
              <strong>
                <span className="xans-member-var-name">
                  {` ${localStorage.getItem("username")}`}
                </span>
              </strong>
            </Link>
            <Link to="" onClick={Logout} className="slide-logout">
              Đăng Xuất
            </Link>
          </p>
          <div>
            <ul className="xans-element- xans-layout xans-layout-statelogon asidetop asidetop2 ">
              <li>
                {" "}
                <Link to="/account">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/aside_join.png"
                    alt=""
                  />
                  Tài khoản của tôi
                </Link>
              </li>
              <li className="xans-element- xans-layout xans-layout-orderbasketcount ">
                <Link to="/cart" className="btnBasket">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/aside_cart.png"
                    alt=""
                  />
                  <span className="count EC-Layout_Basket-count-display">
                    <span className="EC-Layout-Basket-count">{numberCart}</span>
                  </span>
                  Giỏ hàng
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p className="xans-element- xans-layout xans-layout-statelogoff member ">
            <Link to="/register">
              <strong>Đăng Ký </strong>(Bạn chưa đăng nhập.)
            </Link>
          </p>
          <div>
            <ul className="xans-element- xans-layout xans-layout-statelogoff asidetop asidetop3 ">
              <li>
                <Link to="/login">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/aside_join.png"
                    alt=""
                  />
                  Đăng Nhập
                </Link>
              </li>
              <li className="xans-element- xans-layout xans-layout-orderbasketcount ">
                <Link to="/cart" className="btnBasket">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/aside_cart.png"
                    alt=""
                  />
                  <span className="count EC-Layout_Basket-count-display">
                    <span className="EC-Layout-Basket-count">{numberCart}</span>
                  </span>
                </Link>
                Giỏ hàng
              </li>
            </ul>
          </div>
        </>
      );
    }
  }

  const handleClickChild = (e, id) => {
    e.preventDefault();
    setCategoryState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (logout === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <aside
        id="aside"
        className={`xans-layout xans-layout-slidepackage ${
          isActive ? "" : "displaynone"
        }`}
        style={{ zIndex: 24, visibility: "visible", background: "#fff" }}
      >
        <h1>
          <Link to="/">
            <img
              src="https://locknlock-d1171.web.app/assets/imgs/logo.png"
              alt="LocknLock"
            />
          </Link>
        </h1>
        {Show()}
        <div id="slideCateList" className="categoryCont">
          <ul className="xans-layout xans-layout-category categoryList">
            {categoryParent.map((category, index) => (
              <li key={index} id={`cate${category.id}`}>
                <Link
                  onClick={(e) => handleClickChild(e, category.id)}
                  to=""
                  className="cate"
                >
                  {category.categoryName}
                </Link>
                <Link
                  to={`/productbycategoryparent/${
                    category.id
                  }?name=${category.categoryName
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className="view"
                >
                  Xem Sản Phẩm
                </Link>
                <ul
                  class={`slideSubMenu ${
                    categoryState[category.id] ? "" : "displaynone"
                  }`}
                >
                  {allCategory.map(
                    (categoryChild) =>
                      categoryChild.parent === category.id && (
                        <li>
                          <Link
                            to={`/productbycategory/${
                              categoryChild.id
                            }?name=${categoryChild.categoryName
                              .toLowerCase()
                              .replace(/\s/g, "-")}`}
                            class="cate"
                          >
                            {categoryChild.categoryName}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </li>
            ))}
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
            Yêu Thích
          </Link>
          <Link to="/seen" className="recentList">
            Đã Xem
          </Link>
          <Link to="/order" className="orderList">
            Đơn hàng
          </Link>
        </div>
        <Link onClick={handleClick} to="" className="btnClose">
          <img
            src="https://locknlock-d1171.web.app/assets/imgs/m-close.png"
            width={16}
            alt="Close"
          />
        </Link>
      </aside>
      <header id="header">
        <div className="header sub-header">
          <h1 className="sub-h1">
            <span className="headcategory-span">{props.title}</span>
          </h1>
          <div className="category">
            <Link onClick={handleClick} to="" className="fold">
              Danh Mục
            </Link>
          </div>
          <div className="search">
            <Link onClick={ShowSearch} to="/search" className="search-foldB">
              search
            </Link>
          </div>
          <div className="header-MyPage">
            <Link to="/account">My page</Link>
          </div>
        </div>

        <div className={showSearch ? `searchWrap` : `searchWrap displaynone`}>
          <form id="searchBarForm" onSubmit={handleSearch}>
            <div className="xans-element- xans-layout xans-layout-searchheader">
              <div className="searchForm">
                <input
                  id="keyword"
                  name="keyword"
                  className="inputTypeText"
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default HeaderAccountRes;
