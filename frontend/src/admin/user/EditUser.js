import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditUser = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  const [email, setEamil] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  var phones, addresss, userNames, emails;
  const [user, setUser] = useState();
  const [roleSeller, setRoleSeller] = useState();
  const [roleMode, setRoleMode] = useState();
  const [roleAdmin, setRoleAdmin] = useState();
  var role = ["user"];
  const { id } = useParams();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  var url = "https://locknlock-dvxb.onrender.com/api/user/" + id;

  useEffect(() => {
    document.title = 'Chỉnh sửa người dùng';
    axios
    .get(url)
    .then((res) => {
        setUser(res.data);
        res.data.roles.forEach(element => {
          if(element.name==="ROLE_SELLER"){
            setRoleSeller(true)
          }
          if(element.name==="ROLE_ADMIN"){
            setRoleAdmin(true)
          }
          if(element.name==="ROLE_MODERATOR"){
            setRoleMode(true)
          }
        });
      })
      .catch((err) => {
          console.log(err);
      });
  }, [reducerCategory]);

  const handleEditUser = (event) => {
    event.preventDefault();
    if(userName===undefined||userName===null){
        userNames = user.username
    }
    if(phone===undefined||phone===null){
        phones = user.phone
    }
    if(email===undefined||email===null){
      emails = user.email
    }
    if (password !== passwordConfirm) {
      toast.error("Mật khẩu không khớp!", { position: "top-right" });
    } else {
      if (roleSeller === true) role = [...role, "seller"];
      if (roleAdmin === true) role = [...role, "admin"];
      if (roleMode === true) role = [...role, "mod"];
      var urlPut = "https://locknlock-dvxb.onrender.com/api/user/" + user.id;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: userName ? userName: userNames,
        password: password,
        phone: phone ? phone: phones,
        email: email ? email: emails,
        status: true,
        trash: false,
        role: role,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(urlPut, requestOptions)
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
            position: "top-right",
          });
          setTimeout(() =>navigate("/dashboard/user/list"), 1000);
        } else {
          toast.error(data.message, { position: "top-right" });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the network request:", error);
        toast.error("Có lỗi xảy ra khi tạo người dùng!", {
          position: "top-right",
        });
      });
        forceUpdate()
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Chỉnh sửa người dùng</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleEditUser}>
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
              <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tài khoản
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      defaultValue={user ? user.username : ""}
                      required
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Mật khẩu mới
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      required
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Nhập lại mật khẩu mới
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      required
                      onChange={(event) =>
                        setPasswordConfirm(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Điện thoại
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">(+84)</span>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={user ? user.phone : ""}
                        placeholder="Nhập 9 chữ số"
                        required
                        pattern="[0-9]{9}"
                        onChange={(event) => setPhone(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <input
                        type="email"
                        className="form-control"
                        defaultValue={user ? user.email : ""}
                        required
                        onChange={(event) => setEamil(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Vai trò
                  </label>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                    className="col-md-10"
                  >
                    <div className="input-group-text">
                      <input
                        className="form-check-input mt-0"
                        checked
                        value="user"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Người dùng
                      </label>
                    </div>
                    <div className="input-group-text">
                      {
                        roleMode && roleMode === true ?
                          <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          value="mod"
                          checked
                          onChange={(event) => setRoleMode(event.target.checked)}
                          aria-label="Checkbox for following text input"
                        /> :
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="mod"
                        onChange={(event) => setRoleMode(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />
                      }
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Điều hành
                      </label>
                    </div>
                    <div className="input-group-text">
                      {
                        roleAdmin && roleAdmin === true ?
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="admin"
                        checked
                        onChange={(event) => setRoleAdmin(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />:
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="admin"
                        onChange={(event) => setRoleAdmin(event.target.checked)}
                        aria-label="Checkbox for following text input"
                      />
                      }
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Quản trị viên
                      </label>
                    </div>
                    <div className="input-group-text">
                      {
                        roleSeller && roleSeller ?
                        <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="seller"
                        checked
                        onChange={(event) =>
                          setRoleSeller(event.target.checked)
                        }
                        aria-label="Checkbox for following text input"
                      />:
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value="seller"
                        onChange={(event) =>
                          setRoleSeller(event.target.checked)
                        }
                        aria-label="Checkbox for following text input"
                      />
                      }
                      <label
                        style={{ marginLeft: "15px" }}
                        className="col-form-label"
                      >
                        Người bán
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <button
                      style={{ marginRight: "20px" }}
                      type="submit"
                      className="btn btn-success"
                    >
                      Lưu
                    </button>
                    <Link to="/dashboard/user/list">
                      <button type="button" class="btn btn-dark">
                        Hủy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* File input */}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditUser;
