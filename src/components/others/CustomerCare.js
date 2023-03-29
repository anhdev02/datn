import React from 'react'

const CustomerCare = () => {
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
                    <strong>Chăm sóc khách hàng</strong>
                  </li>
                </ol>
              </div>
              <div className="customer_container">
                <div className="customer_width">
                  <div className="customer_sidenav">
                    <h3 className="customer_h3">
                      <a href="/customer.html" className="on">Chăm sóc khách hàng</a>
                    </h3>
                    <a href="/stores.html">Hệ thống cửa hàng</a>
                    <a href="/policys.html">Chính sách &amp; Quy định chung</a>
                    <a href="/warranty_policy.html">Chính sách bảo hành</a>
                    <div className="customer_top">
                      <img src="assets/imgs/tel_icon.png" alt="" /><span className="customer_bold">028-5413 5750 (425)</span>
                      <br />ngan.dnt@locknlock.com
                    </div>
                    <div className="customer_bottom">
                      Week : 09:00 - 17:00
                      <br />Lunch : 12:00 - 13:00 <br />Sat.Sun.Holiday : OFF
                    </div>
                  </div>
                  <div className="customer_text">
                    <h3>Trung tâm chăm sóc khách hàng</h3>
                    <span><span className="customer_bold">Vị trí</span> 77 Hoàng Văn
                      Thái. Phường Tân Phú , Quận 7, TP HCM</span>
                    <div className="customer_map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0574050737687!2d106.7200313152601!3d10.73005596298086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f89c87438ed%3A0xff03194a4e31f2e9!2zNzcgSG_DoG5nIFbEg24gVGjDoWksIFTDom4gUGjDuiwgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1649235609654!5m2!1sen!2s" width={860} height={550} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="layout" />
        </div>
        <hr className="layout" />
        <div id="quick">
          <div className="xans-element- xans-layout xans-layout-orderbasketcount">
            <strong>Giỏ Hàng</strong>
            <span><a href="/order/basket.html">0</a> Sản Phẩm</span>
          </div>
          <div className="xans-element- xans-layout xans-layout-productrecent">
            <h2>
              <a href="/product/recent_view_product.html">Đã Xem Gần Đây</a>
            </h2>
            <ul>
              <li className="xans-record-">
                <a href="/product/detail.html?product_no=732&cate_no=50&display_group=1"><img src="./assets/imgs/acaf2d98c89581ad28490f4c3828637c.jpg" alt="" /><span>Khăn g</span></a>
              </li>
              <li className="xans-record-">
                <a href="/product/detail.html?product_no=424&cate_no=111&display_group=1"><img src="assets/imgs/0424eea678a99ff8c3c4012b4847ddb0.jpg" alt="" /><span>Ức vịt</span></a>
              </li>
              <li className="xans-record-">
                <a href="/product/detail.html?product_no=421&cate_no=111&display_group=1"><img src="assets/imgs/3fada5ea33bd743262dde65885ea635f.jpg" alt="" /><span>Ba chỉ</span></a>
              </li>
              <li className="xans-record-">
                <a href="/product/detail.html?product_no=725&cate_no=50&display_group=1"><img src="assets/imgs/59ad09a9ae30d0aa19bdbbdd11daed74.jpg" alt="" /><span>Cây la</span></a>
              </li>
              <li className="displaynone xans-record-">
                <a href="/product/detail.html?product_no=646&cate_no=55&display_group=1"><img src="assets/imgs/643a83fcce439db32ecfd544e32fd5d6.jpg" alt="" /><span>Lò nướng</span></a>
              </li>
              <li className="displaynone xans-record-">
                <a href="/product/detail.html?product_no=706&cate_no=44&display_group=1"><img src="assets/imgs/cd3dcabef14003975986044c93533f8e.jpg" alt="" /><span>Bộ hộp</span></a>
              </li>
              <li className="displaynone xans-record-">
                <a href="/product/detail.html?product_no=657&cate_no=46&display_group=1"><img src="assets/imgs/6d403405e93028f8603bad551c5e4445.jpg" alt="" /><span>Nồi ch</span></a>
              </li>
              <li className="displaynone xans-record-">
                <a href="/product/detail.html?product_no=686&cate_no=29&display_group=1"><img src="assets/imgs/bd93a5771cd2d6261bc294d571112351.jpg" alt="" /><span>Bình g</span></a>
              </li>
              <li className="displaynone xans-record-">
                <a href="/product/detail.html?product_no=658&cate_no=43&display_group=1"><img src="assets/imgs/b6ab0a49783cdaa7f25f5106da710655.jpg" alt="" /><span>Máy xa</span></a>
              </li>
            </ul>
            <p className="player">
              <img src="assets/imgs/btn_recent_prev.gif" alt="Prev" className="prev" style={{cursor: 'pointer'}} /><img src="assets/imgs/btn_recent_next.gif" alt="Next" className="next" style={{cursor: 'pointer'}} />
            </p>
          </div>
          <p className="pageTop">
            <a href="#header" title="Back to Top"><img src="assets/imgs/btn_top1.gif" alt="Top" /></a>
          </p>
        </div>
      </div>
  )
}

export default CustomerCare