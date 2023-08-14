import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      username: username,
      phone: phone,
    };
    if (data.password !== confirmpassword)
      toast.error("Mật khẩu không khớp!", { position: "bottom-left" });
    else {
      const response = await fetch("https://locknlock-dvxb.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          if (data.status) {
            toast.success("Đăng ký thành công!", { position: "bottom-left" });
            setTimeout(() => setLoggedIn({ loggedIn: data.status }), 2000);
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
  }

  if (loggedIn) return <Navigate to="/login" />;

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
                  <strong>Đăng Ký</strong>
                </li>
              </ol>
            </div>
            <form
              id="joinForm"
              onSubmit={handleRegister}
              name="joinForm"
              method="post"
              target="_self"
            >
              <div className="xans-member xans-member-join">
                <h3 className="join-h3 join-title">Thông Tin Cá Nhân</h3>
                <div className="ec-base-table typeWrite">
                  <table border={1}>
                    <caption>Thông Tin Cá Nhân</caption>
                    <colgroup>
                      <col style={{ width: "150px" }} />
                      <col style={{ width: "auto" }} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          Tên
                          <img
                            src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <input
                            id="name"
                            name="name"
                            className="ec-member-name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            maxLength={30}
                            required
                            type="text"
                          />
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
                          <input
                            id="email1"
                            name="email1"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                          />
                          <span id="emailMsg" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Điện Thoại
                          <img
                            src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                            alt="Required Field"
                          />
                        </th>
                        <td className="phone-td">
                          <input
                            id="phone2"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength={15}
                            type="text"
                            placeholder="Nhập 9 chữ số"
                            required
                            pattern="[0-9]{9}"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Mật Khẩu
                          <img
                            src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <div className="eTooltip">
                            <input
                              id="passwd"
                              name="passwd"
                              value={password}
                              required
                              onChange={(e) => setPassword(e.target.value)}
                              maxLength={16}
                              type="password"
                            />
                            <div className="ec-base-tooltip typeUpper">
                              <div className="content">
                                <strong className="txtWarn">
                                  ※ Quy định đặt mật khẩu
                                </strong>
                                <ul className="ec-base-help typeDash gBlank10 txtWarn">
                                  - (10~16 ký tự bao gồm ít nhất hai trong: chữ
                                  cái viết thường/viết hoa, chữ số và ký tự đặc
                                  biệt)
                                  <br />
                                  - Ký tự đặc biệt có thể nhập
                                  <br />
                                  &nbsp;&nbsp;&nbsp; ~ ` ! @ # $ % ^ ( ) _ - ={" "}
                                  {"{"}
                                  {"}"} [ ] | ; : &lt; &gt; , . ? /<br />- Không
                                  thể nhập dấu cách
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
                            (10~16 ký tự bao gồm ít nhất hai trong: chữ cái viết
                            thường/viết hoa, chữ số và ký tự đặc biệt)
                          </p>
                        </td>
                      </tr>
                      <tr>
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
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            maxLength={16}
                            required
                            type="password"
                          />
                          <span id="pwConfirmMsg" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ec-base-button">
                  <button type="submit" className="btnSubmitFix sizeM">
                    Đăng Ký
                  </button>
                </div>
                <div
                  id="ec_shop_member_confirm-infolayer"
                  className="joinConfirm ec-base-layer"
                >
                  <div className="header">
                    <h3>Xác Nhận Thông Tin Đăng Ký</h3>
                  </div>
                  <div className="content">
                    <p>
                      Để hoàn tất đăng ký, vui lòng xác nhận thông tin tài khoản
                      và nhấn “Đăng ký”.
                    </p>
                    <div className="ec-base-table">
                      <table border={1}>
                        <caption>Xác Nhận Thông Tin Đăng Ký</caption>
                        <colgroup>
                          <col style={{ width: "130px" }} />
                          <col style={{ width: "auto" }} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">Email</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-email1" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Tên</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-name" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Điện Thoại</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-phone" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="ec-base-button">
                    <Link
                      to=""
                      className="btnSubmitFix sizeS"
                      id="ec_shop_confirm-checkingjoininfo_action"
                    >
                      Đăng Ký
                    </Link>
                    <Link to="" className="btnNormalFix sizeS">
                      Đóng
                    </Link>
                  </div>
                  <Link to="" className="close">
                    <img src="https://locknlock-d1171.web.app/assets/imgs/btn_close.gif" alt="Close" />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <ToastContainer />
    </div>
  );
};

export default Register;
