import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="inner">
        <div className="xans-element- xans-layout xans-layout-footer">
          <ul className="utilMenu clearBoth">
            <li>
              <a href="#">Về Chúng Tôi</a>
            </li>
            <li>
              <a href="/#.html">Chính sách bảo hành</a>
            </li>
            <li>
              <a href="#">Điều Khoản và Điều Kiện</a>
            </li>
            <li>
              <a href="#">Chăm sóc khách hàng </a>
            </li>
            <li>
              <a href="#">Cửa hàng </a>
            </li>
            <li>
              <a href="#" className="verti_img">
                <img src="assets/imgs/yt_1.png" alt="Youtube" />
              </a>
            </li>
            <li>
              <a href="#" className="verti_img">
                <img src="assets/imgs/fb_1.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="verti_img">
                <img src="assets/imgs/it_1.png" alt="Instargam" />
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
                  <span>C/S Center:</span> 028 5413 5750 (425)
                </li>
                <li>
                  <span>Week days:</span> 09:00 - 17:00
                </li>
                <li>
                  <span>Lunch:</span> 12:00 - 13:00
                </li>
                <li>
                  <span>Sat, Sun, Holiday:</span> Off
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box3">
              <ul>
                <li>
                  <span>Liên hệ:</span> 028 5413 5750 (425)
                </li>
                <li>
                  <span>Email:</span> ngan.dnt@locknlock.com
                </li>
              </ul>
            </div>
          </div>
          <div className="div_onlinegovvn">
            <img src="assets/imgs/onlinegovvn%20sticker.png" alt="" />
          </div>
          <p className="copyright">
            Copyright © <strong>Lock&amp;Lock Mall</strong>. All rights
            reserved.
          </p>
          <p className="hosting displaynone">
            <img
              src="assets/imgs/logo_cafe24.png"
              alt="hosting by cafe24 corporation"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
