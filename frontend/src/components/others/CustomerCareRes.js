import React from "react";

const CustomerCareRes = () => {
  return (
    <div id="contents">
      <div className="root_width mobile_width">
        <div style={{ padding: "20px" }} />
        <div className="customer_container">
          <div className="customer_width">
            <div className="customer">
              <h3>Trung tâm chăm sóc khách hàng</h3>
              <span>
                <span className="customer_bold">Vị trí</span>{" "}
                <span>
                  <span className="customer">
                    77 Hoàng Văn Thái. Phường Tân Phú , Quận 7, TP HCM
                  </span>
                  <div className="customer_map">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0574050737687!2d106.7200313152601!3d10.73005596298086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f89c87438ed%3A0xff03194a4e31f2e9!2zNzcgSG_DoG5nIFbEg24gVGjDoWksIFTDom4gUGjDuiwgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1649235609654!5m2!1sen!2s"
                      width={860}
                      height={550}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="customer_bottom">
          <img
            src="https://locknlock-d1171.web.app/assets/imgs/tel_icon.png"
            alt=""
          />
          <span className="customer_bold">028-5413 5756 (425)</span>
          <br />
          ngan.dnt@locknlock.com
          <br />
          <br />
          Week : 09:00 - 17:00
          <br />
          Lunch : 12:00 - 13:00
          <br />
          Sat.Sun.Holiday : OFF
        </div>
      </div>
    </div>
  );
};

export default CustomerCareRes;
