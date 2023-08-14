import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const AccountRes = () => {
  const userId = localStorage.getItem("id");
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [trashOrders, setTrashOrders] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);
  const [status01, setStatus01] = useState(0);
  const [status02, setStatus02] = useState(0);
  const [status03, setStatus03] = useState(0);
  const [status04, setStatus04] = useState(0);
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        loadOrderStatus(data);
      })
      .catch((err) => console.log(err));

    fetch(`https://locknlock-dvxb.onrender.com/api/order/usertrash/${user}`)
      .then((res) => res.json())
      .then((data) => setTrashOrders(data))
      .catch((err) => console.log(err));

    fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${userId}`)
      .then((res) => res.json())
      .then((data) => setProductFavorites(data))
      .catch((err) => console.log(err));
  }, []);

  const loadOrderStatus = (order) => {
    let count01 = 0;
    let count02 = 0;
    let count03 = 0;
    let count04 = 0;
    order.forEach((element) => {
      if (element.status === "Chờ Thanh Toán") {
        count01++;
      } else if (element.status === "Chuẩn Bị Giao Hàng") {
        count02++;
      } else if (element.status === "Đang Vận Chuyển") {
        count03++;
      } else if (element.status === "Đã Giao") {
        count04++;
      }
    });
    setStatus01(count01);
    setStatus02(count02);
    setStatus03(count03);
    setStatus04(count04);
  };

  if (localStorage.getItem("id")===null) {
    return <Navigate to="/login" />;
  }
  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <div className="clearBoth">
          <div className="myshpp-index">
            <div className="myshpp-index-top">
              <h2>
                Xin chào
                <span className="xans-element- xans-layout xans-layout-statelogon">
                  <span className="xans-member-var-name"> {user}</span>
                </span>
              </h2>
            </div>
            <div className="xans-element- xans-myshop xans-myshop-orderstate">
              <div className="title">
                <h3>
                  Tình trạng đơn hàng
                </h3>
              </div>
              <div className="state">
                <ul className="order">
                  <li>
                    <strong>
                      Trước <br />
                      thanh toán
                    </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_shppied_before_count">
                      {status01}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <strong>
                      Chuẩn bị <br />
                      vận chuyển
                    </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_shppied_standby_count">
                      {status02}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <strong>
                      Đang <br />
                      vận chuyển
                    </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_shppied_begin_count">
                      {status03}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <strong>
                      Hoàn tất <br />
                      vận chuyển
                    </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_shppied_complate_count">
                      {status04}
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul className="cs">
                  <li>
                    <span className="icoDot" />
                    <strong>Đơn Đã Hủy : </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_order_cancel_count">
                        {trashOrders.length}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span className="icoDot" />
                    <strong>Đổi Hàng : </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_order_exchange_count">
                        0
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span className="icoDot" />
                    <strong>Trả Hàng : </strong>
                    <Link to="" className="count">
                      <span id="xans_myshop_orderstate_order_return_count">
                        0
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
                    <span className="xans_myshop_main_interest_prd_cnt">{productFavorites.length}</span>
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
      </div>
    </div>
  );
};

export default AccountRes;
