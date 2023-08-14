import React, { useState } from "react";
import AdminHelmet from "./AdminHelmet";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateCategory from "../category/CreateCategory";
import CreateProduct from "../product/CreateProduct";
import CreateUser from "../user/CreateUser";
import ListCategory from "../category/ListCategory";
import ListProduct from "../product/ListProduct";
import TrashCategory from "../category/TrashCategory";
import TrashProduct from "../product/TrashProduct";
import ListUser from "../user/ListUser";
import TrashUser from "../user/TrashUser";
import ListOrder from "../order/ListOrder";
import ConfirmOrder from "../order/ConfirmOrder";
import TrashOrder from "../order/TrashOrder";
import EditCategory from "../category/EditCategory";
import EditUser from "../user/EditUser";
import EditProduct from "../product/EditProduct";
import DetailsOrder from "../order/DetailsOrder";
import CreateSlide from "../slide/CreateSlide";
import EditSlide from "../slide/EditSlide";
import ListSlide from "../slide/ListSlide";
import TrashSlide from "../slide/TrashSlide";
import CreateBanner from "../banner/CreateBanner";
import EditBanner from "../banner/EditBanner";
import ListBanner from "../banner/ListBanner";
import TrashBanner from "../banner/TrashBanner";
import AddImage from "../product/AddImage";
import CreateRecipe from "../recipe/CreateRecipe";
import EditRecipe from "../recipe/EditRecipe";
import ListRecipe from "../recipe/ListRecipe";
import TrashRecipe from "../recipe/TrashRecipe";
import CreateTV from "../tv/CreateTV";
import EditTV from "../tv/EditTV";
import ListTV from "../tv/ListTV";
import TrashTV from "../tv/TrashTV";
import CreateGuide from "../guide/CreateGuide";
import EditGuide from "../guide/EditGuide";
import ListGuide from "../guide/ListGuide";
import TrashGuide from "../guide/TrashGuide";

const AdminTemplate = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategory, setopenCategory] = React.useState(false);
  const [openProduct, setopenProduct] = React.useState(false);
  const [openOrder, setopenOrder] = React.useState(false);
  const [openUser, setopenUser] = React.useState(false);
  const [openSlide, setopenSlide] = React.useState(false);
  const [openBanner, setopenBanner] = React.useState(false);
  const [openRecipe, setopenRecipe] = React.useState(false);
  const [openTV, setopenTV] = React.useState(false);
  const [openGuide, setopenGuide] = React.useState(false);
  const [openContact, setopenContact] = React.useState(false);

  const OpenMenu = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  const OpenCategory = (e) => {
    e.preventDefault();
    setopenCategory(!openCategory);
  };
  const OpenProduct = (e) => {
    e.preventDefault();
    setopenProduct(!openProduct);
  };
  const OpenOrder = (e) => {
    e.preventDefault();
    setopenOrder(!openOrder);
  };
  const OpenUser = (e) => {
    e.preventDefault();
    setopenUser(!openUser);
  };
  const OpenSlide = (e) => {
    e.preventDefault();
    setopenSlide(!openSlide);
  };
  const OpenBanner = (e) => {
    e.preventDefault();
    setopenBanner(!openBanner);
  };
  const OpenRecipe = (e) => {
    e.preventDefault();
    setopenRecipe(!openRecipe);
  };
  const OpenTV = (e) => {
    e.preventDefault();
    setopenTV(!openTV);
  };
  const OpenGuide = (e) => {
    e.preventDefault();
    setopenGuide(!openGuide);
  };
  const OpenContact = (e) => {
    e.preventDefault();
    setopenContact(!openContact);
  };

  if (localStorage.getItem("role")) {
    return (
      <>
        <AdminHelmet />
        <div class="layout-wrapper layout-content-navbar">
          <div class="layout-container">
            <aside
              id="layout-menu"
              className={
                openMenu
                  ? "layout-menu menu-vertical menu bg-menu-theme show_aside"
                  : "layout-menu menu-vertical menu bg-menu-theme"
              }
            >
              <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                  <span className="app-brand-logo demo">
                    <svg
                      width={25}
                      viewBox="0 0 25 42"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                          d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                          id="path-1"
                        />
                        <path
                          d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                          id="path-3"
                        />
                        <path
                          d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                          id="path-4"
                        />
                        <path
                          d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                          id="path-5"
                        />
                      </defs>
                      <g
                        id="g-app-brand"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Brand-Logo"
                          transform="translate(-27.000000, -15.000000)"
                        >
                          <g
                            id="Icon"
                            transform="translate(27.000000, 15.000000)"
                          >
                            <g
                              id="Mask"
                              transform="translate(0.000000, 8.000000)"
                            >
                              <mask id="mask-2" fill="white">
                                <use xlinkHref="#path-1" />
                              </mask>
                              <use fill="#696cff" xlinkHref="#path-1" />
                              <g id="Path-3" mask="url(#mask-2)">
                                <use fill="#696cff" xlinkHref="#path-3" />
                                <use
                                  fillOpacity="0.2"
                                  fill="#FFFFFF"
                                  xlinkHref="#path-3"
                                />
                              </g>
                              <g id="Path-4" mask="url(#mask-2)">
                                <use fill="#696cff" xlinkHref="#path-4" />
                                <use
                                  fillOpacity="0.2"
                                  fill="#FFFFFF"
                                  xlinkHref="#path-4"
                                />
                              </g>
                            </g>
                            <g
                              id="Triangle"
                              transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                            >
                              <use fill="#696cff" xlinkHref="#path-5" />
                              <use
                                fillOpacity="0.2"
                                fill="#FFFFFF"
                                xlinkHref="#path-5"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="app-brand-text demo menu-text fw-bolder ms-2">
                    Sneat
                  </span>
                </a>
                <Link
                  to=""
                  onClick={OpenMenu}
                  className="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
                >
                  <i className="bx bx-chevron-left bx-sm align-middle" />
                </Link>
              </div>
              <div className="menu-inner-shadow" />
              <ul className="menu-inner py-1">
                <li className="menu-item active">
                  <Link to="/dashboard" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Dashboard</div>
                  </Link>
                </li>
                {/* Layouts */}
                <li onClick={OpenCategory} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i className="menu-icon bx bxs-category"></i>
                    <div data-i18n="Layouts">Quản lý danh mục</div>
                  </a>
                  {openCategory ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="category/create" className="menu-link">
                          <div data-i18n="Without menu">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="category/list" className="menu-link">
                          <div data-i18n="Without navbar">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="category/trash" className="menu-link">
                          <div data-i18n="Container">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenProduct} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-dock-top" />
                    <div data-i18n="Account Settings">Quản lý sản phẩm</div>
                  </a>
                  {openProduct ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="product/create" className="menu-link">
                          <div data-i18n="Account">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="product/list" className="menu-link">
                          <div data-i18n="Notifications">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="product/trash" className="menu-link">
                          <div data-i18n="Connections">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenOrder} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class="menu-icon bx bx-id-card"></i>
                    <div data-i18n="Authentications">Quản lý đơn hàng</div>
                  </a>
                  {openOrder ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="order/list" className="menu-link">
                          <div data-i18n="Basic">Chờ xác nhận</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="order/confirm" className="menu-link">
                          <div data-i18n="Basic">Đã xác nhận</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="order/trash" className="menu-link">
                          <div data-i18n="Basic">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenUser} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class="menu-icon bx bxs-user"></i>
                    <div data-i18n="Misc">Quản lý người dùng</div>
                  </a>
                  {openUser ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="user/create" className="menu-link">
                          <div data-i18n="Error">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="user/list" className="menu-link">
                          <div data-i18n="Error">Đang hoạt động</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="user/trash" className="menu-link">
                          <div data-i18n="Under Maintenance">
                            Không hoạt động
                          </div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenSlide} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class="menu-icon bx bx-slideshow"></i>
                    <div data-i18n="User interface">Quản lý slides</div>
                  </a>
                  {openSlide ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="slide/create" className="menu-link">
                          <div data-i18n="Accordion">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="slide/list" className="menu-link">
                          <div data-i18n="Accordion">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="slide/trash" className="menu-link">
                          <div data-i18n="Alerts">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenBanner} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class="menu-icon bx bxs-rectangle"></i>
                    <div data-i18n="User interface">Quản lý banners</div>
                  </a>
                  {openBanner ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="banner/create" className="menu-link">
                          <div data-i18n="Accordion">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="banner/list" className="menu-link">
                          <div data-i18n="Accordion">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="banner/trash" className="menu-link">
                          <div data-i18n="Alerts">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenRecipe} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class="menu-icon bx bxl-blogger"></i>
                    <div data-i18n="Extended UI">Quản lý công thức</div>
                  </a>
                  {openRecipe ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="recipe/create" className="menu-link">
                          <div data-i18n="Perfect Scrollbar">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="recipe/list" className="menu-link">
                          <div data-i18n="Perfect Scrollbar">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="recipe/trash" className="menu-link">
                          <div data-i18n="Text Divider">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenTV} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class='menu-icon bx bxl-youtube'></i>
                    <div data-i18n="Extended UI">Quản lý LocknLockTV</div>
                  </a>
                  {openTV ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="tv/create" className="menu-link">
                          <div data-i18n="Perfect Scrollbar">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="tv/list" className="menu-link">
                          <div data-i18n="Perfect Scrollbar">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="tv/trash" className="menu-link">
                          <div data-i18n="Text Divider">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li onClick={OpenGuide} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class='menu-icon bx bx-book'></i>
                    <div data-i18n="Extended UI">Quản lý hướng dẫn</div>
                  </a>
                  {openGuide ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <Link to="guide/create" className="menu-link">
                          <div data-i18n="Perfect Scrollbar">Thêm mới</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="guide/list" className="menu-link">
                          <div data-i18n="Perfect Scrollbar">Danh sách</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="guide/trash" className="menu-link">
                          <div data-i18n="Text Divider">Thùng rác</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                {/* <li onClick={OpenContact} className="menu-item">
                  <a href="#st" className="menu-link menu-toggle">
                    <i class="menu-icon bx bxs-contact"></i>
                    <div data-i18n="Form Elements">Quản lý liên hệ</div>
                  </a>
                  {openContact ? (
                    <ul className="menu-sub">
                      <li className="menu-item">
                        <a href="forms-basic-inputs.html" className="menu-link">
                          <div data-i18n="Basic Inputs">Thiết lập</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="forms-input-groups.html" className="menu-link">
                          <div data-i18n="Input groups">Danh sách</div>
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </li>

                <li className="menu-item">
                  <a href="tables-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-table" />
                    <div data-i18n="Tables">Tables</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-support" />
                    <div data-i18n="Support">Support</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-file" />
                    <div data-i18n="Documentation">Documentation</div>
                  </a>
                </li> */}
              </ul>
            </aside>

            {/* right content */}
            <div class="layout-page">
              {/* header */}
              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <Link
                    className="nav-item nav-link px-0 me-xl-4"
                    to=""
                    onClick={OpenMenu}
                  >
                    <i className="bx bx-menu bx-sm" />
                  </Link>
                </div>
                <div
                  className="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
                >
                  {/* Search */}
                  <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                      <i className="bx bx-search fs-4 lh-0" />
                      <input
                        type="text"
                        className="form-control border-0 shadow-none"
                        placeholder="Search..."
                        aria-label="Search..."
                      />
                    </div>
                  </div>
                  {/* /Search */}
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* Place this tag where you want the button to render. */}
                    <li className="nav-item lh-1 me-3">
                      <a
                        className="github-button"
                        href="https://github.com/themeselection/sneat-html-admin-template-free"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                      >
                        Star
                      </a>
                    </li>
                    {/* User */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="#st"
                        data-bs-toggle="dropdown"
                      >
                        <div className="avatar avatar-online">
                          <img
                            src="https://locknlock-d1171.web.app/admin/assets/img/avatars/1.png"
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#st">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img
                                    src="https://locknlock-d1171.web.app/admin/assets/img/avatars/1.png"
                                    alt=""
                                    className="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <span className="fw-semibold d-block">
                                  John Doe
                                </span>
                                <small className="text-muted">Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#st">
                            <i className="bx bx-user me-2" />
                            <span className="align-middle">My Profile</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#st">
                            <i className="bx bx-cog me-2" />
                            <span className="align-middle">Settings</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#st">
                            <span className="d-flex align-items-center align-middle">
                              <i className="flex-shrink-0 bx bx-credit-card me-2" />
                              <span className="flex-grow-1 align-middle">
                                Billing
                              </span>
                              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                                4
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="auth-login-basic.html"
                          >
                            <i className="bx bx-power-off me-2" />
                            <span className="align-middle">Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*/ User */}
                  </ul>
                </div>
              </nav>
              {/* content and footer*/}
              <div class="content-wrapper">
                {/* content */}
                <Routes>
                  <Route path="" element={<Dashboard />}></Route>
                  <Route
                    path="category/create"
                    element={<CreateCategory />}
                  ></Route>
                  <Route
                    path="category/edit/:id"
                    element={<EditCategory />}
                  ></Route>
                  <Route
                    path="category/list"
                    element={<ListCategory />}
                  ></Route>
                  <Route
                    path="category/trash"
                    element={<TrashCategory />}
                  ></Route>
                  <Route
                    path="product/create"
                    element={<CreateProduct />}
                  ></Route>
                  <Route
                    path="product/edit/:id"
                    element={<EditProduct />}
                  ></Route>
                  <Route path="product/list" element={<ListProduct />}></Route>
                  <Route
                    path="product/trash"
                    element={<TrashProduct />}
                  ></Route>
                  <Route
                    path="product/add-image/:id"
                    element={<AddImage />}
                  ></Route>
                  <Route path="user/create" element={<CreateUser />}></Route>
                  <Route path="user/edit/:id" element={<EditUser />}></Route>
                  <Route path="user/list" element={<ListUser />}></Route>
                  <Route path="user/trash" element={<TrashUser />}></Route>
                  <Route path="order/list" element={<ListOrder />}></Route>
                  <Route
                    path="order/confirm"
                    element={<ConfirmOrder />}
                  ></Route>
                  <Route path="order/:id" element={<DetailsOrder />}></Route>
                  <Route path="order/trash" element={<TrashOrder />}></Route>
                  <Route path="slide/create" element={<CreateSlide />}></Route>
                  <Route path="slide/edit/:id" element={<EditSlide />}></Route>
                  <Route path="slide/list" element={<ListSlide />}></Route>
                  <Route path="slide/trash" element={<TrashSlide />}></Route>
                  <Route
                    path="banner/create"
                    element={<CreateBanner />}
                  ></Route>
                  <Route
                    path="banner/edit/:id"
                    element={<EditBanner />}
                  ></Route>
                  <Route path="banner/list" element={<ListBanner />}></Route>
                  <Route path="banner/trash" element={<TrashBanner />}></Route>
                  <Route
                    path="recipe/create"
                    element={<CreateRecipe />}
                  ></Route>
                  <Route
                    path="recipe/edit/:id"
                    element={<EditRecipe />}
                  ></Route>
                  <Route path="recipe/list" element={<ListRecipe />}></Route>
                  <Route path="recipe/trash" element={<TrashRecipe />}></Route>
                  <Route
                    path="tv/create"
                    element={<CreateTV />}
                  ></Route>
                  <Route
                    path="tv/edit/:id"
                    element={<EditTV />}
                  ></Route>
                  <Route path="tv/list" element={<ListTV />}></Route>
                  <Route path="tv/trash" element={<TrashTV />}></Route>
                  <Route
                    path="guide/create"
                    element={<CreateGuide />}
                  ></Route>
                  <Route
                    path="guide/edit/:id"
                    element={<EditGuide />}
                  ></Route>
                  <Route path="guide/list" element={<ListGuide />}></Route>
                  <Route path="guide/trash" element={<TrashGuide />}></Route>
                </Routes>
                {/* footer */}
                <footer className="content-footer footer bg-footer-theme">
                  <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                    <div className="mb-2 mb-md-0">
                      © , made with ❤️ by
                      <a
                        href="https://themeselection.com"
                        className="footer-link fw-bolder"
                      >
                        ThemeSelection
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://themeselection.com/license/"
                        className="footer-link me-4"
                      >
                        License
                      </a>
                      <a
                        href="https://themeselection.com/"
                        className="footer-link me-4"
                      >
                        More Themes
                      </a>
                      <a
                        href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                        className="footer-link me-4"
                      >
                        Documentation
                      </a>
                      <a
                        href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                        className="footer-link me-4"
                      >
                        Support
                      </a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Navigate to="/login" />;
};

export default AdminTemplate;
