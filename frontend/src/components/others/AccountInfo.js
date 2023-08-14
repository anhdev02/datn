import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";


const AccountInfo = () => {
  const id = localStorage.getItem("id");
  const users = localStorage.getItem("username");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [productFavorites, setProductFavorites] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUserName()
      })
      .catch((err) => console.log(err));

      fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${id}`)
      .then((res) => res.json())
      .then((data) => setProductFavorites(data))
      .catch((err) => console.log(err));

      fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${users}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    if(localStorage.getItem("accessToken")!=="google_token_access") {
      localStorage.removeItem("username");
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      localStorage.removeItem("role");
    }
    localStorage.removeItem("accessToken");
    setTimeout(() =>navigate("/login"), 1000);
  }

  const handleEditUser = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Mật khẩu không khớp!", { position: "bottom-left" });
    } else {
      var url = "https://locknlock-dvxb.onrender.com/api/user/" + user.id;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: userName ? userName : user.username,
        password: password,
        phone: phone ? phone: user.phone,
        email: email ? email: user.email,
        status: true,
        trash: false,
        role: ["user"],
      });
      console.log(raw);

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        if (data.status) {
          toast.success("Sửa người dùng thành công!", {
            position: "bottom-left",
          });
          logout();
        } else {
          toast.error(data.message, { position: "bottom-left" });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the network request:", error);
        toast.error("Có lỗi xảy ra khi tạo người dùng!", {
          position: "bottom-left",
        });
      });
    }
  };

  const Delete = async (event) => {
    event.preventDefault();
    const result = await confirm("Tài khoản sẽ bị xóa vĩnh viễn?", event);
    if (result) {
      var url = "https://locknlock-dvxb.onrender.com/api/user/" + id
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(url, requestOptions)
        .then(response => {
          response.text()
          if(response.ok){
            toast.success("Tài khoản đã bị đóng!", {
              position: "bottom-left",
            })
            logout();
          }else{
            toast.error("Lỗi!", {
              position: "bottom-left",
            })
          }
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
                  <strong>Hồ Sơ Của Tôi</strong>
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
                  <h2>Hồ Sơ Của Tôi</h2>
                </div>
                <form onSubmit={handleEditUser} id="editForm" name="editForm" method="post">
                  <div className="xans-element- xans-member xans-member-edit">
                    <h3>Thông tin cá nhân</h3>
                    <p className="required">
                      <img
                        src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                        alt="Required Field"
                      />
                      Mục bắt buộc
                    </p>
                    <div className="ec-base-table typeWrite">
                      <table border={1}>
                        <caption>Thông Tin Thanh Toán</caption>
                        <colgroup>
                          <col style={{ width: "150px" }} />
                          <col style={{ width: "auto" }} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">
                              Mật khẩu
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                className
                                alt="Required Field"
                              />
                            </th>
                            <td>
                              <div className="eTooltip">
                                <input
                                  id="passwd"
                                  name="passwd"
                                  autoComplete="off"
                                  maxLength={16}
                                  required
                                  onChange={(event) => setPassword(event.target.value)}
                                  type="password"
                                />
                                <div className="ec-base-tooltip typeUpper">
                                  <div className="content">
                                    <strong className="txtWarn">
                                      ※ Quy định đặt mật khẩu
                                    </strong>
                                    <ul className="ec-base-help typeDash gBlank10 txtWarn">
                                      - (10~16 ký tự bao gồm ít nhất hai trong:
                                      chữ cái viết thường/viết hoa, chữ số và ký
                                      tự đặc biệt)
                                      <br />
                                      - Ký tự đặc biệt có thể nhập
                                      <br />
                                      &nbsp;&nbsp;&nbsp; ~ ` ! @ # $ % ^ ( ) _ -
                                      = {"{"} {"}"} [ ] | ; : &lt; &gt; , . ? /
                                      <br />- Không thể nhập dấu cách
                                    </ul>
                                  </div>
                                  <Link to="" className="btnClose">
                                    <img
                                      src="https://locknlock-d1171.web.app/assets/imgs/btn_close_tip.gif"
                                      alt="Close"
                                    />
                                  </Link>
                                  <span className="edge" />
                                </div>
                              </div>
                              <p className="eTooltip-p">
                                (10~16 ký tự bao gồm ít nhất hai trong: chữ cái
                                viết thường/viết hoa, chữ số và ký tự đặc biệt)
                              </p>
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">
                              Xác Nhận Mật Khẩu
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                alt="Required Field"
                              />
                            </th>
                            <td>
                              <input
                                id="user_passwd_confirm"
                                name="user_passwd_confirm"
                                autoComplete="off"
                                maxLength={16}
                                required
                                onChange={(event) => setPasswordConfirm(event.target.value)}
                                type="password"
                              />
                              <span id="pwConfirmMsg" />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Email
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                alt="Required Field"
                              />
                            </th>
                            <td>
                              <input onChange={(event) => setEmail(event.target.value)} defaultValue={user.email} required id="email1" name="email1" type="text" />
                              <span id="emailMsg" />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Tên
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                className
                                alt="Required Field"
                              />
                            </th>
                            <td>
                              <input
                                id="name"
                                name="name"
                                className="ec-member-name"
                                maxLength={30}
                                required
                                defaultValue={user.username}
                                onChange={(event) => setUserName(event.target.value)}
                                type="text"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Điện thoại
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                alt="Required Field"
                              />
                            </th>
                            <td>
                              <input
                                id="phone"
                                name="phone"
                                className="ec-member-name"
                                maxLength={30}
                                placeholder="Nhập 9 chữ số"
                                required
                                defaultValue={user.phone}
                                onChange={(event) => setPhone(event.target.value)}
                                pattern="[0-9]{9}"
                                type="text"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ec-base-button justify">
                      <button type="submit" className="btnBlack">
                        Lưu
                      </button>
                      <Link to="/" className="btnWhite">
                        Huỷ
                      </Link>
                      <span className="gRight">
                        <Link onClick={Delete} to="" className="btnWhite">
                          Đóng Tài Khoản
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
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

export default AccountInfo;
