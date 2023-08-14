import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

var emailBody = "";
const ForgotPasswordRes = () => {
  const [email, setEmail] = useState("");
  const tokenCode = uuidv4();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Vui lòng nhập email!", { position: "bottom-center" });
    } else {
      fetch(`https://locknlock-dvxb.onrender.com/api/user/email/${email}`)
        .then((res) => res.json())
        .then((data) => {
          emailBody = `
          Xin chào,
          Bạn đã yêu cầu đặt lại mật khẩu. Nhấp vào nút bên dưới để tiếp tục quá trình đặt lại mật khẩu:
          https://locknlock-d1171.web.app/resetpassword/${tokenCode}?userId=${data.id}
          Nếu bạn không yêu cầu đặt lại mật khẩu, xin vui lòng bỏ qua email này.
          Trân trọng,
          Đội ngũ hỗ trợ của chúng tôi
        `;
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            emailAddress: email,
            emailSubject: "Quên mật khẩu",
            emailBody: emailBody,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          fetch("https://locknlock-dvxb.onrender.com/api/auth/send-email", requestOptions)
            .then((response) => response.text())
            .then((result) =>
              toast.success("Đã gửi email!", { position: "bottom-center" })
            )
            .catch((error) =>
              toast.error("Email chưa được gửi!", { position: "bottom-center" })
            );

          var url = "https://locknlock-dvxb.onrender.com/api/user/verify/" + data.id;
          myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          raw = JSON.stringify({
            verify: tokenCode,
          });

          requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div id="contents">
      <div id="titleArea" style={{ marginTop: "20px", textAlign: "center" }}>
        <h3>Quên Mật Khẩu</h3>
      </div>
      <form
        id="findPasswdForm"
        name="findPasswdForm"
        action="/exec/front/Member/FindPasswd/"
        method="post"
        target="_self"
        encType="multipart/form-data"
      >
        <div className="xans-element- xans-member xans-member-findpasswd">
          <div className="ec-base-table typeWrite">
            <table border={1}>
              <caption>Bước 1. Nhập Thông Tin Cá Nhân</caption>
              <colgroup>
                <col style={{ width: "115px" }} />
                <col style={{ width: "auto" }} />
              </colgroup>
              <tbody>
                <tr id="email_view" className="email">
                  <th scope="row">Địa Chỉ Email</th>
                  <td>
                    <input
                      id="email"
                      name="email"
                      className="lostInput"
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="emailMsg" className="emailMssage" />
          <div className="ec-base-button gFull">
            <Link to="" onClick={handleSubmit} className="btnSubmit">
              Gửi
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordRes;
