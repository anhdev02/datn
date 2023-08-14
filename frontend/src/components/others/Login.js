import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import { LoginSocialFacebook } from "reactjs-social-login";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    if (data.username === "")
      toast.error("Vui lòng nhập tên đăng nhập!", { position: "bottom-left" });
    else if (data.password === "")
      toast.error("Vui lòng nhập mật khẩu!", { position: "bottom-left" });
    else {
      const response = await fetch("https://locknlock-dvxb.onrender.com/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((result) => {
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("username", result.username);
          localStorage.setItem("id", result.id);
          localStorage.setItem("email", result.email);
          localStorage.setItem("phone", result.phone);
          result.roles.forEach((element) => {
            if (element === "ROLE_ADMIN") localStorage.setItem("role", element);
          });
          toast.success("Đăng nhập thành công!", { position: "bottom-left" });
          setTimeout(() => setLoggedIn(true), 1000);
        })
        .catch((error) => {
          toast.error("Tên đăng nhập hoặc mật khẩu không chính xác!", {
            position: "bottom-left",
          });
        });
    }
  }

  function handleSuccess(response) {
    const data = {
      email: response.profileObj.email,
      password: response.accessToken,
      username: response.profileObj.name,
      phone: "",
    };

    const datalogin = {
      username: response.profileObj.name,
      password: response.accessToken,
    };

    fetch(`https://locknlock-dvxb.onrender.com/api/user/email/${response.profileObj.email}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", "google_accessToken");
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("phone", data.phone);
        data.roles.forEach((element) => {
          console.log(element);
          if (element.name === "ROLE_ADMIN")
            localStorage.setItem("role", element.name);
        });
        toast.success("Đăng nhập thành công!", { position: "bottom-left" });
        setTimeout(() => setLoggedIn(true), 1000);
      })
      .catch((err) => {
        fetch("https://locknlock-dvxb.onrender.com/api/auth/signup", {
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

              // Gọi API đăng nhập sau khi đăng ký thành công
              fetch("https://locknlock-dvxb.onrender.com/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datalogin),
              })
                .then((response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error("Network response was not ok.");
                  }
                })
                .then((result) => {
                  localStorage.setItem("accessToken", result.accessToken);
                  localStorage.setItem("username", result.username);
                  localStorage.setItem("id", result.id);
                  localStorage.setItem("email", result.email);
                  localStorage.setItem("phone", result.phone);
                  result.roles.forEach((element) => {
                    if (element === "ROLE_ADMIN")
                      localStorage.setItem("role", element);
                  });
                  toast.success("Đăng nhập thành công!", {
                    position: "bottom-left",
                  });
                  setTimeout(() => setLoggedIn(true), 1000);
                })
                .catch((error) => {
                  console.error(
                    "There was a problem with the network request:",
                    error
                  );
                  toast.error("Có lỗi xảy ra khi đăng nhập!", {
                    position: "bottom-left",
                  });
                });

              setTimeout(() => setLoggedIn({ loggedIn: data.status }), 2000);
            } else {
              toast.error(data.message, { position: "bottom-left" });
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the network request:",
              error
            );
            toast.error("Có lỗi xảy ra khi tạo người dùng!", {
              position: "bottom-left",
            });
          });
      });
  }

  const handleResolve = (response) => {
    const data = {
      email: response.data.email,
      password: response.data.accessToken,
      username: response.data.name,
      phone: "",
    };

    const datalogin = {
      username: response.data.name,
      password: response.data.accessToken,
    };

    fetch(`https://locknlock-dvxb.onrender.com/api/user/email/${response.data.email}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", "facebook_accessToken");
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("phone", data.phone);
        data.roles.forEach((element) => {
          console.log(element);
          if (element.name === "ROLE_ADMIN")
            localStorage.setItem("role", element.name);
        });
        toast.success("Đăng nhập thành công!", { position: "bottom-left" });
        setTimeout(() => setLoggedIn(true), 1000);
      })
      .catch((err) => {
        fetch("https://locknlock-dvxb.onrender.com/api/auth/signup", {
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

              // Gọi API đăng nhập sau khi đăng ký thành công
              fetch("https://locknlock-dvxb.onrender.com/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datalogin),
              })
                .then((response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error("Network response was not ok.");
                  }
                })
                .then((result) => {
                  localStorage.setItem("accessToken", result.accessToken);
                  localStorage.setItem("username", result.username);
                  localStorage.setItem("id", result.id);
                  localStorage.setItem("email", result.email);
                  localStorage.setItem("phone", result.phone);
                  result.roles.forEach((element) => {
                    if (element === "ROLE_ADMIN")
                      localStorage.setItem("role", element);
                  });
                  toast.success("Đăng nhập thành công!", {
                    position: "bottom-left",
                  });
                  setTimeout(() => setLoggedIn(true), 1000);
                })
                .catch((error) => {
                  console.error(
                    "There was a problem with the network request:",
                    error
                  );
                  toast.error("Có lỗi xảy ra khi đăng nhập!", {
                    position: "bottom-left",
                  });
                });

              setTimeout(() => setLoggedIn({ loggedIn: data.status }), 2000);
            } else {
              toast.error(data.message, { position: "bottom-left" });
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the network request:",
              error
            );
            toast.error("Có lỗi xảy ra khi tạo người dùng!", {
              position: "bottom-left",
            });
          });
      });
  };

  const handleFailure = (response) => {
    console.log(response);
  };

  const handleReject = (error) => {
    console.log(error);
  };

  const CustomGoogleButton = ({ onClick }) => {
    return (
      <div style={{ cursor: "pointer" }} onClick={onClick}>
        <img src="https://locknlock-d1171.web.app/assets/imgs/google.png" alt="Login with Google" />
        Google
      </div>
    );
  };

  if (localStorage.getItem("role")) {
    return <Navigate to="/dashboard" />;
  }
  if (loggedIn) return <Navigate to="/" />;

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
                <li className="path_login" title="Current Page">
                  Đăng Nhập/Đăng Ký
                </li>
              </ol>
            </div>
            <div className="wrap-login">
              <form id="member_form_6741407257" onSubmit={handleLogin}>
                <input
                  id="returnUrl"
                  name="returnUrl"
                  defaultValue="/stores.html"
                  type="hidden"
                />
                <input
                  id="forbidIpUrl"
                  name="forbidIpUrl"
                  defaultValue="/index.html"
                  type="hidden"
                />
                <input
                  id="certificationUrl"
                  name="certificationUrl"
                  defaultValue="/intro/adult_certification.html"
                  type="hidden"
                />
                <input
                  id="sIsSnsCheckid"
                  name="sIsSnsCheckid"
                  defaultValue
                  type="hidden"
                />
                <input
                  id="sProvider"
                  name="sProvider"
                  defaultValue
                  type="hidden"
                />
                <div className="xans-element- xans-member xans-member-login ec-base-box typeThin">
                  <div className="login">
                    <h1>
                      <Link to="">
                        <img src="https://locknlock-d1171.web.app/assets/imgs/logo.png" alt="LocknLock" />
                      </Link>
                    </h1>
                    <div className="text-login">
                      Chào mừng đến với LocknLock. Đăng nhập ngay!
                    </div>
                    <fieldset>
                      <legend>Đăng Nhập</legend>
                      <label className="id ePlaceholder" title="E-mail">
                        <input
                          id="member_id"
                          name="member_id"
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
                          className="inputTypeText"
                          type="text"
                          placeholder="Nhập tên đăng nhập"
                        />
                      </label>
                      <label className="password ePlaceholder" title="Mật khẩu">
                        <input
                          id="member_passwd"
                          name="member_passwd"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Nhập mật khẩu"
                        />
                      </label>
                      <div className="login-security clearBoth">
                        <Link to="/forgotpassword">Quên Mật Khẩu</Link>
                      </div>
                      <ul className="ul_login">
                        <li>
                          <button
                            type="submit"
                            className="btnLogin"
                            style={{
                              background: "#1d1d1c",
                              color: "#fff",
                              lineHeight: "48px",
                              height: "48px",
                              fontSize: "16px",
                              display: "block",
                              textAlign: "center",
                              fontWeight: 600,
                              borderRadius: "2px",
                            }}
                          >
                            Đăng Nhập
                          </button>
                        </li>
                        <li>
                          <Link to="/register">Đăng Ký</Link>
                        </li>
                      </ul>
                      <p className="or-text">Hoặc đăng nhập bằng</p>
                      <ul className="snsArea clearBoth">
                        <li>
                          <LoginSocialFacebook
                            appId="920017852727118"
                            onResolve={handleResolve}
                            onReject={handleReject}
                          >
                            <Link to="">
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/facebook.png"
                                alt="Login with Facebook"
                              />
                              Facebook
                            </Link>
                          </LoginSocialFacebook>
                        </li>
                        <li>
                          <GoogleLogin
                            clientId="335382432614-f0dk0dgc63afpf808693jrtjtqigggs4.apps.googleusercontent.com"
                            onSuccess={handleSuccess}
                            onFailure={handleFailure}
                            cookiePolicy={"single_host_origin"}
                            isSignedIn={true}
                            render={(renderProps) => (
                              <CustomGoogleButton
                                onClick={renderProps.onClick}
                              />
                            )}
                          />
                        </li>
                      </ul>
                      <div className="login-bottom login-bottomoff">
                        <p>
                          Khi mua sắm với tư cách khách,
                          <br />
                          bạn có thể tra cứu đơn hàng của mình với mã đơn hàng.
                        </p>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <ToastContainer />
    </div>
  );
};

export default Login;
