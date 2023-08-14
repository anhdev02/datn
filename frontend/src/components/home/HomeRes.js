import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const HomeRes = () => {
  const [slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [bannerProducts, setBannerProducts] = useState([]);
  const [productsBestSeller, setProductsBestSeller] = useState([]);
  const [productsDealHot, setProductsDealHot] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);
  const [visibleProductsBestSeller, setVisibleProductsBestSeller] = useState(6);
  const [visibleProductsDealHot, setVisibleProductsDealHot] = useState(6);
  const [showMoreButtonBestSeller, setShowMoreButtonBestSeller] =
    useState(true);
  const [showMoreButtonDealHot, setShowMoreButtonDealHot] = useState(true);
  const userId = localStorage.getItem("id");
  useEffect(() => {
    fetch("https://locknlock-dvxb.onrender.com/api/slide/all")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/category/image")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/banner/all")
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/new/12")
      .then((res) => res.json())
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/banner")
      .then((res) => res.json())
      .then((data) => setBannerProducts(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/bestseller/12")
      .then((res) => res.json())
      .then((data) => setProductsBestSeller(data))
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/product/dealhot/12")
      .then((res) => res.json())
      .then((data) => setProductsDealHot(data))
      .catch((err) => console.log(err));

    fetchFavoriteProducts();
  }, []);

  const handleMoreProductsBestSeller = (e) => {
    e.preventDefault();
    if (visibleProductsBestSeller + 6 >= productsBestSeller.length) {
      setVisibleProductsBestSeller(productsBestSeller.length);
      setShowMoreButtonBestSeller(false);
    } else {
      setVisibleProductsBestSeller(
        (prevVisibleProductsBestSeller) => prevVisibleProductsBestSeller + 6
      );
    }
  };

  const handleMoreProductsDealHot = (e) => {
    e.preventDefault();
    if (visibleProductsDealHot + 6 >= productsDealHot.length) {
      setVisibleProductsDealHot(productsDealHot.length);
      setShowMoreButtonDealHot(false);
    } else {
      setVisibleProductsDealHot(
        (prevVisibleProductsDealHot) => prevVisibleProductsDealHot + 6
      );
    }
  };

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

  const updatedProductsBestSeller = productsBestSeller.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const updatedProductsDealHot = productsDealHot.map((product) => {
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
    } catch (error) {
      console.error("Lỗi khi xóa khỏi danh sách yêu thích:", error);
    }
  };

  return (
    <div id="contents">
      <section className="main_section main_section1">
        <article id="slide-main" className="visual">
          <div
            className="swiper-container swiper-container1"
            style={{ height: "175px" }}
          >
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={false}
              style={{width: '100%', height: '100%'}}
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
                <Link
                  to={`/productbycategory/${
                    category.id
                  }?name=${category.categoryName
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <span>
                    <img src={`https://locknlock-d1171.web.app/assets/imgs/${category.image}`} alt="" />
                  </span>
                  <h3>{category.categoryName}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="main_section main_section2">
        <article className="wrap-mProduct Product-list Product-list1">
          <div className="section_title">
            <h3 className="main-h3">
              <span>SẢN PHẨM MỚI</span>
            </h3>
          </div>
          <div
            className="in-article root_width Product-list-slide"
            style={{ height: "270px", padding: "10px" }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={2}
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
                    className="swiper-slide swiper-slide-duplicate"
                    style={{ marginRight: "14px" }}
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
                                id="eListPrdImage769_2"
                                src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                alt={product.productName}
                              />
                            </Link>
                          </div>
                          <div className="wrap-list-icon">
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
                            {product.productName}
                          </Link>
                        </h4>
                        <ul className="xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
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
                            >
                              {" "}
                            </span>
                          </li>
                          <li className=" xans-record-">
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
                              )}{" "}
                              <span
                                style={{ fontSize: "12px", color: "#f20000" }}
                              >
                                {product.sale}%
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div className="wrap-new-icon">
                          <span className="wrap-new-span">
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
          </div>
        </article>
      </section>
      {banners.map((banner) => (
        <section className="main_section main_section3">
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
                    style={{ height: "260px", padding: "10px" }}
                    className="in-article root_width Product-list-slide"
                  >
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={2}
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
                                id="anchorBoxId_740"
                                className="swiper-slide xans-record-"
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
                                            id="eListPrdImage740_3"
                                            src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                            alt={product.productName}
                                          />
                                        </Link>
                                      </div>
                                      <div className="wrap-list-icon">
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
                                        {product.productName}
                                      </Link>
                                    </h4>
                                    <ul className="xans-element- xans-product xans-product-listitem-2 xans-product-listitem xans-product-2 spec">
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
                                      <span className="wrap-new-span"></span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </SwiperSlide>
                          )
                      )}
                    </Swiper>
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
              <div className="xans-element- xans-product xans-product-listmain-27 xans-product-listmain xans-product-27 productList mProduct typeThumb">
                <div className="section_title">
                  <h3 className="main-h3">
                    <span>HÀNG BÁN CHẠY</span>
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
                                {product.productName}
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
                                  style={{ fontSize: "12px", color: "#555555" }}
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
                              <span className="wrap-new-span"></span>
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
              <div className="xans-element- xans-product xans-product-listmain-21 xans-product-listmain xans-product-21 productList mProduct typeThumb">
                <div className="section_title">
                  <h3 className="main-h3">
                    <span>HÀNG KHUYẾN MÃI</span>
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
                                {product.productName}
                              </Link>
                            </h4>
                            <ul className="xans-element- xans-product xans-product-listitem-21 xans-product-listitem xans-product-21 spec">
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
                                  style={{ fontSize: "12px", color: "#555555" }}
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
                              <span className="wrap-new-span"></span>
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
    </div>
  );
};

export default HomeRes;
