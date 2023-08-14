import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { ToastContainer, toast } from "react-toastify";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const Order = () => {
  const userId = parseInt(localStorage.getItem("id"), 10);
  const user = localStorage.getItem("username");
  const [productFavorites, setProductFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [originalOrders, setOriginalOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${userId}`)
      .then((res) => res.json())
      .then((data) => setProductFavorites(data))
      .catch((err) => console.log(err));
      loadData();
  }, []);

  const loadData = () => {
    fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOriginalOrders(data);
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }

  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn hủy đơn hàng?", event);
    if (result) {
      var id = event.target.id;
      var url = "https://locknlock-dvxb.onrender.com/api/order/" + id;
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        confirm: false,
        trash: true,
      });
  
      var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) =>{
          console.log(result);
          loadData();
          toast.success("Đã hủy đơn hàng!", { position: "bottom-left" });
        })
        .catch((error) => console.log("error", error));
    }

  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / itemsPerPage); i++) {
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

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    filterOrders(event.target.value);
    setCurrentPage(1);
  };

  const filterOrders = (status) => {
    if (status === "all") {
      setOrders(originalOrders);
    } else {
      const filteredOrders = originalOrders.filter(
        (order) => order.status === status
      );
      setOrders(filteredOrders);
    }
  };

  const fetchData = async (orderId) => {
    try {
      const response = await fetch(
        `https://locknlock-dvxb.onrender.com/api/orderdetail/${orderId}`
      );
      const data = await response.json();
      setOrderDetails((prevState) => ({
        ...prevState,
        [orderId]: data,
      }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    orders.forEach((order) => {
      fetchData(order.id);
    });
  }, [orders]);

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
                  <Link to="/account">Tài Khoản Của Tôi</Link>
                </li>
                <li title="Trang Hiện Tại">
                  <strong>Đơn hàng</strong>
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
                    <li style={{ display: "none" }} className="my_li6">
                      <Link to="">Nhận xét của tôi</Link>
                    </li>
                    <li className="my_li7">
                      <Link to="/accountinfo">Thông tin tài khoản</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="myshpp-right">
                <div className="titleArea">
                  <h2>Đơn hàng</h2>
                </div>
                <form
                  method="GET"
                  id="OrderHistoryForm"
                  name="OrderHistoryForm"
                >
                  <div className="xans-element- xans-myshop xans-myshop-orderhistoryhead">
                    <fieldset className="ec-base-boxB">
                      <legend>Khoảng Thời Gian</legend>
                      <div className="stateSelect">
                        <select
                          id="order_status"
                          name="order_status"
                          className="fSelect"
                          onChange={handleStatusChange}
                        >
                          <option value="all">
                            Tình trạng xử lý tất cả đơn hàng
                          </option>
                          <option value="Chờ Thanh Toán">Chờ Thanh Toán</option>
                          <option value="Chuẩn Bị Giao Hàng">
                            Chuẩn Bị Giao Hàng
                          </option>
                          <option value="Đang Vận Chuyển">
                            Đang Vận Chuyển
                          </option>
                          <option value="Đã Giao">Đã Giao</option>
                        </select>
                      </div>
                    </fieldset>
                  </div>
                  <input id="mode" name="mode" defaultValue type="hidden" />
                  <input id="term" name="term" defaultValue type="hidden" />
                </form>
                <div className="xans-element- xans-myshop xans-myshop-orderhistorylistitem ec-base-table typeList">
                  <table border={1}>
                    <caption>Thông tin sản phẩm đặt hàng</caption>
                    <thead>
                      <tr>
                        <th className="historylist1" scope="col">
                          Sản phẩm
                        </th>
                        <th className="historylist2" scope="col">
                          Số tiền
                        </th>
                        <th className="historylist3" scope="col">
                          Tình Trạng
                        </th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      {currentItems.map((order) => (
                        <React.Fragment key={order.id}>
                          <tr>
                            <td colSpan={3}>
                              <div className="number">
                                <Link to="">
                                  <strong>Mã đơn hàng | </strong>
                                  {order.id}
                                </Link>
                                <strong>Ngày đặt | </strong>
                                {order.date}
                                {
                                  order.status !== "Đã Giao" && (
                                    <Link
                                      to="/"
                                      id={order.id}
                                      className="btnWhite"
                                      style={{
                                        padding: "1px 17px",
                                        float: "right",
                                        marginRight: "37px",
                                        marginTop: "-8px",
                                      }}
                                      onClick={addTrash}
                                    >
                                      Huỷ
                                    </Link>
                                  )
                                }
                              </div>
                            </td>
                          </tr>
                          {orderDetails[order.id]?.map((item) => (
                            <tr>
                              <td colSpan={3}>
                                <div className="wrap-historylist">
                                  <div className="historylist1">
                                    <div className="thumb">
                                      <Link to={`/productdetail/${item.id}`}>
                                        <img
                                          src={`https://locknlock-d1171.web.app/assets/imgs/${item.image}`}
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                    <div className="product left top">
                                      <strong className="name">
                                        <Link
                                          to={`/productdetail/${item.id}`}
                                          className="ec-product-name"
                                        >
                                          {item.productName}
                                        </Link>
                                      </strong>
                                    </div>
                                  </div>
                                  <div className="historylist2">
                                    <strong>
                                      {formatter.format(
                                        (item.price -
                                          item.price * (0.01 * item.sale)) *
                                          item.quantity
                                      )}
                                    </strong>
                                  </div>
                                  <div className="historylist3">
                                    <div className="state">
                                      <p className="txtEmB">{order.status}</p>
                                    </div>
                                    <div>
                                      <p className>-</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <p className="message displaynone">
                    Bạn không có lịch sử đặt hàng.
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

export default Order;
