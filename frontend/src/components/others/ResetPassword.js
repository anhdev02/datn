import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/user/${props.userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.verify !== props.id) {
          navigate("/error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "") {
      toast.error("Vui lòng nhập mật khẩu!", { position: "bottom-left" });
    } else if (passwordConfirm === "") {
      toast.error("Vui lòng nhập ô nhập lại mật khẩu!", {
        position: "bottom-left",
      });
    } else if (password !== passwordConfirm) {
      toast.error("Mật khẩu không khớp!", { position: "bottom-left" });
    } else {
      var url = "https://locknlock-dvxb.onrender.com/api/user/password/" + props.userId;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        password: password,
      });

      var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
        toast.success("Cài lại mật khẩu thành công!", { position: "bottom-left" });
        setTimeout(() => navigate("/login"), 1000);
    }
  };
  if (props.userId === '') return <Navigate to="/error" />;
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
                  <strong>Cài lại mật khẩu</strong>
                </li>
              </ol>
            </div>
            <div className="titleArea">
              <h2>Cài lại mật khẩu</h2>
            </div>
            <form id="findPasswdForm" name="findPasswdForm" method="post">
              <div className="xans-element- xans-member xans-member-findpasswd ec-base-box typeThin">
                <div className="findPw">
                  <h3 className="boxTitle">Cài lại mật khẩu</h3>
                  <fieldset>
                    <legend>Cài lại mật khẩu</legend>
                    <ul className="ec-base-desc">
                      <li id="email_view" className="email">
                        <strong style={{ marginLeft: "15px" }} className="term">
                          Mật khẩu mới
                        </strong>
                        <span className="desc">
                          <input
                            id="email"
                            name="email"
                            className="lostInput"
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                          />
                        </span>
                      </li>
                      <li id="email_view" className="email">
                        <strong style={{ marginLeft: "15px" }} className="term">
                          Nhập lại mật khẩu
                        </strong>
                        <span className="desc">
                          <input
                            id="email1"
                            name="email"
                            className="lostInput"
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            type="text"
                          />
                        </span>
                      </li>
                    </ul>
                    <div id="emailMsg" className="emailMssage" />
                    <div className="ec-base-button gColumn">
                      <Link
                        to=""
                        onClick={handleSubmit}
                        className="btnSubmit sizeL"
                      >
                        Gửi
                      </Link>
                    </div>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
