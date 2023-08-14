import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { ToastContainer, toast } from "react-toastify";

const AddressBookRes = () => {
  const user = localStorage.getItem("username");
  const userId = parseInt(localStorage.getItem("id"), 10);
  const [addresses, setAddresses] = useState([]);

  const loadData = () => {
    fetch(`https://locknlock-dvxb.onrender.com/api/address/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const Delete = async (event) => {
    event.preventDefault();
    var id = event.target.dataset.id;

    var url = "https://locknlock-dvxb.onrender.com/api/address/" + id;
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => {
        response.text();
        if (response.ok) {
          toast.success("Xóa thành công!", {
            position: "bottom-center",
          });
        } else {
          toast.error("Xóa không thành công!", {
            position: "bottom-center",
          });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    loadData();
  };
  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <form id="frmAddr">
          <div className="xans-element- xans-myshop xans-myshop-addrlist">
            <div className="myshop_AddrList_top">
              <div className="titleArea-new">
                <h2>Danh Sách Địa Chỉ</h2>
              </div>
              <Link to="/newaddress" className="btnBlack">
                Thêm Địa Chỉ Mới.
              </Link>
            </div>
            <div className="addList">
              {addresses.map((address) => (
                <div className="description">
                  <div className="info">
                    <ul className="address">
                      <li>
                        <div className="address-title">Địa chỉ</div>
                        <div>
                          <span className="authssl_ma_rcv_addr_0">{`${address.houseNumber}, ${address.street}, ${address.ward}, ${address.district}, ${address.city}`}</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-title">Điện thoại</div>
                        <div>
                          <span className="authssl_ma_rcv_phone_0">+84</span>
                          <span className="authssl_ma_rcv_mobile_no_0">
                            {address.phoneNumber}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ec-base-button">
                    <Link to={`/edit/address/${address.id}`}>Chính sửa</Link>
                    <Link data-id={address.id} onClick={Delete} to="">
                      Xoá
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="empty displaynone">
              Sổ địa chỉ của bạn hiện đang trống.
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddressBookRes;
