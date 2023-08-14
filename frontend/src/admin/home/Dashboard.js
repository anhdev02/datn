import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const today = new Date();

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

function formatRevenue(revenue) {
  if (revenue >= 1000000) {
    return (revenue / 1000000).toFixed(3).replace(/\.?0+$/, "") + "M";
  } else if (revenue >= 1000) {
    return (revenue / 1000).toFixed(3).replace(/\.?0+$/, "") + "K";
  } else {
    return revenue.toString();
  }
}

const Dashboard = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [allOrders, setAllOrders] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    document.title = 'Dashboard';
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const requests = [
        axios.get("https://locknlock-dvxb.onrender.com/api/revenue", {
          params: {
            startDate: "2022-01-01",
            endDate: formatDate(today),
          },
        }),
        axios.get("https://locknlock-dvxb.onrender.com/api/user/date", {
          params: {
            startDate: "2022-01-01",
            endDate: formatDate(today),
          },
        }),
        axios.get("https://locknlock-dvxb.onrender.com/api/order/all", {
          params: {
            startDate: "2022-01-01",
            endDate: formatDate(today),
          },
        }),
        axios.get("https://locknlock-dvxb.onrender.com/api/order/date", {
          params: {
            startDate: "2022-01-01",
            endDate: formatDate(today),
          },
        }),
      ];
  
      const responses = await Promise.all(requests);
  
      const revenueResponse = responses[0];
      const userResponse = responses[1];
      const allOrdersResponse = responses[2];
      const ordersResponse = responses[3];
  
      setTotalRevenue(revenueResponse.data.totalRevenue);
  
      let totalCount = 0;
      for (const user of userResponse.data) {
        const roles = user.roles.map((role) => role.name);
        if (roles.length === 1) {
          totalCount++;
        }
      }
      setCount(totalCount);
  
      setAllOrders(allOrdersResponse.data);
      setOrders(ordersResponse.data);
    } catch (error) {
      console.log(error.message);
    }
  
    fetch("https://locknlock-dvxb.onrender.com/api/product/bestseller/5")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };
  

  const calculateDateRange = (selectedValue) => {
    const startDate = new Date();
    const endDate = new Date();
  
    if (selectedValue === "w") {
      startDate.setDate(endDate.getDate() - endDate.getDay());
    } else if (selectedValue === "m") {
      startDate.setDate(1);
    } else if (selectedValue === "3m") {
      startDate.setMonth(endDate.getMonth() - 2);
      startDate.setDate(1);
    } else if (selectedValue === "6m") {
      startDate.setMonth(endDate.getMonth() - 5);
      startDate.setDate(1);
    } else if (selectedValue === "y") {
      startDate.setMonth(0);
      startDate.setDate(1);
    } else if(selectedValue === "all") {
      startDate.setFullYear(2022, 0, 1);
    }
  
    return {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    };
  };
  
  const handleChange = async (event) => {
    const selectedValue = event.target.value;
  
    try {
      const { startDate, endDate } = calculateDateRange(selectedValue);
  
      const [revenueResponse, userResponse, allOrderResponse, orderResponse] = await Promise.all([
        axios.get("https://locknlock-dvxb.onrender.com/api/revenue", {
          params: {
            startDate: startDate,
            endDate: endDate,
          },
        }),
        axios.get("https://locknlock-dvxb.onrender.com/api/user/date", {
          params: {
            startDate: startDate,
            endDate: endDate,
          },
        }),
        axios.get("https://locknlock-dvxb.onrender.com/api/order/all", {
          params: {
            startDate: startDate,
            endDate: endDate,
          },
        }),
        axios.get("https://locknlock-dvxb.onrender.com/api/order/date", {
          params: {
            startDate: startDate,
            endDate: endDate,
          },
        }),
      ]);
  
      setTotalRevenue(revenueResponse.data.totalRevenue);
  
      let totalCount = 0;
      for (const user of userResponse.data) {
        const roles = user.roles.map((role) => role.name);
        if (roles.length === 1) {
          totalCount++;
        }
      }
      setCount(totalCount);

      setAllOrders(allOrderResponse.data);
      setOrders(orderResponse.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="mb-3 row">
        <div className="col-md-12">
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            name="parent"
            onChange={handleChange}
          >
            <option selected value="all">
              Tất cả
            </option>
            <option value="t">Hôm nay</option>
            <option value="w">Tuần gần nhất</option>
            <option value="m">Tháng gần nhất</option>
            <option value="3m">3 Tháng gần nhất</option>
            <option value="6m">6 Tháng gần nhất</option>
            <option value="y">Năm gần nhất</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-4 order-1">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="https://locknlock-d1171.web.app/admin/assets/img/icons/unicons/user-286-512.png"
                        alt="chart success"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt3"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          View More
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="fw-semibold d-block mb-1">Người dùng</span>
                  <h3 className="card-title mb-2">{count}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-6 mb-4">
              <div className="card" style={{ minHeight: "163.55px" }}>
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="https://locknlock-d1171.web.app/admin/assets/img/icons/unicons/miscellaneous-text-service.png"
                        alt="Credit Card"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt6"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt6"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          View More
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span>Doanh thu</span>
                  <h3 className="card-title text-nowrap mb-1">
                    {formatRevenue(totalRevenue)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Total Revenue */}
        <div className="col-12 col-md-8 col-lg-6 order-3 order-md-2">
          <div className="row">
            <div className="col-6 mb-4">
              <div className="card" style={{ minHeight: "163.55px" }}>
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <img
                        src="https://locknlock-d1171.web.app/admin/assets/img/icons/unicons/order-icon-png.png"
                        alt="Credit Card"
                        className="rounded"
                      />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt4"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          View More
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="d-block mb-1">Tổng đơn hàng</span>
                  <h3 className="card-title text-nowrap mb-2">
                    {allOrders.length}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <Link to="/dashboard/order/list">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="https://locknlock-d1171.web.app/admin/assets/img/icons/unicons/tải xuống.png"
                          alt="Credit Card"
                          className="rounded"
                        />
                      </div>
                    </div>
                    <span className="fw-semibold d-block mb-1">
                      Đơn chưa xác nhận
                    </span>
                    <h3 className="card-title mb-2">{orders.length}</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 order-md-2">
          <div className="card">
            <h5 className="card-header">Sản phẩm bán chạy</h5>
            <div
              style={{ height: "75vh" }}
              className="table-responsive text-nowrap"
            >
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Giá nhập</th>
                    <th>Số lượng bán</th>
                    <th>Giảm giá</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {products &&
                    products.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img
                              width={60}
                              src={`../../assets/imgs/${item.image}`}
                              alt=""
                            />
                          </td>
                          <td>
                            <div style={{ width: "200px", marginTop: "2vh" }}>
                              <p
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                <strong>{item.productName}</strong>
                              </p>
                            </div>
                          </td>
                          <td>
                            {new Intl.NumberFormat("de-DE", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.price)}
                          </td>
                          <td>
                            {new Intl.NumberFormat("de-DE", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.importPrice)}
                          </td>
                          <td>{item.totalSold}</td>
                          <td>{item.sale}%</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
