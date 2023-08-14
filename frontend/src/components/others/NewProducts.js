import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [productFavorites, setProductFavorites] = useState([]);
  const userId = localStorage.getItem("id");
  useEffect(() => {
    fetch("https://locknlock-dvxb.onrender.com/api/product/new/36")
      .then((res) => res.json())
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));
      fetchFavoriteProducts();
  }, []);

  const productIds = productFavorites.map((favorite) => favorite.productId);

  const updatedProducts = newProducts.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = updatedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(updatedProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "this" : "other";
    return (
      <li>
        <Link onClick={handleClick} id={number} to="" className={activeClass}>
          {number}
        </Link>
      </li>
    );
  });

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
          <div className="root_width">
            <div className="xans-element- xans-product xans-product-menupackage">
              <div className="xans-element- xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li title="Current Page">
                    <strong>Hàng mới</strong>
                  </li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner">
                  <img
                    src="https://locknlock-d1171.web.app/assets/imgs/Sản phẩm mới_1140x282_0621.jpg"
                    alt=""
                  />
                </p>
                <h2>
                  <span>Hàng mới</span>
                </h2>
              </div>
            </div>
            <div className="wrap-tab-product-section">
              <div id="tab1" className="tab-section menuTab_on">
                <article className="wrap-mProduct Product-list">
                  <div className="in-article">
                    <div className="root_width">
                      <div className="xans-element- xans-product xans-product-listmain-21 xans-product-listmain xans-product-21 productList mProduct typeThumb">
                        <ul className="prdList">
                          {currentItems.map((product) => (
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
                                          id="eListPrdImage652_22"
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
                                          onclick="zoom('652', '1', '22','', '');"
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
                                        style={{
                                          textDecoration: "line-through",
                                        }}
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
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="xans-product xans-product-normalpaging ec-base-paginate">
                <ol>{renderPageNumbers}</ol>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewProducts;
