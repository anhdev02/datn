import React from 'react'

const Policy = () => {
  return (
    <div id="wrap">
        <div id="container">
          <div id="contents">
            <div className="root_width">
              <div className="path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li><a href="/">Trang Chủ</a></li>
                  <li title="Current Page">
                    <strong>Chính sách bảo hành</strong>
                  </li>
                </ol>
              </div>
              <div className="customer_sidenav">
                <h3 className="customer_h3">
                  <a href="/customer.html">Chăm sóc khách hàng</a>
                </h3>
                <a href="/stores.html">Hệ thống cửa hàng</a>
                <a href="/policys.html">Chính sách &amp; Quy định chung</a>
                <a href="/warranty_policy.html" className="on">Chính sách bảo hành</a>
                <div className="customer_top">
                  <img src="./assets/imgs/tel_icon.png" alt="" /><span className="customer_bold">028-5413 5750 (425)</span>
                  <br />ngan.dnt@locknlock.com
                </div>
                <div className="customer_bottom">
                  Week : 09:00 - 17:00
                  <br />Lunch : 12:00 - 13:00 <br />Sat.Sun.Holiday : OFF
                </div>
              </div>
              <div className="policy_container">
                <div className="policy_width">
                  <h3 className="policy_h3">Chính sách bảo hành</h3>
                  <img src="./assets/imgs/Warranty-Policy-20230111_860.jpg" alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Policy