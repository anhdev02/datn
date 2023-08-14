import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

SwiperCore.use([Navigation, Autoplay]);

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

function Home({ productFavorite, onProductFavoritesChange }) {
  const [slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [bannerProducts, setBannerProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [productsDealHot, setProductsDealHot] = useState([]);
  const [visibleProductsDealHot, setVisibleProductsDealHot] = useState(8);
  const [showMoreButtonDealHot, setShowMoreButtonDealHot] = useState(true);
  const [productsBestSeller, setProductsBestSeller] = useState([]);
  const [visibleProductsBestSeller, setVisibleProductsBestSeller] = useState(8);
  const [showMoreButtonBestSeller, setShowMoreButtonBestSeller] =
    useState(true);
  const userId = localStorage.getItem("id");

  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("https://locknlock-dvxb.onrender.com/api/slide/all")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/category/image")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));

    fetchFavoriteProducts();

    fetch("https://locknlock-dvxb.onrender.com/api/product/new/12")
      .then((res) => res.json())
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/banner/all")
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/banner")
      .then((res) => res.json())
      .then((data) => setBannerProducts(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/dealhot/12")
      .then((res) => res.json())
      .then((data) => setProductsDealHot(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/bestseller/12")
      .then((res) => res.json())
      .then((data) => setProductsBestSeller(data))
      .catch((err) => console.log(err));
  }, []);

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

  const productIds = productFavorites.map((favorite) => favorite.productId);

  const updatedNewProducts = newProducts.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const updatedBannerProducts = bannerProducts.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const updatedProductsDealHot = productsDealHot.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const updatedProductsBestSeller = productsBestSeller.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const handleImageClick = async (product) => {
    if (product.icon_status === "on") {
      removeFromFavorites(userId, product.id);
    } else {
      addToFavorites(userId, product.id);
    }
  };

  const addToFavorites = async (userId, productId) => {
    try {
      const response = await axios.post(
        "https://locknlock-dvxb.onrender.com/api/favorite/add",
        {
          userId: userId,
          productId: productId,
        }
      );

      await axios.put(
        `https://locknlock-dvxb.onrender.com/api/product/favorite/${productId}`,
        {
          favoriteCount: 1,
        }
      );

      const favoriteId = response.data.id;
      fetchFavoriteProducts();
      onProductFavoritesChange();
      return favoriteId;
    } catch (error) {
      console.error("Lỗi khi thêm vào danh sách yêu thích:", error);
    }
  };

  const removeFromFavorites = async (userId, productId) => {
    try {
      await axios.delete(
        `https://locknlock-dvxb.onrender.com/api/favorite/${userId}/${productId}`
      );
      await axios.put(
        `https://locknlock-dvxb.onrender.com/api/product/favorite/${productId}`,
        {
          favoriteCount: -1,
        }
      );
      fetchFavoriteProducts();
      onProductFavoritesChange();
    } catch (error) {
      console.error("Lỗi khi xóa khỏi danh sách yêu thích:", error);
    }
  };

  const handleMoreProductsDealHot = (e) => {
    e.preventDefault();
    if (visibleProductsDealHot + 4 >= productsDealHot.length) {
      setVisibleProductsDealHot(productsDealHot.length);
      setShowMoreButtonDealHot(false);
    } else {
      setVisibleProductsDealHot(
        (prevVisibleProductsDealHot) => prevVisibleProductsDealHot + 4
      );
    }
  };

  const handleMoreProductsBestSeller = (e) => {
    e.preventDefault();
    if (visibleProductsBestSeller + 4 >= productsBestSeller.length) {
      setVisibleProductsBestSeller(productsBestSeller.length);
      setShowMoreButtonBestSeller(false);
    } else {
      setVisibleProductsBestSeller(
        (prevVisibleProductsBestSeller) => prevVisibleProductsBestSeller + 4
      );
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  function renderLink(id, parent, name, image) {
    if (parent === 0) {
      return (
        <Link
          to={`/productbycategoryparent/${id}?name=${name
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          <span>
            <img src={`https://locknlock-d1171.web.app/assets/imgs/${image}`} alt="" />
          </span>
          <h3>{name}</h3>
        </Link>
      );
    } else {
      return (
        <Link
          to={`/productbycategory/${id}?name=${name
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          <span>
            <img src={`https://locknlock-d1171.web.app/assets/imgs/${image}`} alt="" />
          </span>
          <h3>{name}</h3>
        </Link>
      );
    }
  }

  function addToCartClickHandle(id, name, image, price, sale, quantity) {
    if (quantity === 0) {
      toast.error("Đã hết sản phẩm", { position: "bottom-left" });
    } else {
      store.dispatch(
        AddCart({
          id: id,
          name: name,
          quantity: 1,
          price: price,
          sale: sale,
          image: image,
        })
      );
      toast.success("Đã thêm sản phẩm vào giỏ hàng", {
        position: "bottom-left",
      });
    }
  }

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <section className="main_section main_section1">
            <article id="slide-main" className="visual">
              <div
                className="swiper-container swiper-container1"
                style={{ height: "500px" }}
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  navigation={true}
                >
                  {slides.map((slide) => (
                    <SwiperSlide>
                      <div
                        className="swiper-slide"
                        style={{
                          backgroundImage: `url('https://locknlock-d1171.web.app/assets/imgs/${slide.image}')`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <Link to="" className="slide-more">
                          {" "}
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </article>
          </section>
          <section className="main_section main_section_box">
            <div className="root_width">
              <div className="section_title">
                <h3 className="main-h3">
                  <span>Bạn tìm gì?</span>
                </h3>
              </div>
              <div className="wrap-box">
                {categories.map((category) => (
                  <div className="in-box">
                    {renderLink(
                      category.id,
                      category.parent,
                      category.categoryName,
                      category.image
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="main_section main_section2">
            <article className="wrap-mProduct Product-list Product-list1">
              <div className="section_title">
                <h3 className="main-h3">
                  <span>Sản phẩm mới nhất</span>
                </h3>
              </div>
              <div
                className="in-article root_width Product-list-slide"
                style={{ height: "500px" }}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={4}
                  slidesPerGroup={1}
                  loop={true}
                  navigation={{
                    prevEl: ".swiper-button-prev2",
                    nextEl: ".swiper-button-next2",
                  }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                  {updatedNewProducts.map((product) => (
                    <SwiperSlide>
                      <li
                        className="swiper-slide"
                        style={{ width: "274.5px", marginRight: "14px" }}
                      >
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <Link
                                  className="BG-thumbnail"
                                  to={`/productdetail/${product.id}`}
                                >
                                  <img
                                    src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                    alt={product.productName}
                                  />
                                </Link>
                              </div>
                              <div className="wrap-list-icon">
                                <span className="cart-icon">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/btn_list_cart.gif"
                                    style={{ cursor: "pointer" }}
                                    alt="Thêm vào giỏ hàng"
                                    onClick={() =>
                                      addToCartClickHandle(
                                        product.id,
                                        product.productName,
                                        product.image,
                                        product.price,
                                        product.sale,
                                        product.quantity
                                      )
                                    }
                                    className="ec-admin-icon cart"
                                  />
                                </span>
                                <span className="view-icon">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/btn_prd_zoom.gif"
                                    style={{ cursor: "pointer" }}
                                    alt="Phóng to hình ảnh sản phẩm"
                                  />
                                </span>
                                <span className="wish-span">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/btn_wish_before.png"
                                    className="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                    style={{ cursor: "pointer" }}
                                    icon_status={product.icon_status}
                                    onClick={() => handleImageClick(product)}
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <Link to={`/productdetail/${product.id}`}>
                                <span
                                  style={{ fontSize: "12px", color: "#555555" }}
                                >
                                  {product.productName}
                                </span>
                              </Link>
                            </h4>
                            <ul className="xans-product-listitem">
                              <li>
                                <span
                                  style={{
                                    fontSize: "16px",
                                    color: "#0079e3",
                                    fontWeight: "bold",
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {formatter.format(product.price)}
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{ textDecoration: "line-through" }}
                                ></span>
                              </li>
                              <li className="xans-record-">
                                <span
                                  style={{
                                    fontSize: "16px",
                                    color: "#0079e3",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {formatter.format(
                                    product.price -
                                      product.price * (0.01 * product.sale)
                                  )}
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      color: "#f20000",
                                    }}
                                  >
                                    {product.sale}%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div className="wrap-new-icon">
                              <span className="wrap-new-span">
                                <img
                                  src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291923034500.png"
                                  className="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                                <img
                                  src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291922527800.png"
                                  className="icon_img"
                                  alt="Sản phẩm mới"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="swiper-button-prev swiper-button-prev2"
                  onClick={handlePrev}
                ></div>
                <div
                  className="swiper-button-next swiper-button-next2"
                  onClick={handleNext}
                ></div>
              </div>
            </article>
          </section>
          {banners.map((banner) => (
            <section className="main_section">
              <article className="wrap-mProduct Product-list">
                <div className="in-article">
                  <div className="root_width">
                    <div className="productList mProduct typeThumb">
                      <div className="wrap-banner">
                        <Link to="">
                          <img
                            src={`https://locknlock-d1171.web.app/assets/imgs/${banner.image}`}
                            alt={banner.image}
                          />
                        </Link>
                      </div>
                      <div
                        className="in-article root_width Product-list-slide"
                        style={{ height: "500px" }}
                      >
                        <Swiper
                          modules={[Navigation, Pagination]}
                          spaceBetween={0}
                          slidesPerView={4}
                          slidesPerGroup={1}
                          loop={true}
                          navigation={{
                            prevEl: `.swiper-button-prev0${banner.id}`,
                            nextEl: `.swiper-button-next0${banner.id}`,
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                        >
                          {updatedBannerProducts.map(
                            (product) =>
                              banner.id === product.bannerId && (
                                <SwiperSlide>
                                  <li
                                    className="swiper-slide"
                                    style={{
                                      width: "274.5px",
                                      marginRight: "14px",
                                    }}
                                  >
                                    <div className="inner">
                                      <div className="thumbnail">
                                        <div className="prdImg">
                                          <div className="wrap-thumbnail">
                                            <Link
                                              className="BG-thumbnail"
                                              to={`/productdetail/${product.id}`}
                                            >
                                              <img
                                                src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                                alt={product.productName}
                                              />
                                            </Link>
                                          </div>
                                          <div className="wrap-list-icon">
                                            <span className="cart-icon">
                                              <img
                                                src="https://locknlock-d1171.web.app/assets/imgs/btn_list_cart.gif"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                  addToCartClickHandle(
                                                    product.id,
                                                    product.productName,
                                                    product.image,
                                                    product.price,
                                                    product.sale,
                                                    product.quantity
                                                  )
                                                }
                                                alt="Thêm vào giỏ hàng"
                                                className="ec-admin-icon cart"
                                              />
                                            </span>
                                            <span className="view-icon">
                                              <img
                                                src="https://locknlock-d1171.web.app/assets/imgs/btn_prd_zoom.gif"
                                                style={{ cursor: "pointer" }}
                                                alt="Phóng to hình ảnh sản phẩm"
                                              />
                                            </span>
                                            <span className="wish-span">
                                              <img
                                                src="https://locknlock-d1171.web.app/assets/imgs/btn_wish_before.png"
                                                className="icon_img ec-product-listwishicon"
                                                alt="Trước đăng ký Sản phẩm yêu thích"
                                                style={{ cursor: "pointer" }}
                                                icon_status={
                                                  product.icon_status
                                                }
                                                onClick={() =>
                                                  handleImageClick(product)
                                                }
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="description">
                                        <h4 className="name">
                                          <Link
                                            to={`/productdetail/${product.id}`}
                                          >
                                            <span
                                              style={{
                                                fontSize: "12px",
                                                color: "#555555",
                                              }}
                                            >
                                              {product.productName}
                                            </span>
                                          </Link>
                                        </h4>
                                        <ul className="xans-product-listitem">
                                          <li className="xans-record-">
                                            <span
                                              style={{
                                                fontSize: "16px",
                                                color: "#0079e3",
                                                fontWeight: "bold",
                                                textDecoration: "line-through",
                                              }}
                                            >
                                              {formatter.format(product.price)}
                                            </span>
                                            <span
                                              id="span_product_tax_type_text"
                                              style={{
                                                textDecoration: "line-through",
                                              }}
                                            ></span>
                                          </li>
                                          <li className="xans-record-">
                                            <span
                                              style={{
                                                fontSize: "16px",
                                                color: "#0079e3",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              {formatter.format(
                                                product.price -
                                                  product.price *
                                                    (0.01 * product.sale)
                                              )}
                                              <span
                                                style={{
                                                  fontSize: "12px",
                                                  color: "#f20000",
                                                }}
                                              >
                                                {product.sale}%
                                              </span>
                                            </span>
                                          </li>
                                        </ul>
                                        <div className="wrap-new-icon">
                                          <span className="wrap-new-span">
                                            <img
                                              src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291923034500.png"
                                              className="icon_img"
                                              alt="Sản phẩm đề xuất"
                                            />
                                            <img
                                              src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291922527800.png"
                                              className="icon_img"
                                              alt="Sản phẩm mới"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </SwiperSlide>
                              )
                          )}
                        </Swiper>
                        <div
                          className={`swiper-button-prev swiper-button-prev0${banner.id}`}
                          onClick={handlePrev}
                        ></div>
                        <div
                          className={`swiper-button-next swiper-button-next0${banner.id}`}
                          onClick={handleNext}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ))}
          <section className="main_section main_section5">
            <article className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-product xans-product-listmain productList mProduct typeThumb">
                    <div className="section_title">
                      <h3 className="main-h3">
                        <span>Hàng bán chạy</span>
                      </h3>
                    </div>
                    <ul className="prdList prdList_num">
                      {updatedProductsBestSeller
                        .slice(0, visibleProductsBestSeller)
                        .map((product) => (
                          <li>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <Link
                                      className="BG-thumbnail"
                                      to={`/productdetail/${product.id}`}
                                    >
                                      <img
                                        src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                        alt={product.productName}
                                      />
                                    </Link>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_list_cart.gif"
                                        alt="Thêm vào giỏ hàng"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          addToCartClickHandle(
                                            product.id,
                                            product.productName,
                                            product.image,
                                            product.price,
                                            product.sale,
                                            product.quantity
                                          )
                                        }
                                        className="ec-admin-icon cart"
                                      />
                                    </span>
                                    <span className="view-icon">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_prd_zoom.gif"
                                        style={{ cursor: "pointer" }}
                                        alt="Phóng to hình ảnh sản phẩm"
                                      />
                                    </span>
                                    <span className="wish-span">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_wish_before.png"
                                        className="icon_img ec-product-listwishicon"
                                        alt="Trước đăng ký Sản phẩm yêu thích"
                                        style={{ cursor: "pointer" }}
                                        icon_status={product.icon_status}
                                        onClick={() =>
                                          handleImageClick(product)
                                        }
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <h4 className="name">
                                  <Link to={`/productdetail/${product.id}`}>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      {product.productName}
                                    </span>
                                  </Link>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-27 xans-product-listitem xans-product-27 spec">
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      {formatter.format(product.price)}
                                    </span>
                                    <span
                                      id="span_product_tax_type_text"
                                      style={{ textDecoration: "line-through" }}
                                    ></span>
                                  </li>
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      {formatter.format(
                                        product.price -
                                          product.price * (0.01 * product.sale)
                                      )}
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#f20000",
                                        }}
                                      >
                                        {product.sale}%
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span">
                                    <img
                                      src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291923279700.png"
                                      className="icon_img"
                                      alt="Sản phẩm hết hàng"
                                    />
                                    <img
                                      src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291923034500.png"
                                      className="icon_img"
                                      alt="Sản phẩm đề xuất"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                    {visibleProductsBestSeller < productsBestSeller.length &&
                      showMoreButtonBestSeller && (
                        <div
                          onClick={handleMoreProductsBestSeller}
                          className="xans-product xans-product-listmore productPaginate typeMoreview"
                        >
                          <Link to="" className="btnMore">
                            <span>More</span>
                          </Link>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="main_section main_section6">
            <article className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-product xans-product-listmainproductList mProduct typeThumb">
                    <div className="section_title">
                      <h3 className="main-h3">
                        <span>Deal Hot</span>
                      </h3>
                    </div>
                    <ul className="prdList">
                      {updatedProductsDealHot
                        .slice(0, visibleProductsDealHot)
                        .map((product) => (
                          <li>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <Link
                                      className="BG-thumbnail"
                                      to={`/productdetail/${product.id}`}
                                    >
                                      <img
                                        src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                        alt={product.productName}
                                      />
                                    </Link>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_list_cart.gif"
                                        alt="Thêm vào giỏ hàng"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          addToCartClickHandle(
                                            product.id,
                                            product.productName,
                                            product.image,
                                            product.price,
                                            product.sale,
                                            product.quantity
                                          )
                                        }
                                        className="ec-admin-icon cart"
                                      />
                                    </span>
                                    <span className="view-icon">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_prd_zoom.gif"
                                        style={{ cursor: "pointer" }}
                                        alt="Phóng to hình ảnh sản phẩm"
                                      />
                                    </span>
                                    <span className="wish-span">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_wish_before.png"
                                        className="icon_img ec-product-listwishicon"
                                        alt="Trước đăng ký Sản phẩm yêu thích"
                                        style={{ cursor: "pointer" }}
                                        icon_status={product.icon_status}
                                        onClick={() =>
                                          handleImageClick(product)
                                        }
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <h4 className="name">
                                  <Link to={`/productdetail/${product.id}`}>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      {product.productName}
                                    </span>
                                  </Link>
                                </h4>
                                <ul className="xans-product xans-product-listitem spec">
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      {formatter.format(product.price)}
                                    </span>
                                    <span
                                      id="span_product_tax_type_text"
                                      style={{ textDecoration: "line-through" }}
                                    ></span>
                                  </li>
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      {formatter.format(
                                        product.price -
                                          product.price * (0.01 * product.sale)
                                      )}
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#f20000",
                                        }}
                                      >
                                        {product.sale}%
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span">
                                    <img
                                      src="https://locknlock-d1171.web.app/assets/imgs/icon_202206291923034500.png"
                                      className="icon_img"
                                      alt="Sản phẩm đề xuất"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                    {visibleProductsDealHot < productsDealHot.length &&
                      showMoreButtonDealHot && (
                        <div
                          onClick={handleMoreProductsDealHot}
                          className="xans-product xans-product-listmore productPaginate typeMoreview"
                        >
                          <Link to="" className="btnMore">
                            <span>More</span>
                          </Link>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="main_section main_section7">
            <article className="root_width">
              <div className="wrap-banner foot-banner clearBoth">
                <div className="box50">
                  <div className="in-box50">
                    <Link to="/stores">
                      <img src="https://locknlock-d1171.web.app/assets/imgs/banner3.gif" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="box50">
                  <div className="in-box50">
                    <Link to="/customercare">
                      <img src="https://locknlock-d1171.web.app/assets/imgs/banner4.gif" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <ToastContainer />
    </div>
  );
}

export default Home;
