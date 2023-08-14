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

const NewAddressRes = () => {
  const userId = parseInt(localStorage.getItem("id"), 10);
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsDefault, setDistrictsDefault] = useState([]);
  const [wards, setWards] = useState([]);
  const [wardsDefault, setWardsDefault] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const navigate = useNavigate();

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
    if (phone === " ") {
      toast.error("Vui lòng nhập số điện thoại", { position: "bottom-left" });
    } else if (phone.length !== 9) {
      toast.error("Vui lòng nhập đúng định dạng số điện thoại", {
        position: "bottom-left",
      });
    } else if (selectedProvince === "") {
      toast.error("Vui lòng chọn Tỉnh/Thành", { position: "bottom-left" });
    } else if (selectedDistrict === "") {
      toast.error("Vui lòng chọn Quận/Huyện", { position: "bottom-left" });
    } else if (selectedWard === "") {
      toast.error("Vui lòng chọn Phường/Xã", { position: "bottom-left" });
    } else if (address === undefined) {
      toast.error("Vui lòng nhập địa chỉ", { position: "bottom-left" });
    } else if (!pattern.test(address)) {
      toast.error("Vui lòng nhập đúng định dạng địa chỉ", {
        position: "bottom-left",
      });
    } else {
      const addressParts = address.split(",");
      const houseNumber = addressParts[0].trim();
      const street = addressParts[1].trim();

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        userId: userId,
        phoneNumber: phone,
        houseNumber: houseNumber,
        street: street,
        ward: selectedWard,
        district: selectedDistrict,
        city: selectedProvince,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://locknlock-dvxb.onrender.com/api/address/add", requestOptions)
        .then((response) => {
          if (response.ok) {
            toast.success("Thêm địa chỉ thành công!", {
              position: "bottom-left",
            });
            setTimeout(() => navigate("/addressbook"), 1000);
          } else {
            toast.error("Thêm địa chỉ không thành công!", {
              position: "bottom-left",
            });
          }
          response.text();
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div id="contents">
      <div className="root_width mobile_width">
        <div className="titleArea-new">
          <h2>Thêm Địa Chỉ Mới</h2>
        </div>
        <form id="frmAddr">
          <div className="xans-element- xans-myshop xans-myshop-addrregister ">
            <div className="ec-base-table typeWrite gClearBorderTop">
              <ul>
                <li>
                  <h3>
                    Số điện thoại{" "}
                    <img
                      src="https://locknlock-d1171.web.app/assets/imgs/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                    />
                  </h3>
                  <div>
                    <input
                      id="ma_rcv_name"
                      name="ma_rcv_name"
                      className="ec-member-name"
                      pattern="[0-9]{9}"
                      placeholder="Nhập 9 chữ số"
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                    />
                  </div>
                </li>
                <li>
                  <h3>
                    Địa Chỉ{" "}
                    <img
                      src="https://locknlock-d1171.web.app/assets/imgs/ico_required.png"
                      alt="Required"
                      width={5}
                      height={5}
                    />
                  </h3>
                  <div>
                    <ul className="ec-address">
                      <li
                        id="shippingRegist_area_wrap"
                        className="ec-address-area"
                        style={{}}
                      >
                        <select
                          onChange={handleProvinceChange}
                          id="si_name_addr"
                          name="si_name_addr"
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
                          onChange={handleDistrictChange}
                          id="ci_name_addr"
                          name="ci_name_addr"
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
                          onChange={(e) => setSelectedWard(e.target.value)}
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
                        className
                        style={{}}
                      >
                        <input
                          id="address_addr2"
                          name="address_addr2"
                          className="inputTypeText"
                          placeholder="Số nhà, Đường"
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          type="text"
                          size={60}
                          maxLength={255}
                        />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ec-base-button gColumn">
              <Link
                to=""
                onClick={handleSubmitAddress}
                className="btnBlack"
              >
                Thêm
              </Link>
              <Link to="/addressbook" className="btnBlue">
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

export default NewAddressRes;
