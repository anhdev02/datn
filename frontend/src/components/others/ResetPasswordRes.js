import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPasswordRes = (props) => {
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
      toast.error("Vui lòng nhập mật khẩu!", { position: "bottom-center" });
    } else if (passwordConfirm === "") {
      toast.error("Vui lòng nhập ô nhập lại mật khẩu!", {
        position: "bottom-center",
      });
    } else if (password !== passwordConfirm) {
      toast.error("Mật khẩu không khớp!", { position: "bottom-center" });
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
        toast.success("Cài lại mật khẩu thành công!", { position: "bottom-center" });
        setTimeout(() => navigate("/login"), 1000);
    }
  };
  if (props.userId === '') return <Navigate to="/error" />;
  return (
    <div id="contents">
        <div id="titleArea" style={{marginTop: '20px', textAlign: 'center'}}>
          <h3>Quên Mật Khẩu</h3>
        </div>
        <form id="findPasswdForm" name="findPasswdForm" >
          <div className="xans-element- xans-member xans-member-findpasswd">
            <div className="ec-base-table typeWrite">
              <table border={1}>
                <caption>
                  Bước 1. Nhập Thông Tin Cá Nhân
                </caption>
                <colgroup>
                  <col style={{width: '115px'}} />
                  <col style={{width: 'auto'}} />
                </colgroup>
                <tbody>
                  <tr id="name_view" className="name">
                    <th scope="row" id="name_lable">Mật khẩu mới</th>
                    <td>
                      <input id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="lostInput ec-member-name" type="text" />
                    </td>
                  </tr>
                  <tr id="email_view" className="email">
                    <th scope="row">Nhập lại mật khẩu</th>
                    <td>
                      <input id="passwordConfirm" name="passwordConfirm" onChange={(e) => setPasswordConfirm(e.target.value)} className="lostInput" type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="emailMsg" className="emailMssage" />
            <div className="ec-base-button gFull">
              <Link to="" className="btnSubmit" onClick={handleSubmit}>Gửi</Link>
            </div>
          </div>
        </form>
      </div>
  )
}

export default ResetPasswordRes