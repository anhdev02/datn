import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ConfirmOrder = () => {
  const [order, setOrder] = useState([]);
  const [orderChange, setOrderChange] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    document.title = "Đơn hàng đã xác nhận";
    loadData();
  }, []);

  const loadData = () => {
    fetch("https://locknlock-dvxb.onrender.com/api/order/confirm")
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = order.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(order.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const productRows = products
    .map(
      (product, index) =>
        `<tr key="${index}">
    <td>${product.productName}</td>
    <td>${formatter.format(
      (product.price - product.price * (0.01 * product.sale)) * product.quantity
    )}</td>
    <td>${product.quantity}</td>
  </tr>`
    )
    .join("");

  function sendMail() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      emailAddress: orderChange && orderChange[0].email,
      emailSubject: "Cập nhật trạng thái đơn hàng",
      emailBody:
        orderChange &&
        `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333333;
          }
          p {
            color: #666666;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #999999;
            font-size: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #dddddd;
          }
          th {
            background-color: #f5f5f5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Cập nhật trạng thái đơn hàng.</h1>
          <h4>Đơn hàng của bạn đã được chuyển sang trạng thái ${orderChange[0].status}.</h4>
          <table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
      
          <p>Thông tin người nhận:</p>
          <address>
            <p>Tên: ${orderChange[0].username}</p>
            <p>Địa chỉ: ${orderChange[0].address}</p>
            <p>Số điện thoại: ${orderChange[0].phone}</p>
          </address>
          
          <p>Cảm ơn bạn đã mua hàng!</p>
          <p class="footer">Đội ngũ hỗ trợ của chúng tôi</p>
        </div>
      </body>
    </html>`,
      emailContentType: "text/html",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://locknlock-dvxb.onrender.com/api/auth/send-email",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  const handleSelectChange = (event) => {
    const dataId = event.target.dataset.id;
    const dataName = event.target.dataset.name;
    const selectedOption = event.target.value;
    var url =
      "https://locknlock-dvxb.onrender.com/api/order/status/" +
      dataId;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      status: selectedOption,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast.success("Đã cập nhật trạng thái đơn hàng!", {
          position: "top-right",
        });
        loadData();
        fetch(
          `https://locknlock-dvxb.onrender.com/api/order/user/${dataName}`
        )
          .then((res) => res.json())
          .then((data) => {
            setOrderChange(data);
            fetch(
              `https://locknlock-dvxb.onrender.com/api/orderdetail/${data[0].id}`
            )
              .then((res) => res.json())
              .then((data_child) => {
                setProducts(data_child);
                sendMail();
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log("error", error));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "active" : "";
    return (
      <li
        className={`page-item ${activeClass}`}
        style={{ display: "inline-block" }}
      >
        <a onClick={handleClick} id={number} className="page-link" href="#st">
          {number}
        </a>
      </li>
    );
  });

  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn xóa đơn hàng?", event);
    if (result) {
      var id = event.target.id;
      var url =
        "https://locknlock-dvxb.onrender.com/api/order/" + id;
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
        .then((result) => {
          console.log(result);
          toast.success("Đã xóa tạm thời đơn hàng!", { position: "top-right" });
          loadData();
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Đơn hàng</h4>
      <div className="card">
        <h5 className="card-header">Danh sách đã xác nhận</h5>
        <div
          style={{ height: "50vh" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Tên người nhận</th>
                <th>Địa chỉ</th>
                <th>Điện thoại</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {currentItems &&
                currentItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <strong>{item.username}</strong>
                      </td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.address}
                          </p>
                        </div>
                      </td>
                      <td>{item.phone}</td>
                      <td>
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.total)}
                      </td>
                      <td>
                        <select
                          className="form-select"
                          data-id={item.id}
                          data-name={item.username}
                          onChange={handleSelectChange}
                        >
                          <option
                            selected={item.status === "Chờ Thanh Toán"}
                            value="Chờ Thanh Toán"
                          >
                            Chờ Thanh Toán
                          </option>
                          <option
                            selected={item.status === "Chuẩn Bị Giao Hàng"}
                            value="Chuẩn Bị Giao Hàng"
                          >
                            Chuẩn Bị Giao Hàng
                          </option>
                          <option
                            selected={item.status === "Đang Vận Chuyển"}
                            value="Đang Vận Chuyển"
                          >
                            Đang Vận Chuyển
                          </option>
                          <option
                            selected={item.status === "Đã Giao"}
                            value="Đã Giao"
                          >
                            Đã Giao
                          </option>
                        </select>
                      </td>
                      <td>{item.date}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <Link
                              className="dropdown-item"
                              to={"/dashboard/order/" + item.id}
                            >
                              <i class="bx bx-detail"></i> Chi tiết
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
                              onClick={addTrash}
                            >
                              <i className="bx bx-trash me-1" /> Xóa
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <nav
        aria-label="Page navigation"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <ul className="pagination" style={{ display: "inline-block" }}>
          {renderPageNumbers}
        </ul>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default ConfirmOrder;
