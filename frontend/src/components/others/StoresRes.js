import React from "react";
import { useState } from "react";

const StoresRes = () => {
  const [activeTab, setActiveTab] = useState("mien_bac");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div id="contents">
      <div class="root_width mobile_width">
        <div class="store_container">
          <div class="store_width">
            <div class="store_img">
              <h2>
                Hãy tìm cửa hàng
                <br />
                Lock&amp;Lock
                <br />
                gần nhất với bạn.
              </h2>
            </div>
            <div class="store_width_tab">
              <div class="store_tab">
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

              <div id="mien_bac" className={`store_tabcontent ${
                      activeTab !== "mien_bac" ? "displaynone" : ""
                    }`}>
                <div>
                  <ul>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Aeon mall Ha Dong</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 3, Aeon mall Hà Đông, Phường
                            Dương Nội, Quận Hà Đông, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 6666 4986
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 - 22:00 (Thứ
                            2-Thứ 6) 09:00 - 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Aeon mall Hai Phong</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 3, Aeon mall Hải Phòng, Số 10
                            đường Võ Nguyên Giáp, phường Kênh Dương, quận Lê
                            Chân, Thành phố Hải Phòng
                          </li>
                          <li>
                            <span>Điện thoại:</span> 022 5351 8689
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 - 22:00 (Thứ
                            2-Thứ 6) 09:00 - 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Aeon mall Long Biên</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 2, Aeon Mall Long Biên, 27
                            đường Cổ Linh, Phường Long Biên, Quận Long Biên, Hà
                            Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 6666 4560
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 - 22:00 (Thứ
                            2-Thứ 6) 09:00 - 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Bac Nhin</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Yên Trung, Yên Phong, Bắc Ninh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 022 2222 1001
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 09:00 ~ 19:00
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Garden</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 3, TTTM The Garden, khu đô
                            thị, Đ. Mễ Trì, Mỹ Đình, Nam Từ Liêm, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 3787 6459
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 - 22:00 (Thứ
                            2-Thứ 6) 09:00 - 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Hải Dương</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 91 Nguyễn Lương Bằng, P. Phạm Ngũ
                            Lão, Thành phố Hải Dương, Hải Dương, Việt Nam
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Lotte center</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 5, TTTM Lotte Center, 54 Liễu
                            Giai, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 6658 9977 - 024 6293
                            9370
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 9:30 ~ 22:00
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Lotte Mart Vinh</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 2F–04-05, TTTM Lotte Mart - 494
                            V.I. Lê Nin, Hà Huy Tập, Thành phố Vinh, Nghệ An
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 8:00 ~ 22:00
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Savico Mega Mall</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 2, Savico Mega Mall, Số 7
                            &amp; số 9 đường Nguyễn Văn Linh, Long Biên, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 6664 3797
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 09:00 ~ 22:00
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Center Bà Triệu</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 4, Số 191 Bà Triệu, Q. Hai Bà
                            Trưng, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 3974 8327
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Center Metropolis</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng hầm B1,Vincom Center
                            Metropolis, 29 Liễu Giai,Ngọc Khánh, Ba Đình, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 21:30
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Center Nguyễn Chí Thanh</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 3, Vincom Center Nguyễn Chí
                            Thanh, 54A Nguyễn Chí Thanh, Q. Đống Đa, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 21:30
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Center Time City</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng hầm B1, Số 458 Minh Khai, Q.
                            Hai Bà Trưng, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 21:30
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Mega Mall Ocean Park</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Khu đô thị Vinhomes Ocean Park,
                            Kiêu Kỵ, H. Gia Lâm, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 21:30
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Mega Mall Royal City</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng hầm B2, 72A Nguyễn Trãi, P.
                            Thượng Đình, Q. Thanh Xuân, Tp. Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> 024 6664 7980
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 21:30
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Mega Mall Smart City</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> KĐT Vinhomes Smart City, P. Đại Mỗ,
                            Q. Nam Từ Liêm
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 21:30
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Trần Duy Hưng (Star City)</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 3, Vincom Center, Số 119 Trần
                            Duy Hưng, P. Trung Hòa, Q. Cầu Giấy, Hà Nội
                          </li>
                          <li>
                            <span>Điện thoại:</span> N/A
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="mien_trung" className={`store_tabcontent ${
                      activeTab !== "mien_trung" ? "displaynone" : ""
                    }`}>
                <div>
                  <ul>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>F2C Huế</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Số 50A, Đường hùng Vương, Phường
                            Phú Nhuận, Thành phố Huế
                          </li>
                          <li>
                            <span>Điện thoại:</span> 0234 3996 339
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>F2C Vc Đà Nẵng</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 910A Ngô Quyền, p.An Hải Bắc, q.Sơn
                            Trà, TP.Đà Nẵng
                          </li>
                          <li>
                            <span>Điện thoại:</span> 0236 3956 567
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Lock Nha Trang (CN 1)</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> TTTM Vincom Nha Trang - 44 Le Thanh
                            Ton , Loc Tho , Tp. Nha Trang - Khánh Hòa
                          </li>
                          <li>
                            <span>Điện thoại:</span> 0258 390 1015
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="mien_nam"
                className={`store_tabcontent ${
                  activeTab !== "mien_nam" ? "displaynone" : ""
                }`}
              >
                <div>
                  <ul>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Aeon Bình Tân</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 01 đường số 17A, khu phố 11, phường
                            Bình Trị Đông B, quận Bình Tân
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028.3620 2325
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Aeon Mall BD</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 01 Đại Lộ Bình Dương, KP Bình Giao,
                            P.Thuận Giao, Thuận An, Bình Dương
                          </li>
                          <li>
                            <span>Điện thoại:</span> 0274 2466 599
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Aeon Tân Phú</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 30 Bờ Bao Tân Thắng, P. Sơn Kỳ, Q.
                            Tân Phú, Tp. Hồ Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 3620 5227
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Crescent Mall</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 4, TTTM Crescent mall, 101 Tôn
                            Dật Tiên, Phú Mỹ Hưng ,Q7
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 5413 7359
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>F2C Long Hậu</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Lô N.5-7, Khu công nghiệp Long Hậu
                            mở rộng, xã Long Hậu, huyện Cần Giuộc, tỉnh Long An
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028.3620 1406
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>F2C Sense Cần Thơ</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> TTTM Sense City, số 1 Đại Lộ Hòa
                            Bình,P.Tân An, Q.Ninh Kiều, Tp.Cần Thơ
                          </li>
                          <li>
                            <span>Điện thoại:</span> 0292 3828 839
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>F2C Vũng Tàu Melody</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng trệt, cc Vũng Tàu Melody, góc
                            đường Võ Thị Sáu - Hoàng Hoa Thám, P. Thắng Tam, Tp.
                            Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu
                          </li>
                          <li>
                            <span>Điện thoại:</span> 0254 3500 566
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>LandMark 81</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Khu đô thị Vinhomes Central Park ,
                            Nguyễn Hữ Cảnh Q. Bình Thạnh, Tp. Hồ Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028.3636 9053
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Lock Vạn Hạnh Mall</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 11 Sư Vạn Hạnh, P. 12, Q.10, Tp. Hồ
                            Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 3636 7445
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Nowzone</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> Tầng 2, Nowzone, 235 Nguyễn Văn Cừ,
                            P.Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 3925 8197
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Parkson Hùng Vương</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 126 Hùng Vương, P.12, Q.5, Tp. Hồ
                            Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 6276 1998
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>SC Vivo City</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 1058 Đại lộ Nguyễn Văn Linh, P. Tân
                            Phong Q.7, Tp. Hồ Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 3636 9747
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Sense Phạm Văn Đồng</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> L1-06, lầu 1, TTTM Sense City Phạm
                            Văn Đồng, 240-242 đường Kha Vạn Cân, P. Hiệp Bình
                            Chánh, Q. Thủ Đức
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028 3636 9803
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Center Đồng Khởi</span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> B2-05,72 Lê Thánh Tôn &amp; 42A Lý
                            Tự Trọng, P.Bến Nghé, Q.1, Tp. Hồ Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028.3827 0050
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="box-store">
                        <ul class="box-store-ul">
                          <li>
                            <a href="#st">
                              <span>Vincom Mega Mall Thảo Điền </span>
                            </a>
                          </li>
                          <li>
                            <span>ĐC:</span> 161 Xa lộ Hà Nội , P. Thảo Điền
                            Q.2, Tp. Hồ Chí Minh
                          </li>
                          <li>
                            <span>Điện thoại:</span> 028.3636 2970
                          </li>
                          <li>
                            <span>Thời gian mở cửa:</span> 10:00 ~ 22:00 (Thứ
                            2-Thứ 6) 09:30 ~ 22:00 (Thứ 7, CN &amp; các ngày lễ)
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresRes;
