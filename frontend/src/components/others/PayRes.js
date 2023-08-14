import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { store } from "../../store/store";
import { PayPalButton } from "react-paypal-button-v2";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const PayRes = () => {
  const userId = parseInt(localStorage.getItem("id"), 10);
  const [activeTab, setActiveTab] = useState(1);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [showAddressList, setShowAddressList] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [phoneUpdate, setPhoneUpdate] = useState();
  const [addressUpdate, setAddressUpdate] = useState();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState();
  const [addressId, setAddressId] = useState();
  const [isRender, setIsRender] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasAddress, setHasAddress] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsDefault, setDistrictsDefault] = useState([]);
  const [wards, setWards] = useState([]);
  const [wardsDefault, setWardsDefault] = useState([]);
  const [payMethod, setpayMethod] = useState(1);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedOption, setSelectedOption] = useState(1);
  var totalPriceSale = 0,
    totalPrice = 0, usa = 0;
  var today = new Date();
  var month = (today.getMonth() + 1).toString().padStart(2, "0");
  var day = today.getDate().toString().padStart(2, "0");
  var date = today.getFullYear() + "-" + month + "-" + day;
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/address/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
        if (data.length === 0) {
          setActiveTab(2);
          setHasAddress(false);
        } else {
          setHasAddress(true);
        }
      })
      .catch((err) => console.log(err));
    loadDataCart();
  }, [isRender]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const provincesData = await fetchData(
        "https://provinces.open-api.vn/api/p"
      );
      setProvinces(provincesData);

      const districtsData = await fetchData(
        "https://provinces.open-api.vn/api/d"
      );
      setDistrictsDefault(districtsData);

      const wardsData = await fetchData("https://provinces.open-api.vn/api/w");
      setWardsDefault(wardsData);
    };

    fetchDataAsync();
  }, []);

  const handleProvinceChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const provinceId = selectedOption.getAttribute("data-code");
    setSelectedProvince(e.target.value);
    setSelectedDistrict("");
    setSelectedWard("");
    setWards([]);
    const filteredDistricts = districtsDefault.filter(
      (district) => district.province_code === parseInt(provinceId)
    );
    setDistricts(filteredDistricts);
  };

  const setMethod = (method) => {
    setpayMethod(method);
    setSelectedOption(method);
  }

  const handleDistrictChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const districtId = selectedOption.getAttribute("data-code");
    setSelectedDistrict(e.target.value);
    setSelectedWard("");

    const filteredWards = wardsDefault.filter(
      (ward) => ward.district_code === parseInt(districtId)
    );
    setWards(filteredWards);
  };

  const productRows = products
  .map(
    (product, index) =>
      `<tr key="${index}">
    <td>${product.name}</td>
    <td>${formatter.format(
      (product.price - product.price * (0.01 * product.sale)) *
        product.quantity
    )}</td>
    <td>${product.quantity}</td>
  </tr>`
  )
  .join("");

  function sendMail() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      emailAddress: localStorage.getItem("email"),
      emailSubject: "Xác nhận đơn hàng",
      emailBody:
        addresses &&
        `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333333;
          }
          p {
            color: #666666;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #999999;
            font-size: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #dddddd;
          }
          th {
            background-color: #f5f5f5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Xác nhận đơn hàng</h1>
          <p>Chúng tôi xin thông báo rằng đơn hàng của bạn đã được xác nhận.</p>
          
          <table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Số lượng</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
      
          <p>Thông tin người nhận:</p>
          <address>
            <p>Tên: ${localStorage.getItem("username")}</p>
            <p>Địa chỉ: ${addresses[0].houseNumber}, ${addresses[0].street}, ${
          addresses[0].ward
        }, ${addresses[0].district}, ${addresses[0].city}</p>
            <p>Số điện thoại: ${addresses[0].phoneNumber}</p>
          </address>
          
          <p>Cảm ơn bạn đã mua hàng!</p>
          <p class="footer">Đội ngũ hỗ trợ của chúng tôi</p>
        </div>
      </body>
    </html>`,
      emailContentType: "text/html",
    });    

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://locknlock-dvxb.onrender.com/api/auth/send-email", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  const loadDataCart = () => {
    const carts = store.getState().cart.carts;
    setProducts(carts);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleCreateAddress = () => {
    handleTabClick(2);
    setPhoneUpdate(undefined);
    setPhone("");
    setAddressUpdate(undefined);
    setAddress(undefined);
    setIsUpdateForm(false);
    document.getElementById("frm_order_act").reset();
    const form = document.getElementById("frm_order_act");
    const selectElements = form.getElementsByTagName("select");

    for (let i = 0; i < selectElements.length; i++) {
      selectElements[i].selectedIndex = 0;
    }
    setSelectedProvince("");
    setSelectedDistrict("");
    setSelectedWard("");
    setDistricts([]);
    setWards([]);
  };

  const handleOpenAddressList = () => {
    setShowAddressList(true);
  };

  const handleCloseAddressList = () => {
    setShowAddressList(false);
  };

  const handleUpdate = (event) => {
    const dataId = event.target.dataset.id;
    setAddressId(dataId);
    setActiveTab(2);
    fetch("https://locknlock-dvxb.onrender.com/api/address/" + dataId)
      .then((response) => response.json())
      .then((data) => {
        setPhoneUpdate(data.phoneNumber);
        setPhone(data.phoneNumber);
        setAddressUpdate(`${data.houseNumber}, ${data.street}`);
      })
      .catch((error) => {
        console.error(error);
      });
    const form = document.getElementById("frm_order_act");
    const selectElements = form.getElementsByTagName("select");

    for (let i = 0; i < selectElements.length; i++) {
      selectElements[i].selectedIndex = 0;
    }
    setSelectedProvince("");
    setSelectedDistrict("");
    setSelectedWard("");
    setDistricts([]);
    setWards([]);
    setIsUpdateForm(true);
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    const pattern = /^\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+$/u;
    if (isUpdateForm) {
      if (phone !== "" && phone.length !== 9) {
        toast.error("Vui lòng nhập đúng định dạng số điện thoại", {
          position: "bottom-center",
        });
      } else if (selectedProvince === "") {
        toast.error("Vui lòng chọn Tỉnh/Thành", { position: "bottom-center" });
      } else if (selectedDistrict === "") {
        toast.error("Vui lòng chọn Quận/Huyện", { position: "bottom-center" });
      } else if (selectedWard === "") {
        toast.error("Vui lòng chọn Phường/Xã", { position: "bottom-center" });
      } else if (address !== undefined && !pattern.test(address)) {
        toast.error("Vui lòng nhập đúng định dạng địa chỉ", {
          position: "bottom-center",
        });
      } else {
        e.preventDefault();
        var addressParts = address && address.split(",");
        if (address === undefined) {
          addressParts = addressUpdate.split(",");
        }
        const houseNumber = addressParts[0].trim();
        const street = addressParts[1].trim();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          userId: userId,
          phoneNumber: phone === "" ? phoneUpdate : phone,
          houseNumber: houseNumber,
          street: street,
          ward: selectedWard,
          district: selectedDistrict,
          city: selectedProvince,
        });

        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("https://locknlock-dvxb.onrender.com/api/address/" + addressId, requestOptions)
          .then((response) => {
            if (response.ok) {
              toast.success("Sửa địa chỉ thành công!", {
                position: "bottom-center",
              });
              setPhone(" ");
              setAddress(undefined);
              setPhoneUpdate(undefined);
              setAddressUpdate(undefined);
              setIsRender(!isRender);
              document.getElementById("frm_order_act").reset();
            } else {
              toast.error("Sửa địa chỉ không thành công!", {
                position: "bottom-center",
              });
              setIsRender(!isRender);
            }
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
        document.getElementById("frm_order_act").reset();
        const form = document.getElementById("frm_order_act");
        const selectElements = form.getElementsByTagName("select");

        for (let i = 0; i < selectElements.length; i++) {
          selectElements[i].selectedIndex = 0;
        }
        setSelectedProvince("");
        setSelectedDistrict("");
        setSelectedWard("");
        setDistricts([]);
        setWards([]);
      }
    } else {
      if (phone === "") {
        toast.error("Vui lòng nhập số điện thoại", {
          position: "bottom-center",
        });
      } else if (phone.length !== 9) {
        toast.error("Vui lòng nhập đúng định dạng số điện thoại", {
          position: "bottom-center",
        });
      } else if (selectedProvince === "") {
        toast.error("Vui lòng chọn Tỉnh/Thành", { position: "bottom-center" });
      } else if (selectedDistrict === "") {
        toast.error("Vui lòng chọn Quận/Huyện", { position: "bottom-center" });
      } else if (selectedWard === "") {
        toast.error("Vui lòng chọn Phường/Xã", { position: "bottom-center" });
      } else if (address === undefined) {
        toast.error("Vui lòng nhập địa chỉ", { position: "bottom-center" });
      } else if (!pattern.test(address)) {
        toast.error("Vui lòng nhập đúng định dạng địa chỉ", {
          position: "bottom-center",
        });
      } else {
        const addressParts = address.split(",");
        const houseNumber = addressParts[0].trim();
        const street = addressParts[1].trim();

        myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        raw = JSON.stringify({
          userId: userId,
          phoneNumber: phone,
          houseNumber: houseNumber,
          street: street,
          ward: selectedWard,
          district: selectedDistrict,
          city: selectedProvince,
        });

        requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("https://locknlock-dvxb.onrender.com/api/address/add", requestOptions)
          .then((response) => {
            if (response.ok) {
              toast.success("Thêm địa chỉ thành công!", {
                position: "bottom-center",
              });
              document.getElementById("frm_order_act").reset();
              setPhone(" ");
              setAddress(undefined);
              setHasAddress(true);
              setIsRender(!isRender);
            } else {
              toast.error("Thêm địa chỉ không thành công!", {
                position: "bottom-center",
              });
              setIsRender(!isRender);
            }
            response.text();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      }
    }
  };

  function addOrder() {
    if (hasAddress) {
      const requests = products.map((item) => {
        return fetch(
          `https://locknlock-dvxb.onrender.com/api/product/quantity/${item.id}/${item.quantity}`,
          {
            method: "PUT",
          }
        )
          .then((response) => {
            if (response.ok) {
              return true;
            } else {
              throw new Error("Số lượng sản phẩm không đủ!");
            }
          })
          .catch((error) => {
            toast.error("Số lượng sản phẩm không đủ!", {
              position: "bottom-center",
            });
            throw new Error("Số lượng sản phẩm không đủ!");
          });
      });
      Promise.all(requests)
        .then(() => {
          var orderId = 0;
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            username: localStorage.getItem("username"),
            address: `${addresses[0].houseNumber}, ${addresses[0].street}, ${addresses[0].ward}, ${addresses[0].district}, ${addresses[0].city}`,
            phone: addresses[0].phoneNumber,
            email: localStorage.getItem("email"),
            total: totalPrice - totalPriceSale + 16000,
            status: payMethod === 1 ? "Chờ Thanh Toán" : "Chuẩn Bị Giao Hàng",
            trash: false,
            confirm: false,
            date: date,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          fetch("https://locknlock-dvxb.onrender.com/api/order/add", requestOptions)
            .then((response) => response.text())
            .then((result) => {
              var order = JSON.parse(result);
              orderId = order["id"];
            })
            .then(() => {
              products.forEach((item) => {
                requestOptions = {
                  method: "GET",
                  redirect: "follow",
                };
                raw = JSON.stringify({
                  orderId: orderId,
                  productId: item.id,
                  quantity: item.quantity,
                });

                requestOptions = {
                  method: "POST",
                  headers: myHeaders,
                  body: raw,
                  redirect: "follow",
                };

                fetch(
                  "https://locknlock-dvxb.onrender.com/api/orderdetail/add",
                  requestOptions
                )
                  .then((response) => response.text())
                  .then((result) => console.log(result))
                  .catch((error) => console.log("error", error));
              });
            })
            .catch((error) => console.log(error));
          sendMail();
          store.getState().cart.carts = [];
          localStorage.removeItem("CART");
          toast.success("Bạn đã đặt hàng thành công!", {
            position: "bottom-center",
          });
          setTimeout(() => setIsOrder(true), 2000);
        })
        .catch((error) => {
          console.log(requests);
        });
    } else {
      toast.error("Bạn chưa có địa chỉ!", { position: "bottom-center" });
    }
  }

  if (isOrder === true) return <Navigate to="/" />;

  return (
    <div id="contents">
      <div className="root_width mobile_width">
        <form id="frm_order_act" name="frm_order_act">
          <div
            id="mCafe24Order"
            className="xans-element- xans-order xans-order-formglobal typeHeader "
          >
            <div className="beFore_confirm">
              <div
                id="ec-jigsaw-area-orderProduct"
                className="ec-base-fold eToggle selected"
              >
                <div id="ec-jigsaw-title-orderProduct" className="title">
                  <h2>Sản phẩm</h2>
                </div>
                <div className="contents">
                  {/* app tag */}
                  <div id="ec-orderform-orderProduct-head" />
                  <div className="orderArea ">
                    <div className="xans-element- xans-order xans-order-oversealist">
                      {products.map((product) => {
                        totalPriceSale =
                          totalPriceSale +
                          product.price *
                            (0.01 * product.sale) *
                            product.quantity;
                        totalPrice =
                          totalPrice + product.price * product.quantity;
                          usa = ((totalPrice - totalPriceSale + 16000)/23000).toFixed(2);
                        return (
                          <div className="ec-base-prdInfo ">
                            <div className="prdBox">
                              <div className="thumbnail">
                                <Link to={`/productdetail/${product.id}`}>
                                  <img
                                    src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                    alt=""
                                    width={90}
                                    height={90}
                                  />
                                </Link>
                              </div>
                              <div className="description">
                                <strong className="prdName" title="Product">
                                  {" "}
                                  <Link
                                    to={`/productdetail/${product.id}`}
                                    className="ec-product-name"
                                  >
                                    {product.name}
                                  </Link>
                                </strong>
                                <ul className="info">
                                  <li>Số lượng: {product.quantity} sản phẩm</li>
                                  <li>
                                    <span id>
                                      Giá sản phẩm:{" "}
                                      {formatter.format(
                                        (product.price -
                                          product.price *
                                            (0.01 * product.sale)) *
                                          product.quantity
                                      )}{" "}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="billingNshipping">
                <div
                  id="ec-jigsaw-area-shippingInfo"
                  className="ec-base-fold eToggle selected"
                >
                  <div id="ec-jigsaw-title-shippingInfo" className="title">
                    <h2>Thông Tin Vận Chuyển</h2>
                  </div>
                  <div className="contents">
                    {/* app tag */}
                    <div id="ec-orderform-billingNshipping-head" />
                    <div className="shippingInfo">
                      <div
                        id="ec-jigsaw-tab-shippingInfo"
                        className="ec-base-tab "
                      >
                        <ul>
                          <li
                            id="ec-jigsaw-tab-shippingInfo-recentAddress"
                            className={activeTab === 1 ? "selected" : ""}
                            onClick={() => handleTabClick(1)}
                          >
                            <Link to="">Địa chỉ gần đây</Link>
                          </li>
                          <li
                            id="ec-jigsaw-tab-shippingInfo-newAddress"
                            className={activeTab === 2 ? "selected" : ""}
                            onClick={handleCreateAddress}
                          >
                            <Link to="">Địa chỉ mới</Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        id="ec-shippingInfo-recentAddress"
                        className={
                          activeTab === 1
                            ? "tabCont recentShipArea"
                            : "tabCont recentShipArea displaynone"
                        }
                      >
                        {showAddressList ? (
                          <div
                            id="ec-shippingInfo-recentAddressList"
                            className="segment"
                          >
                            <ul className="shippingList">
                              {addresses.map((address) => (
                                <li className="xans-element- xans-order xans-order-deliverylist xans-record-">
                                  <div className="description">
                                    <p className="address gBlank10">
                                      <br />
                                      VIET NAM{" "}
                                      <span className="ec-shippingInfo-recentAddressList-zipcode-8581" />
                                      <br />
                                      <span className="ec-shippingInfo-recentAddressList-addr1-8581">
                                        {address.houseNumber},
                                      </span>
                                      <span className="ec-shippingInfo-recentAddressList-addr2-8581 gIndent10">
                                        {`${address.street}, ${address.ward}, ${address.district}, ${address.city}`}
                                      </span>
                                    </p>
                                    <dl className="contact">
                                      <dt>SĐT di động</dt>
                                      <dd>{address.phoneNumber}</dd>
                                    </dl>
                                  </div>
                                  <span className="button">
                                    <button
                                      type="button"
                                      id="ec-shippingInfo-recentAddressList-choice-modify-8581"
                                      className="btnText"
                                      data-id={address.id}
                                      onClick={handleUpdate}
                                    >
                                      Chỉnh sửa
                                    </button>
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <span
                              onClick={handleCloseAddressList}
                              className="sideRight"
                            >
                              <button
                                type="button"
                                id="ec-shippingInfo-closeRecentAddressList"
                                className="btnBase mini"
                              >
                                Đóng
                              </button>
                            </span>
                          </div>
                        ) : (
                          <div
                            id="ec-shippingInfo-recentAddressText"
                            className="segment"
                          >
                            <div className="recent">
                              <p className="address gBlank10">
                                <span id="delivery_info_country">VIET NAM</span>
                                <span id="delivery_info_zipcode" />
                                <br />
                                <span id="delivery_info_address">
                                  {addresses[0] && addresses[0].houseNumber},
                                </span>
                                <span
                                  id="delivery_info_address2"
                                  className="gIndent10"
                                >
                                  {addresses[0] &&
                                    `${addresses[0].street}, ${addresses[0].ward}, ${addresses[0].district}, ${addresses[0].city}`}
                                </span>
                              </p>
                              <dl className="contact">
                                <dt className>SĐT di động</dt>
                                <dd className>
                                  <span id="delivery_info_phone2_ex2">
                                    {addresses[0] && addresses[0].phoneNumber}
                                  </span>
                                </dd>
                              </dl>
                            </div>
                            <span
                              onClick={handleOpenAddressList}
                              className="sideRight"
                            >
                              <button
                                type="button"
                                id="ec-shippingInfo-showRecentAddressList"
                                className="btnNormal mini"
                              >
                                Danh sách
                              </button>
                            </span>
                          </div>
                        )}
                      </div>
                      <div
                        id="ec-shippingInfo-newAddress"
                        className={
                          activeTab === 2
                            ? "tabCont newShipArea"
                            : "tabCont newShipArea displaynone"
                        }
                      >
                        <div className="ec-base-table typeWrite">
                          <ul>
                            <li className="ec-shippingInfo-receiverCell ">
                              <div className="td-div">
                                Số điện thoại di động{" "}
                                <span className>
                                  <span className="icoRequired">Bắt buộc</span>
                                </span>
                              </div>
                              <div className="align-center">
                                <input
                                  id="fphone2_ex2"
                                  name="fphone2_ex[]"
                                  maxLength={15}
                                  size={20}
                                  onChange={(e) => setPhone(e.target.value)}
                                  placeholder="Nhập số điện thoại có 9 chữ số"
                                  defaultValue={phoneUpdate && phoneUpdate}
                                  type="text"
                                />{" "}
                                <p>
                                  Vui lòng không nhập số 0 ở đầu số điện thoại
                                  (ví dụ: 0986xxxxxx → 986xxxxxx)
                                </p>
                              </div>
                            </li>
                            <li id="ec-freceiver-address">
                              <div className="td-div">
                                Địa chỉ{" "}
                                <span className>
                                  <span className="icoRequired">Bắt buộc</span>
                                </span>
                              </div>
                              <div>
                                <ul className="ec-address">
                                  <li
                                    id="freceiver_area_wrap"
                                    className="ec-address-area"
                                  >
                                    <select
                                      id="si_name_addr"
                                      name="si_name_addr"
                                      onChange={handleProvinceChange}
                                    >
                                      <option value="" selected disabled>
                                        Tỉnh/Thành
                                      </option>
                                      {provinces.map((province) => (
                                        <option
                                          key={province.code}
                                          value={province.name}
                                          data-code={province.code}
                                        >
                                          {province.name}
                                        </option>
                                      ))}
                                    </select>
                                    <select
                                      id="ci_name_addr"
                                      name="ci_name_addr"
                                      onChange={handleDistrictChange}
                                    >
                                      <option value="" selected disabled>
                                        Quận/Huyện
                                      </option>
                                      {districts.map((district) => (
                                        <option
                                          key={district.code}
                                          value={district.name}
                                          data-code={district.code}
                                        >
                                          {district.name}
                                        </option>
                                      ))}
                                    </select>
                                    <select
                                      id="gu_name_addr"
                                      name="gu_name_addr"
                                      onChange={(e) =>
                                        setSelectedWard(e.target.value)
                                      }
                                    >
                                      <option value="" selected disabled>
                                        Phường/Xã
                                      </option>
                                      {wards.map((ward) => (
                                        <option
                                          key={ward.code}
                                          value={ward.name}
                                        >
                                          {ward.name}
                                        </option>
                                      ))}
                                    </select>
                                  </li>
                                  <li id="freceiver_detailAddr_wrap">
                                    <input
                                      id="faddress2"
                                      name="faddress2"
                                      defaultValue={
                                        addressUpdate && addressUpdate
                                      }
                                      placeholder="Số nhà, Đường"
                                      className="inputTypeText"
                                      type="text"
                                      size={60}
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                      maxLength={255}
                                    />
                                  </li>
                                </ul>{" "}
                                <div
                                  onClick={handleSubmitAddress}
                                  style={{ marginTop: "30px" }}
                                  className="xans-product xans-product-listmore productPaginate typeMoreview"
                                >
                                  <Link to="" className="btnMore">
                                    <span>Lưu</span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ec-shippingInfo-shippingMessage segment unique ">
                      <textarea
                        id="fmessage"
                        name="fmessage"
                        fw-filter
                        fw-label="Lời nhắn vận chuyển quốc tế"
                        fw-msg
                        maxLength={255}
                        cols={70}
                        placeholder="Vui lòng nhập ghi chú vận chuyển.(Lựa chọn)"
                        defaultValue={""}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-mCafe clearBoth">
                <div className="mCafe-left">
                  <div
                    id="ec-jigsaw-area-paymethod"
                    className="ec-base-fold eToggle selected"
                  >
                    <div id="ec-jigsaw-title-paymethod" className="title">
                      <h2>Lựa chọn phương thức thanh toán</h2>
                    </div>
                    <div className="contents">
                      {/* app tag */}
                      <div id="ec-orderform-paymethod-head" />
                      <div className="segment">
                        <ul className="payMethod">
                          <li className="ec-paymethod-newArea selected">
                            <div className="inner">
                              <span className={`ec-base-label ${selectedOption === 1 ? 'selected-option' : ''}`} onClick={()=>setMethod(1)} style={{textAlign: "center"}}>
                                <label htmlFor="addr_paymethod0">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/m_cod.gif"
                                    style={{ height: "40px" }}
                                    alt=""
                                  />
                                </label>
                              </span>
                              <span className={`ec-base-label ${selectedOption === 2 ? 'selected-option' : ''}`} onClick={()=>setMethod(2)}  style={{textAlign: "center"}}>
                                <label htmlFor="addr_paymethod1">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/paypal.jpg"
                                    style={{ height: "40px" }}
                                    alt=""
                                  />
                                </label>
                              </span>
                              <span className="ec-base-label disabled-option" style={{textAlign: "center"}}>
                                <label htmlFor="addr_paymethod2">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/m-momo.gif"
                                    alt=""
                                    style={{ height: "40px" }}
                                  />
                                </label>
                              </span>
                              <span className="ec-base-label disabled-option" style={{textAlign: "center"}}>
                                <label htmlFor="addr_paymethod3">
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/m-atm-new.gif"
                                    alt=""
                                    style={{ height: "40px" }}
                                  />
                                </label>
                              </span>{" "}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mCafe-right">
                  <div
                    id="ec-jigsaw-area-benefit"
                    className="ec-base-fold eToggle"
                  >
                    <div id="ec-jigsaw-title-benefit" className="title">
                      <h2>Ưu đãi điểm thưởng</h2>
                      <span
                        id="ec-jigsaw-heading-benefit"
                        className="txtStrong gRight"
                        style={{ display: "inline" }}
                      >
                        <span id="mAllMileageSum-title">0đ</span>
                      </span>
                    </div>
                    <div className="contents">
                      {/* app tag */}
                      <div id="ec-orderform-benefit-head" />
                      <div className="segment">
                        <div className="ec-base-table gCellNarrow">
                          <table border={1}>
                            <caption>Ưu đãi điểm thưởng</caption>
                            <colgroup>
                              <col style={{ width: "160px" }} />
                              <col style={{ width: "auto" }} />
                            </colgroup>
                            <tbody>
                              <tr>
                                <th scope="row">Điểm thưởng (sản phẩm)</th>
                                <td className="right">
                                  <span id="mProductMileage" className="price">
                                    0đ
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Điểm thưởng (thành viên)</th>
                                <td className="right">
                                  <span id="mMemberMileage" className="price">
                                    0đ
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Điểm thưởng (coupon)</th>
                                <td className="right">
                                  <span id="mCouponMileage" className="price">
                                    0đ
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="totalPay">
                        <h3 className="heading">Tổng (dự kiến)</h3>
                        <strong className="txtEm">
                          <span id="mAllMileageSum" style={{}}>
                            0đ
                          </span>
                        </strong>
                      </div>
                      {/* app tag */}
                      <div id="ec-orderform-benefit-tail" />
                    </div>
                  </div>
                  <div
                    id="ec-jigsaw-area-payment"
                    className="ec-base-fold eToggle selected"
                  >
                    <div id="ec-jigsaw-title-payment" className="title">
                      <h2>Chi Tiết Đơn Hàng</h2>
                    </div>
                    <div className="contents">
                      {/* app tag */}
                      <div id="ec-orderform-payment-head" />
                      <div className="segment">
                        <div className="ec-base-table gCellNarrow">
                          <table border={1}>
                            <caption>Chi Tiết Đơn Hàng</caption>
                            <colgroup>
                              <col style={{ width: "160px" }} />
                              <col style={{ width: "auto" }} />
                            </colgroup>
                            <tbody>
                              <tr>
                                <th scope="row">Tổng</th>
                                <td className="right">
                                  <span id="total_product_base_price_id">
                                  {formatter.format(totalPrice)}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Giảm giá/Khác</th>
                                <td className="right">
                                  <span id="payment_total_sale_price_view">
                                  {formatter.format(totalPriceSale)}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Vận Chuyển</th>
                                <td className="right">
                                  +<span id="total_ship_price_id">16.000 đ</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="totalPay gBlank10">
                          <h3 className="heading">Tổng tiền thanh toán</h3>
                          <strong className="txtStrong">
                            <span id="payment_total_order_sale_price_view">
                            {formatter.format(
                                    totalPrice - totalPriceSale + 16000
                                  )}
                            </span>{" "}
                          </strong>
                        </div>
                      </div>
                      <div id="ec-orderform-payment-tail" />
                      <div className="ec-base-button gFull" style={{maxHeight: "102px"}} id="orderFixItem">
                      { payMethod && payMethod === 1 ? (
                              <button
                                type="button"
                                className="btnSubmit"
                                id="custom_submit"
                                onClick={addOrder}
                              >
                                Thanh toán
                              </button>
                            ) : (
                              <PayPalButton
                              amount={usa}
                              options={{
                                clientId: "Ad14McxM47SyPz8oGbUezWuU8G1djRdgkcmAq2GMr5DICEsAiNp8uhh5rZBNd2IZ3sMLkR0rawx2qufX",
                                currency: "USD",
                              }}
                              onSuccess={() => {
                                addOrder();
                              }}
                              onError={() => {
                                alert(
                                  "Error"
                                );
                              }}
                            ></PayPalButton>
                            )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>{" "}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PayRes;
