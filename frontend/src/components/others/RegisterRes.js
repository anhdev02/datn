import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RegisterRes = () => {
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
    if (data.password !== confirmpassword) toast.error("Mật khẩu không khớp!");
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
            toast.success("Đăng ký thành công!", { position: "bottom-center" });
            setTimeout(() => setLoggedIn({ loggedIn: data.status }), 2000);
          } else {
            toast.error(data.message, { position: "bottom-center" });
          }
        })
        .catch((error) => {
          console.error("There was a problem with the network request:", error);
          toast.error("Có lỗi xảy ra khi tạo người dùng!", {
            position: "bottom-center",
          });
        });
    }
  }

  if (loggedIn) return <Navigate to="/login" />;
  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <form id="joinForm" name="joinForm" onSubmit={handleRegister}>
          <div className="xans-member xans-member-join">
            <div className="titleArea-new">
              <h2>Thông tin tài khoản</h2>
            </div>
            <div className="ec-base-table typeWrite gClearBorderTop">
              <ul>
                <li>
                  <h3 id="nameTitle">
                    Tên
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={7}
                      height={7}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <span id="nameContents">
                      <input
                        id="name"
                        name="name"
                        className="ec-member-name"
                        maxLength={30}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </span>
                    <p id="idMsg" />
                  </div>
                </li>
                <li className="emailCheck">
                  <h3>
                    Địa Chỉ Email
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={7}
                      height={7}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <input
                      id="email1"
                      name="email1"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </li>
                <li>
                  <h3>
                    Điện Thoại
                    <img
                      src="./assets/imgs/ico_required.png"
                      className
                      width={7}
                      height={7}
                      alt="Required"
                    />
                  </h3>
                  <div className="phone-td">
                    <input
                      id="phone2"
                      name="phone[]"
                      maxLength={15}
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Nhập 9 chữ số"
                      required
                      pattern="[0-9]{9}"
                    />
                  </div>
                </li>
                <li>
                  <h3>
                    Mật Khẩu
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={7}
                      height={7}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <div className="ec-base-tooltip-area">
                      <span className="eTip">
                        <input
                          id="passwd"
                          name="passwd"
                          autoComplete="off"
                          maxLength={16}
                          type="password"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </span>
                      <div className="ec-base-tooltip typeUpper">
                        <div className="content">
                          <div className="ec-base-help typeDash txtWarn">
                            10~16 ký tự bao gồm ít nhất hai trong: chữ cái viết{" "}
                            <br />
                            thường/ viết hoa, chữ số và ký tự đặc biệt.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h3 className="pwConfirm">
                    Xác Nhận Mật Khẩu
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={7}
                      height={7}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <input
                      id="user_passwd_confirm"
                      name="user_passwd_confirm"
                      autoComplete="off"
                      maxLength={16}
                      type="password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      required
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="ec-base-button gFull">
              <button type="submit" className="btnBlack">
                Đăng Ký
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterRes;
