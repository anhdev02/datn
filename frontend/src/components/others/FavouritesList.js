import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";
import axios from "axios";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const FavouritesList = () => {
  const userId = localStorage.getItem('id');
  const user = localStorage.getItem("username");
  const [productsFavorites, setProductsFavorites] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
      fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));
      loadData();
  }, []);

  const loadData = () => {
    fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${userId}`)
      .then((res) => res.json())
      .then((data) => setProductsFavorites(data))
      .catch((err) => console.log(err));
      fetchFavoriteProducts();
  };

  const productIds = productFavorites.map((favorite) => favorite.productId);
  const updatedProducts = productsFavorites.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems;
  if (productsFavorites.length > 0) {
    currentItems = updatedProducts.slice(indexOfFirstItem, indexOfLastItem);
  } else {
    currentItems = [];
  }

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
      loadData();
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
      loadData();
    } catch (error) {
      console.error("Lỗi khi xóa khỏi danh sách yêu thích:", error);
    }
  };

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/account">Tài khoản của tôi</Link>
                </li>
                <li title="Curren Page">
                  <strong>Danh sách yêu thích</strong>
                </li>
              </ol>
            </div>
            <div className="clearBoth">
              <div className="myshpp-left">
                <div className="customer_sidenav">
                  <h3 className="customer_h3">
                    <Link to="/account" className="on">
                      Tài khoản của tôi
                    </Link>
                  </h3>
                  <ul className="xans-element- xans-myshop xans-myshop-main my_ul">
                    <li className="my_li1">
                      <Link to="/order">
                        Đơn hàng
                        <span className="xans-element- xans-myshop xans-myshop-orderhistorytab">
                          (<span id="xans_myshop_total_orders">{orders.length}</span>)
                        </span>
                      </Link>
                    </li>
                    <li className="my_li2">
                      <Link to="/addressbook">Sổ địa chỉ</Link>
                    </li>
                    <li className="my_li3">
                      <Link to="/favouriteslist">
                        Danh sách yêu thích
                        <span className="count">
                          (
                          <span className="xans_myshop_main_interest_prd_cnt">
                            {productsFavorites.length}
                          </span>
                          )
                        </span>
                      </Link>
                    </li>
                    <li className="my_li4">
                      <Link to="/seen">Đã xem</Link>
                    </li>
                    <li className="my_li7">
                      <Link to="/accountinfo">Thông tin tài khoản</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="myshpp-right">
                <div className="titleArea">
                  <h2>Danh sách yêu thích</h2>
                </div>
                <div className="xans-element- xans-myshop xans-myshop-wishlist ec-base-table typeList Product-list xans-record-">
                  <ul className="xans-element- xans-myshop xans-myshop-wishlistitem prdList">
                    { currentItems &&
                      currentItems.map((product) => (
                        <li>
                          <div className="inner">
                            <div className="thumbnail">
                              <div className="prdImg">
                                <div className="wrap-thumbnail">
                                  <Link className="BG-thumbnail" to={`/productdetail/${product.id}`}>
                                    <img
                                      src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                      alt=""
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
                                  onClick={() => handleImageClick(product)}
                                />
                              </span>
                            </div>
                              </div>
                            </div>
                            <div className="description">
                              <h4 className="name">
                                <Link to={`/productdetail/${product.id}`} className="ec-product-name">
                                  {product.productName}
                                </Link>
                              </h4>
                              <ul className="xans-element- xans-product xans-product-listitem spec">
                              </ul>
                              <ul className="spec">
                                <li>
                                  <strong className="wish-price1 strike">
                                    {formatter.format(product.price)}
                                  </strong>
                                  <strong className>{formatter.format(
                                    product.price -
                                      product.price * (0.01 * product.sale)
                                  )}</strong>
                                </li>
                              </ul>
                              <div className="wrap-new-icon">
                                <span className="wrap-new-span" />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="xans-product xans-product-normalpaging ec-base-paginate">
                <ol>
                  {renderPageNumbers}
                </ol>
              </div>
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

export default FavouritesList;
