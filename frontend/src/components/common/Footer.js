import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="inner">
        <div className="xans-element- xans-layout xans-layout-footer">
          <ul className="utilMenu clearBoth">
            <li>
              <Link to={"/aboutus"}>Về Chúng Tôi</Link>
            </li>
            <li>
              <Link to="/policy">Chính sách bảo hành</Link>
            </li>
            <li>
              <Link to="/termsconditions">Điều Khoản và Điều Kiện</Link>
            </li>
            <li>
              <Link to="/customercare">Chăm sóc khách hàng </Link>
            </li>
            <li>
              <Link to="/stores">Cửa hàng </Link>
            </li>
            <li>
              <a href="#" className="verti_img">
                <img
                  src="https://locknlock-d1171.web.app/assets/imgs/yt_1.png"
                  alt="Youtube"
                />
              </a>
            </li>
            <li>
              <a href="#" className="verti_img">
                <img
                  src="https://locknlock-d1171.web.app/assets/imgs/fb_1.png"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#" className="verti_img">
                <img
                  src="https://locknlock-d1171.web.app/assets/imgs/it_1.png"
                  alt="Instargam"
                />
              </a>
            </li>
          </ul>
          <div className="foot_flex">
            <div className="foot-box foot-box1">
              <ul>
                <li>
                  <span>Tên doanh nghiệp:</span> Lock&amp;Lock Mall
                </li>
                <li>
                  <span>CEO:</span> MC-AN
                </li>
                <li>
                  <span>Địa chỉ:</span> Số 1, P. Tăng Nhơn Phú B, TP. Thủ Đức,
                  TP.HCM
                </li>
                <li>
                  <span>Quản lý thông tin cá nhân:</span> MC-AN
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box2">
              <ul>
                <li>
                  <span>Trung tâm chăm sóc:</span> (+84) 346.454.330
                </li>
                <li>
                  <span>Các ngày trong tuần:</span> 09:00 - 17:00
                </li>
                <li>
                  <span>Nghỉ trưa:</span> 12:00 - 13:00
                </li>
                <li>
                  <span>Thứ 7, CN, ngày lễ:</span> Không làm việc
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box3">
              <ul>
                <li>
                  <span>Liên hệ:</span> (+84) 903.353.256
                </li>
                <li>
                  <span>Email:</span> datnkhoa44@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="div_onlinegovvn">
            <img
              src="https://locknlock-d1171.web.app/assets/imgs/onlinegovvn%20sticker.png"
              alt=""
            />
          </div>
          <p className="copyright">
            Copyright © <strong>Lock&amp;Lock Mall</strong>. All rights
            reserved.
          </p>
          <p className="hosting displaynone">
            <img
              src="https://locknlock-d1171.web.app/assets/imgs/logo_cafe24.png"
              alt="hosting by cafe24 corporation"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
