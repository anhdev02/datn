import React from 'react'

const OrderRes = () => {
  return (
    <div id="contents">
        <div className="root_width myshop_width">
          <form method="GET" id="OrderHistoryForm" name="OrderHistoryForm">
            <div className="xans-element- xans-myshop xans-myshop-orderhistoryhead Myshop_section">
              <fieldset>
                <legend>Khoảng Thời Gian</legend>
                <h2>Tìm đơn hàng</h2>
                <div className="stateSelect">
                  <select id="order_status" name="order_status" className="fSelect">
                    <option value="all">
                      Tình trạng xử lý tất cả đơn hàng
                    </option>
                    <option value="shipped_before">Trước thanh toán</option>
                    <option value="shipped_standby">
                      Chuẩn bị vận chuyển
                    </option>
                    <option value="shipped_begin">Đang vận chuyển</option>
                    <option value="shipped_complate">
                      Hoàn tất vận chuyển
                    </option>
                    <option value="order_cancel">Hủy</option>
                    <option value="order_exchange">Đổi hàng</option>
                    <option value="order_return">Trả hàng</option>
                  </select>
                </div>
                <div className="ec-base-button gColumn">
                  <a href="#none" className="btnNormal">1 Tháng</a>
                  <a href="#none" className="btnNormal selected">3 Tháng</a>
                  <a href="#none" className="btnNormal">6 Tháng</a>
                  <a href="#none" className="btnBasic eDataSet">Tuỳ Chỉnh</a>
                </div>
                <div id="dataSearch">
                  <input id="history_start_date" name="history_start_date" className="fText" readOnly="readonly" size={10} defaultValue="2022-12-16" type="text" />
                  ~
                  <input id="history_end_date" name="history_end_date" className="fText" readOnly="readonly" size={10} defaultValue="2023-03-16" type="text" />
                  <input alt="Tìm kiếm" id="order_search_btn" type="image" src="./assets/imgs/btn_search_mobile.png" />
                </div>
              </fieldset>
            </div>
          </form>
          <div className="xans-element- xans-myshop xans-myshop-orderhistorylistitem Myshop_section">
            <div className="orderList displaynone">
              <div className="order order_borderdisplaynone">
                <h3 className="displaynone">
                  <span className="number" title="Order No."><a href="detail.html">Mã đơn hàng | </a></span>
                </h3>
                <p className="displaynone">
                  <span className="date" title="Order Date" />
                </p>
                <div className="ec-base-prdInfo">
                  <div className="prdBox">
                    <div className="thumbnail">
                      <a href="/product/detail.html"><img src width={71} height={71} alt="" /></a>
                    </div>
                    <div className="description">
                      <strong className="prdName" title="Product" />
                      <ul className="info">
                        <li>
                          <span className="price" title="Price"><strong /><span className="refer displaynone"> </span></span>
                          <span className="ec-base-qty" title="Quantity"><strong /> sản phẩm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="option displaynone" />
                  <ul className="xans-element- xans-myshop xans-myshop-optionset option">
                    <li className>
                      <div className="name">
                        <strong className="optionDesc" /> ( sản phẩm)
                      </div>
                    </li>
                  </ul>
                  <div className="prdFoot" title="Order Status">
                    <div className="gLeft">
                      <span className="store" />
                      <span className="addition displaynone"><strong className="cancel"><a href="order_detail_cs.html" target="_blank">[Thông tin chi tiết]</a></strong></span>
                    </div>
                    <div className="gRight">
                      <span className="displaynone"><a href="#none" className="line btnNormal mini">Theo Dõi Đơn Hàng</a></span>
                      <a href="/board/product/write.html" className="btnNormal mini displaynone">Đánh Giá</a>
                      <a href="#none" className="btnNormal mini displaynone">Rút Lại Yêu Cầu</a>
                      <a href="#none" className="btnNormal mini displaynone">Rút Lại Yêu Cầu</a>
                      <a href="#none" className="btnNormal mini displaynone">Rút Lại Yêu Cầu</a>
                    </div>
                  </div>
                  <div className="request displaynone">
                    <a href="#none" className="displaynone btnNormal">Huỷ Đơn Hàng</a>
                    <a href="cancel.html" className="displaynone btnNormal">Yêu Cầu Hủy</a>
                    <a href="exchange.html" className="displaynone btnNormal">Yêu Cầu Đổi Hàng</a>
                    <a href="return.html" className="displaynone btnNormal">Yêu Cầu Trả Hàng</a>
                  </div>
                </div>
                <a href="detail.html" className="btnDetail displaynone" />
              </div>
              <div className="order order_borderdisplaynone">
                <h3 className="displaynone">
                  <span className="number" title="Order No."><a href="detail.html">Mã đơn hàng | </a></span>
                </h3>
                <p className="displaynone">
                  <span className="date" title="Order Date" />
                </p>
                <div className="ec-base-prdInfo">
                  <div className="prdBox">
                    <div className="thumbnail">
                      <a href="/product/detail.html"><img src width={71} height={71} alt="" /></a>
                    </div>
                    <div className="description">
                      <strong className="prdName" title="Product" />
                      <ul className="info">
                        <li>
                          <span className="price" title="Price"><strong /><span className="refer displaynone"> </span></span>
                          <span className="ec-base-qty" title="Quantity"><strong /> sản phẩm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="xans-element- xans-myshop xans-myshop-optionset option">
                    <li className>
                      <div className="name">
                        <strong className="optionDesc" /> ( sản phẩm)
                      </div>
                    </li>
                  </ul>
                  <div className="prdFoot" title="Order Status">
                    <div className="gLeft">
                      <span className="store" />
                      <span className="addition displaynone"><strong className="cancel"><a href="order_detail_cs.html" target="_blank">[Thông tin chi tiết]</a></strong></span>
                    </div>
                    <div className="gRight">
                      <span className="displaynone"><a href="#none" className="line btnNormal mini">Theo Dõi Đơn Hàng</a></span>
                      <a href="/board/product/write.html" className="btnNormal mini displaynone">Đánh Giá</a>
                      <a href="#none" className="btnNormal mini displaynone">Rút Lại Yêu Cầu</a>
                      <a href="#none" className="btnNormal mini displaynone">Rút Lại Yêu Cầu</a>
                      <a href="#none" className="btnNormal mini displaynone">Rút Lại Yêu Cầu</a>
                    </div>
                  </div>
                  <div className="request displaynone">
                    <a href="#none" className="displaynone btnNormal">Huỷ Đơn Hàng</a>
                    <a href="cancel.html" className="displaynone btnNormal">Yêu Cầu Hủy</a>
                    <a href="exchange.html" className="displaynone btnNormal">Yêu Cầu Đổi Hàng</a>
                    <a href="return.html" className="displaynone btnNormal">Yêu Cầu Trả Hàng</a>
                  </div>
                </div>
                <a href="detail.html" className="btnDetail displaynone" />
              </div>
            </div>
            <p className="empty">Bạn không có lịch sử đặt hàng.</p>
          </div>
          <div className="xans-element- xans-myshop xans-myshop-orderhistorypaging displaynone ec-base-paginate">
            <a href="?page=1&history_start_date=2022-12-16&history_end_date=2023-03-16&past_year=2022" className="btnPrev"><i className="fa-solid fa-angle-left" /></a>
            <ol>
              <li className="xans-record-">
                <a href="?page=1&history_start_date=2022-12-16&history_end_date=2023-03-16&past_year=2022" className="this">1</a>
              </li>
            </ol>
            <a href="?page=1&history_start_date=2022-12-16&history_end_date=2023-03-16&past_year=2022" className="btnNext"><i className="fa-solid fa-angle-right" /></a>
          </div>
        </div>
      </div>
  )
}

export default OrderRes