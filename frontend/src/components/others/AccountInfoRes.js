import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AccountInfoRes = () => {
  const id = localStorage.getItem("id");
  const users = localStorage.getItem("username");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUserName();
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    if (localStorage.getItem("accessToken") !== "google_token_access") {
      localStorage.removeItem("username");
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      localStorage.removeItem("role");
    }
    localStorage.removeItem("accessToken");
    setTimeout(() => navigate("/login"), 1000);
  };

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
        phone: phone ? phone : user.phone,
        email: email ? email : user.email,
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

  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <form onSubmit={handleEditUser} id="editForm" name="editForm">
          <div className="xans-element- xans-member xans-member-edit">
            <div className="titleArea-new">
              <h2>Sửa thông tin tài khoản</h2>
            </div>
            <div className="ec-base-table typeWrite gClearBorderTop">
              <ul>
                <li>
                  <h3>
                    Mật khẩu
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={5}
                      height={5}
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
                          required
                          onChange={(event) => setPassword(event.target.value)}
                          type="password"
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
                <li className>
                  <h3>
                    Xác Nhận
                    <br />
                    Mật Khẩu
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={5}
                      height={5}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <input
                      id="user_passwd_confirm"
                      name="user_passwd_confirm"
                      autoComplete="off"
                      maxLength={16}
                      required
                      onChange={(event) =>
                        setPasswordConfirm(event.target.value)
                      }
                      type="password"
                    />
                    <span id="pwConfirmMsg" />
                  </div>
                </li>
                <li className="emailCheck">
                  <h3>
                    Địa Chỉ Email
                    <img
                      src="./assets/imgs/ico_required.png"
                      width={5}
                      height={5}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <input
                      onChange={(event) => setEmail(event.target.value)}
                      defaultValue={user.email}
                      required
                      id="email1"
                      name="email1"
                      type="text"
                    />
                    <p id="emailMsg" />
                  </div>
                </li>
                <li>
                  <h3 id>
                    Tên
                    <img
                      src="./assets/imgs/ico_required.png"
                      className
                      width={5}
                      height={5}
                      alt="Required"
                    />
                  </h3>
                  <div>
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
                  </div>
                </li>
                <li>
                  <h3>
                    Số điện thoại
                    <img
                      src="./assets/imgs/ico_required.png"
                      className
                      width={5}
                      height={5}
                      alt="Required"
                    />
                  </h3>
                  <div>
                    <input
                      id="name"
                      name="name"
                      className="ec-member-name"
                      maxLength={30}
                      placeholder="Nhập 9 chữ số"
                      required
                      defaultValue={user.phone}
                      onChange={(event) => setPhone(event.target.value)}
                      pattern="[0-9]{9}"
                      type="text"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="ec-base-button gColumn">
              <button type="submit" className="btnBlue">
                Lưu
              </button>
              <Link to="/" className="btnWhite">
                Huỷ
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AccountInfoRes;
