import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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

const EditAddress = (props) => {
  const userId = parseInt(localStorage.getItem("id"), 10);
  const user = localStorage.getItem("username");
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState();
  const [phoneUpdate, setPhoneUpdate] = useState();
  const [addressUpdate, setAddressUpdate] = useState();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsDefault, setDistrictsDefault] = useState([]);
  const [wards, setWards] = useState([]);
  const [wardsDefault, setWardsDefault] = useState([]);
  const [productFavorites, setProductFavorites] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/order/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));

    fetch("https://locknlock-dvxb.onrender.com/api/address/" + props.id)
      .then((response) => response.json())
      .then((data) => {
        setPhoneUpdate(data.phoneNumber);
        setAddressUpdate(`${data.houseNumber}, ${data.street}`);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${userId}`)
      .then((res) => res.json())
      .then((data) => setProductFavorites(data))
      .catch((err) => console.log(err));
  }, []);

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

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    const pattern = /^\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+$/u;
    if (phone !== "" && phone.length !== 9) {
      toast.error("Vui lòng nhập đúng định dạng số điện thoại", {
        position: "bottom-left",
      });
    } else if (selectedProvince === "") {
      toast.error("Vui lòng chọn Tỉnh/Thành", { position: "bottom-left" });
    } else if (selectedDistrict === "") {
      toast.error("Vui lòng chọn Quận/Huyện", { position: "bottom-left" });
    } else if (selectedWard === "") {
      toast.error("Vui lòng chọn Phường/Xã", { position: "bottom-left" });
    } else if (address !== undefined && !pattern.test(address)) {
      toast.error("Vui lòng nhập đúng định dạng địa chỉ", {
        position: "bottom-left",
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

      fetch("https://locknlock-dvxb.onrender.com/api/address/" + props.id, requestOptions)
        .then((response) => {
          if (response.ok) {
            toast.success("Sửa địa chỉ thành công!", {
              position: "bottom-left",
            });
            setTimeout(() => navigate("/addressbook"), 1000);
          } else {
            toast.error("Sửa địa chỉ không thành công!", {
              position: "bottom-left",
            });
          }
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/account">Tài khoản của tôi</Link>
                </li>
                <li title="Current Page">
                  <strong>Danh sách địa chỉ</strong>
                </li>
              </ol>
            </div>
            <div className="clearBoth">
              <div className="myshpp-left">
                <div className="customer_sidenav">
                  <h3 className="customer_h3">
                    <Link to="/account" className="on">
                      Tài khoản của tôi
                    </Link>
                  </h3>
                  <ul className="xans-element- xans-myshop xans-myshop-main my_ul">
                    <li className="my_li1">
                      <Link to="/order">
                        Đơn hàng
                        <span className="xans-element- xans-myshop xans-myshop-orderhistorytab">
                          (
                          <span id="xans_myshop_total_orders">
                            {orders.length}
                          </span>
                          )
                        </span>
                      </Link>
                    </li>
                    <li className="my_li2">
                      <Link to="/addressbook">Sổ địa chỉ</Link>
                    </li>
                    <li className="my_li3">
                      <Link to="/favouriteslist">
                        Danh sách yêu thích
                        <span className="count">
                          (
                          <span className="xans_myshop_main_interest_prd_cnt">
                            {productFavorites.length}
                          </span>
                          )
                        </span>
                      </Link>
                    </li>
                    <li className="my_li4">
                      <Link to="/seen">Đã xem</Link>
                    </li>
                    <li className="my_li7">
                      <Link to="/accountinfo">Thông tin tài khoản</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="myshpp-right">
                <div className="titleArea">
                  <h2>Tạo sổ địa chỉ</h2>
                </div>
                <form
                  id="frmAddr"
                  name
                  action="/exec/front/Myshop/Addr/?mode=Insert&return_url=%2Fmyshop%2Faddr%2Flist.html"
                  method="post"
                  target="_self"
                  encType="multipart/form-data"
                >
                  <div className="xans-element- xans-myshop xans-myshop-addrregister ">
                    <div className="ec-base-table typeWrite">
                      <table border={1} summary>
                        <caption>Thêm Địa Chỉ</caption>
                        <colgroup>
                          <col style={{ width: "140px" }} />
                          <col style={{ width: "auto" }} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">
                              Số điện thoại di động{" "}
                              <span>
                                <img
                                  src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                  alt="Required"
                                />
                              </span>
                            </th>
                            <td className="phone-td">
                              <input
                                id="ma_rcv_mobile_no2"
                                name="ma_rcv_mobile_no[]"
                                maxLength={15}
                                required
                                pattern="[0-9]{9}"
                                placeholder="Nhập 9 chữ số"
                                defaultValue={phoneUpdate}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Địa Chỉ{" "}
                              <img
                                src="https://locknlock-d1171.web.app/assets/imgs/ico_required_blue.gif"
                                alt="Required"
                              />
                            </th>
                            <td>
                              <ul className="ec-address">
                                <li
                                  id="shippingRegist_area_wrap"
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
                                      <option key={ward.code} value={ward.name}>
                                        {ward.name}
                                      </option>
                                    ))}
                                  </select>
                                </li>
                                <li
                                  id="shippingRegist_detailAddr_wrap"
                                >
                                  <input
                                    id="address_addr2"
                                    name="address_addr2"
                                    placeholder="Số nhà, Đường"
                                    className="inputTypeText"
                                    type="text"
                                    size={60}
                                    maxLength={255}
                                    defaultValue={addressUpdate}
                                    onChange={(e) => setAddress(e.target.value)}
                                    pattern="/^\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+,\s*[\p{L}\d\s]+$/u"
                                  />
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ec-base-button">
                      <Link
                        to=""
                        className="btnBlack btn150"
                        onClick={handleSubmitAddress}
                      >
                        Lưu
                      </Link>
                      <Link to="/addressbook" className="btnWhite btn150">
                        Hủy
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="ec-base-help">
                  <h3>Về Sổ Địa Chỉ</h3>
                  <div className="inner">
                    <ol>
                      <li className="item1">
                        Bạn có thể thêm tối đa 3 địa chỉ. Nếu bạn không thêm các
                        địa chỉ, sổ địa chỉ của bạn sẽ tự động cập nhật địa chỉ
                        nhận hàng của đơn hàng gần nhất.
                      </li>
                      <li className="item2">
                        Nếu bạn không muốn cập nhật tự động, mở Danh Sách Địa
                        Chỉ và thay đổi cài đặt cập nhật tự động thành “Cố
                        định”.
                      </li>
                      <li className="item3">
                        Để cài đặt địa chỉ nhận hàng mặc định, tìm địa chỉ nhận
                        hàng bạn muốn và nhấn “Chỉnh sửa”. Chọn “Lưu làm địa chỉ
                        nhận hàng mặc định”, rồi nhấn “Lưu”.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditAddress;
