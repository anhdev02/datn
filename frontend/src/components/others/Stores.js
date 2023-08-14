import React, { useState } from "react";
import { Link } from "react-router-dom";

const Stores = () => {
  const [activeTab, setActiveTab] = useState("mien_bac");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li title="Current Page">
                  <strong>Hệ thống cửa hàng</strong>
                </li>
              </ol>
            </div>
            <div className="customer_sidenav">
              <h3 className="customer_h3">
                <Link to="/customercare">Chăm sóc khách hàng</Link>
              </h3>
              <Link to="/stores" className="on">
                Hệ thống cửa hàng
              </Link>
              <Link to="">Chính sách &amp; Quy định chung</Link>
              <Link to="/policy">Chính sách bảo hành</Link>
              <div className="customer_top">
                <img src="https://locknlock-d1171.web.app/imgs/tel_icon.png" alt="" />
                <span className="customer_bold">028-5413 5750 (487)</span>
                <br />
                ngan.dnt@locknlock.com
              </div>
              <div className="customer_bottom">
                Week : 09:00 - 17:00
                <br />
                Lunch : 12:00 - 13:00 <br />
                Sat.Sun.Holiday : OFF
              </div>
            </div>
            <div className="store_container">
              <div className="store_width">
                <div className="store_width_tab">
                  <h3 className="store_h3">Tìm cửa hàng</h3>
                  <div className="store_tab">
                    <button
                      className={`store_tablinks ${
                        activeTab === "mien_bac" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("mien_bac")}
                    >
                      Miền Bắc
                    </button>
                    <button
                      className={`store_tablinks ${
                        activeTab === "mien_trung" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("mien_trung")}
                    >
                      Miền Trung
                    </button>
                    <button
                      className={`store_tablinks ${
                        activeTab === "mien_nam" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("mien_nam")}
                    >
                      Miền Nam
                    </button>
                  </div>
                  <div
                    id="mien_bac"
                    className={`store_tabcontent ${
                      activeTab !== "mien_bac" ? "displaynone" : ""
                    }`}
                  >
                    <div>
                      <table className="store_table">
                        <tbody>
                          <tr>
                            <th>Cửa hàng</th>
                            <th>Địa chỉ</th>
                            <th>Liên lạc</th>
                            <th>Giờ hoạt động</th>
                          </tr>
                          <tr>
                            <td>
                              <Link to="">Aeon mall Ha Dong</Link>
                            </td>
                            <td>
                              Tầng 3, Aeon mall Hà Đông, Phường Dương Nội, Quận
                              Hà Đông, Hà Nội
                            </td>
                            <td className="store_tablecenter">024 6666 4986</td>
                            <td className="store_tablecenter">
                              10:00 - 22:00 (Thứ 2-Thứ 6) 09:00 - 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Aeon mall Hai Phong</td>
                            <td>
                              Tầng 3, Aeon mall Hải Phòng, Số 10 đường Võ Nguyên
                              Giáp, phường Kênh Dương, quận Lê Chân, Thành phố
                              Hải Phòng
                            </td>
                            <td className="store_tablecenter">022 5351 8689</td>
                            <td className="store_tablecenter">
                              10:00 - 22:00 (Thứ 2-Thứ 6) 09:00 - 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Aeon mall Long Biên</td>
                            <td>
                              Tầng 2, Aeon Mall Long Biên, 27 đường Cổ Linh,
                              Phường Long Biên, Quận Long Biên, Hà Nội
                            </td>
                            <td className="store_tablecenter">024 6666 4560</td>
                            <td className="store_tablecenter">
                              10:00 - 22:00 (Thứ 2-Thứ 6) 09:00 - 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Bac Nhin</td>
                            <td>Yên Trung, Yên Phong, Bắc Ninh</td>
                            <td className="store_tablecenter">022 2222 1001</td>
                            <td className="store_tablecenter">09:00 ~ 19:00</td>
                          </tr>
                          <tr>
                            <td>Garden</td>
                            <td>
                              Tầng 3, TTTM The Garden, khu đô thị, Đ. Mễ Trì, Mỹ
                              Đình, Nam Từ Liêm, Hà Nội
                            </td>
                            <td className="store_tablecenter">024 3787 6459</td>
                            <td className="store_tablecenter">
                              10:00 - 22:00 (Thứ 2-Thứ 6) 09:00 - 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Hải Dương</td>
                            <td>
                              91 Nguyễn Lương Bằng, P. Phạm Ngũ Lão, Thành phố
                              Hải Dương, Hải Dương, Việt Nam
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter" />
                          </tr>
                          <tr>
                            <td>Lotte center</td>
                            <td>
                              Tầng 5, TTTM Lotte Center, 54 Liễu Giai, Hà Nội
                            </td>
                            <td className="store_tablecenter">
                              024 6658 9977
                              <br />
                              024 6293 9370
                            </td>
                            <td className="store_tablecenter">9:30 ~ 22:00</td>
                          </tr>
                          <tr>
                            <td>Lotte Mart Vinh</td>
                            <td>
                              2F–04-05, TTTM Lotte Mart - 494 V.I. Lê Nin, Hà
                              Huy Tập, Thành phố Vinh, Nghệ An
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">8:00 ~ 22:00</td>
                          </tr>
                          <tr>
                            <td>Savico Mega Mall</td>
                            <td>
                              Tầng 2, Savico Mega Mall, Số 7 &amp; số 9 đường
                              Nguyễn Văn Linh, Long Biên, Hà Nội
                            </td>
                            <td className="store_tablecenter">024 6664 3797</td>
                            <td className="store_tablecenter">09:00 ~ 22:00</td>
                          </tr>
                          <tr>
                            <td>Vincom Center Bà Triệu</td>
                            <td>
                              Tầng 4, Số 191 Bà Triệu, Q. Hai Bà Trưng, Hà Nội
                            </td>
                            <td className="store_tablecenter">
                              0024 3974 8327
                            </td>
                            <td className="store_tablecenter">10:00 ~ 22:00</td>
                          </tr>
                          <tr>
                            <td>Vincom Center Metropolis</td>
                            <td>
                              Tầng hầm B1,Vincom Center Metropolis, 29 Liễu
                              Giai,Ngọc Khánh, Ba Đình, Hà Nội
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">10:00 ~ 21:30</td>
                          </tr>
                          <tr>
                            <td>Vincom Center Nguyễn Chí Thanh</td>
                            <td>
                              Tầng 3, Vincom Center Nguyễn Chí Thanh, 54A Nguyễn
                              Chí Thanh, Q. Đống Đa, Hà Nội
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">10:00 ~ 21:30</td>
                          </tr>
                          <tr>
                            <td>Vincom Center Time City</td>
                            <td>
                              Tầng hầm B1, Số 458 Minh Khai, Q. Hai Bà Trưng, Hà
                              Nội
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">10:00 ~ 21:30</td>
                          </tr>
                          <tr>
                            <td>Vincom Mega Mall Ocean Park</td>
                            <td>
                              Khu đô thị Vinhomes Ocean Park, Kiêu Kỵ, H. Gia
                              Lâm, Hà Nội
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">10:00 ~ 21:30</td>
                          </tr>
                          <tr>
                            <td>Vincom Mega Mall Royal City</td>
                            <td>
                              Tầng hầm B2, 72A Nguyễn Trãi, P. Thượng Đình, Q.
                              Thanh Xuân, Tp. Hà Nội
                            </td>
                            <td className="store_tablecenter">024 6664 7980</td>
                            <td className="store_tablecenter">10:00 ~ 21:30</td>
                          </tr>
                          <tr>
                            <td>Vincom Mega Mall Smart City</td>
                            <td>
                              KĐT Vinhomes Smart City, P. Đại Mỗ, Q. Nam Từ Liêm
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">10:00 ~ 21:30</td>
                          </tr>
                          <tr>
                            <td>Vincom Trần Duy Hưng (Star City)</td>
                            <td>
                              Tầng 3, Vincom Center, Số 119 Trần Duy Hưng, P.
                              Trung Hòa, Q. Cầu Giấy, Hà Nội
                            </td>
                            <td className="store_tablecenter">N/A</td>
                            <td className="store_tablecenter">10:00 ~ 22:00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    id="mien_trung"
                    className={`store_tabcontent ${
                      activeTab !== "mien_trung" ? "displaynone" : ""
                    }`}
                  >
                    <div>
                      <table className="store_table">
                        <tbody>
                          <tr>
                            <th>Cửa hàng</th>
                            <th>Địa chỉ</th>
                            <th>Liên lạc</th>
                            <th>Giờ hoạt động</th>
                          </tr>
                          <tr>
                            <td>
                              <Link to="">F2C Huế</Link>
                            </td>
                            <td>
                              Số 50A, Đường hùng Vương, Phường Phú Nhuận, Thành
                              phố Huế
                            </td>
                            <td className="store_tablecenter">0234 3996 339</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>F2C Vc Đà Nẵng</td>
                            <td>
                              910A Ngô Quyền, p.An Hải Bắc, q.Sơn Trà, TP.Đà
                              Nẵng
                            </td>
                            <td className="store_tablecenter">0236 3956 567</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Lock Nha Trang (CN 1)</td>
                            <td>
                              TTTM Vincom Nha Trang - 44 Le Thanh Ton , Loc Tho
                              , Tp. Nha Trang - Khánh Hòa
                            </td>
                            <td className="store_tablecenter">0258 390 1015</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    id="mien_nam"
                    className={`store_tabcontent ${
                      activeTab !== "mien_nam" ? "displaynone" : ""
                    }`}
                  >
                    <div>
                      <table className="store_table">
                        <tbody>
                          <tr>
                            <th>Cửa hàng</th>
                            <th>Địa chỉ</th>
                            <th>Liên lạc</th>
                            <th>Giờ hoạt động</th>
                          </tr>
                          <tr>
                            <td>
                              <Link to="">Aeon Bình Tân</Link>
                            </td>
                            <td>
                              01 đường số 17A, khu phố 11, phường Bình Trị Đông
                              B, quận Bình Tân
                            </td>
                            <td className="store_tablecenter">028.3620 2325</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Aeon Mall BD</td>
                            <td>
                              01 Đại Lộ Bình Dương, KP Bình Giao, P.Thuận Giao,
                              Thuận An, Bình Dương
                            </td>
                            <td className="store_tablecenter">0274 2466 599</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Aeon Tân Phú</td>
                            <td>
                              30 Bờ Bao Tân Thắng, P. Sơn Kỳ, Q. Tân Phú, Tp. Hồ
                              Chí Minh
                            </td>
                            <td className="store_tablecenter">028 3620 5227</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Crescent Mall</td>
                            <td>
                              Tầng 4, TTTM Crescent mall, 101 Tôn Dật Tiên, Phú
                              Mỹ Hưng ,Q7
                            </td>
                            <td className="store_tablecenter">028 5413 7359</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>F2C Long Hậu</td>
                            <td>
                              Lô N.5-7, Khu công nghiệp Long Hậu mở rộng, xã
                              Long Hậu, huyện Cần Giuộc, tỉnh Long An
                            </td>
                            <td className="store_tablecenter">028.3620 1406</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>F2C Sense Cần Thơ</td>
                            <td>
                              TTTM Sense City, số 1 Đại Lộ Hòa Bình,P.Tân An,
                              Q.Ninh Kiều, Tp.Cần Thơ
                            </td>
                            <td className="store_tablecenter">0292 3828 839</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>F2C Vũng Tàu Melody</td>
                            <td>
                              Tầng trệt, cc Vũng Tàu Melody, góc đường Võ Thị
                              Sáu - Hoàng Hoa Thám, P. Thắng Tam, Tp. Vũng Tàu,
                              tỉnh Bà Rịa - Vũng Tàu
                            </td>
                            <td className="store_tablecenter">0254 3500 566</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Giga Mall</td>
                            <td>
                              Tầng 2, 240-242 Kha Vạn Cân, Hiệp Bình Chánh, Q.
                              Thủ Đức
                            </td>
                            <td className="store_tablecenter">028 3636 9803</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>LandMark 81</td>
                            <td>
                              Khu đô thị Vinhomes Central Park , Nguyễn Hữ Cảnh
                              Q. Bình Thạnh, Tp. Hồ Chí Minh
                            </td>
                            <td className="store_tablecenter">028.3636 9053</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Nowzone</td>
                            <td>
                              Tầng 2, Nowzone, 235 Nguyễn Văn Cừ, P.Nguyễn Cư
                              Trinh, Q.1, Tp. Hồ Chí Minh
                            </td>
                            <td className="store_tablecenter">028 3925 8197</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Parkson Hùng Vương</td>
                            <td>126 Hùng Vương, P.12, Q.5, Tp. Hồ Chí Minh</td>
                            <td className="store_tablecenter">028 6276 1998</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>SC Vivo City</td>
                            <td>
                              1058 Đại lộ Nguyễn Văn Linh, P. Tân Phong Q.7, Tp.
                              Hồ Chí Minh
                            </td>
                            <td className="store_tablecenter">028 3636 9747</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Vincom Center Đồng Khởi</td>
                            <td>
                              B2-05,72 Lê Thánh Tôn &amp; 42A Lý Tự Trọng, P.Bến
                              Nghé, Q.1, Tp. Hồ Chí Minh
                            </td>
                            <td className="store_tablecenter">028.3827 0050</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Vincom Mega Mall Thảo Điền</td>
                            <td>
                              161 Xa lộ Hà Nội , P. Thảo Điền Q.2, Tp. Hồ Chí
                              Minh
                            </td>
                            <td className="store_tablecenter">028.3636 2970</td>
                            <td className="store_tablecenter">
                              10:00 ~ 22:00 (Thứ 2-Thứ 6) 09:30 ~ 22:00 (Thứ 7,
                              CN &amp; các ngày lễ)
                            </td>
                          </tr>
                          <tr>
                            <td>Vạn Hạnh Mall</td>
                            <td>
                              Tầng 4 , Số 11 Vạn Hạnh Mall , Phường 12 , Quận
                              10, Tp. Hồ Chí Minh
                            </td>
                            <td className="store_tablecenter">028 3636 7445</td>
                            <td className="store_tablecenter">
                              09:30 ~ 22:00 (Thứ 2-CN)
                            </td>
                          </tr>
                          <tr>
                            <td>Sense City Cần Thợ</td>
                            <td>
                              Tầng 1, 1 Đại Lộ Hòa Bình, P. Tân An, Q. Ninh
                              Kiều, TP. Cần Thơ
                            </td>
                            <td className="store_tablecenter">0292 3828 839</td>
                            <td className="store_tablecenter">
                              08:30 ~ 22:00 (Thứ 2-CN)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
    </div>
  );
};

export default Stores;
