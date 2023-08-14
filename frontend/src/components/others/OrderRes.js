import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const OrderRes = () => {
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [originalOrders, setOriginalOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOriginalOrders(data);
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <a onClick={handleClick} id={number} href="#st" className={activeClass}>
          {number}
        </a>
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
    <div id="contents">
      <div className="root_width myshop_width">
        <form method="GET" id="OrderHistoryForm" name="OrderHistoryForm">
          <div className="xans-element- xans-myshop xans-myshop-orderhistoryhead Myshop_section">
            <fieldset>
              <legend>Khoảng Thời Gian</legend>
              <h2>Tìm đơn hàng</h2>
              <div className="stateSelect">
                <select
                  id="order_status"
                  name="order_status"
                  className="fSelect"
                  onChange={handleStatusChange}
                >
                  <option value="all">Tình trạng xử lý tất cả đơn hàng</option>
                  <option value="Chờ Thanh Toán">Chờ Thanh Toán</option>
                  <option value="Chuẩn Bị Giao Hàng">Chuẩn Bị Giao Hàng</option>
                  <option value="Đang Vận Chuyển">Đang Vận Chuyển</option>
                  <option value="Đã Giao">Đã Giao</option>
                </select>
              </div>
            </fieldset>
          </div>
        </form>
        <div className="xans-element- xans-myshop xans-myshop-orderhistorylistitem Myshop_section">
          <div className="orderList ">
            {currentItems.map((order) => (
              <div className="order order_border xans-record-">
                <h3>
                  <span className="number" title="Order No.">
                    <a href="detail.html?order_id=20230317-0000019&page=1&history_start_date=2023-02-25&history_end_date=2023-05-26">
                      Mã đơn hàng | {order.id}
                    </a>
                  </span>
                </h3>
                <p className>
                  <span className="date" title="Order Date">
                    {order.date}
                  </span>
                </p>
                {orderDetails[order.id]?.map((item) => (
                  <div className="ec-base-prdInfo">
                    <div className="prdBox">
                      <div className="thumbnail">
                        <Link to={`/productdetail/${item.id}`}>
                          <img
                            src={`https://locknlock-d1171.web.app/assets/imgs/${item.image}`}
                            width={71}
                            height={71}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="description">
                        <strong className="prdName" title="Product">
                          <Link
                            to={`/productdetail/${item.id}`}
                            className="ec-product-name"
                          >
                            {item.productName}
                          </Link>
                        </strong>
                        <ul className="info">
                          <li>
                            <span className="price" title="Price">
                              <strong>
                                {formatter.format(
                                  (item.price -
                                    item.price * (0.01 * item.sale)) *
                                    item.quantity
                                )}
                              </strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="prdFoot" title="Order Status">
                      <div className="gLeft">
                        {order.status} <span className="store" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="empty displaynone">Bạn không có lịch sử đặt hàng.</p>
        </div>
        <div className="xans-product xans-product-normalpaging ec-base-paginate">
          <ol>{renderPageNumbers}</ol>
        </div>
      </div>
    </div>
  );
};

export default OrderRes;
