import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const Seen = () => {
  const userId = localStorage.getItem("id");
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const loadData = () => {
    const viewedProductsData =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];
    setViewedProducts(viewedProductsData);
  };

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));

    fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${userId}`)
      .then((res) => res.json())
      .then((data) => setProductFavorites(data))
      .catch((err) => console.log(err));

    loadData();
  }, []);



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = viewedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(viewedProducts.length / itemsPerPage); i++) {
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

  const removeFromViewedProducts = (productId) => {
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    const updatedViewedProducts = viewedProducts.filter((product) => product.id !== productId);
    localStorage.setItem('viewedProducts', JSON.stringify(updatedViewedProducts));
    loadData();
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
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li title="Current Page">
                  <strong>Đã Xem Gần Đây</strong>
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
                          (
                          <span id="xans_myshop_total_orders">
                            {orders.length}
                          </span>
                          )
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
                            {productFavorites.length}
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
                  <h2>Đã Xem Gần Đây</h2>
                </div>
                <div className="xans-element- xans-product xans-product-recentlist ec-base-table typeList Product-list xans-record-">
                  <ul className="xans-element- xans-product xans-product-listitem prdList recent_List">
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
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <Link
                                to=""
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
                                class="btnSubmit  wish-thum-left"
                              >
                                Mua
                              </Link>
                              <Link
                                to=""
                                onClick={() => removeFromViewedProducts(product.id)}
                                class="btnNormal wish-thum-right btn_recent_del"
                              >
                                Xóa
                              </Link>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <Link to={`/productdetail/${product.id}`}>
                                {product.productName}
                              </Link>
                            </h4>
                            <p className="strike price1">
                              <strong className="txtEm">
                                {formatter.format(product.price)}
                              </strong>
                            </p>
                            <p className="txtEm">
                              <strong>
                                {formatter.format(
                                  product.price -
                                    product.price * (0.01 * product.sale)
                                )}
                              </strong>
                            </p>
                            <div className="wrap-new-icon">
                              <span className="wrap-new-span"> </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={
                      viewedProducts.length !== 0
                        ? "message displaynone"
                        : "message"
                    }
                  >
                    Bạn không có sản phẩm nào được xem gần đây.
                  </p>
                </div>
                <div className="xans-product xans-product-normalpaging ec-base-paginate">
                  <ol>{renderPageNumbers}</ol>
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

export default Seen;
