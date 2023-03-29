import React from "react";

const Order = () => {
  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <a href="#st">Trang chủ</a>
                </li>
                <li>
                  <a href="#st">Tài Khoản Của Tôi</a>
                </li>
                <li title="Trang Hiện Tại">
                  <strong>Đơn hàng</strong>
                </li>
              </ol>
            </div>
            <div className="clearBoth">
              <div className="myshpp-left">
                <div className="customer_sidenav">
                  <h3 className="customer_h3">
                    <a href="#st" className="on">
                      Tài khoản của tôi
                    </a>
                  </h3>
                  <ul className="xans-element- xans-myshop xans-myshop-main my_ul">
                    <li className="my_li1">
                      <a href="#st">
                        Đơn hàng
                        <span className="xans-element- xans-myshop xans-myshop-orderhistorytab">
                          (<span id="xans_myshop_total_orders">0</span>)
                        </span>
                      </a>
                    </li>
                    <li className="my_li2">
                      <a href="#st">Sổ địa chỉ</a>
                    </li>
                    <li className="my_li3">
                      <a href="#st">
                        Danh sách yêu thích
                        <span className="count">
                          (
                          <span className="xans_myshop_main_interest_prd_cnt">
                            0
                          </span>
                          )
                        </span>
                      </a>
                    </li>
                    <li className="my_li4">
                      <a href="#st">Đã xem</a>
                    </li>
                    <li className="my_li5">
                      <a href="#st">Mã giảm giá</a>
                    </li>
                    <li style={{ display: "none" }} className="my_li6">
                      <a href="#st">Nhận xét của tôi</a>
                    </li>
                    <li className="my_li7">
                      <a href="#st">Thông tin tài khoản</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="myshpp-right">
                <div className="titleArea">
                  <h2>Đơn hàng</h2>
                </div>
                <div className="xans-element- xans-myshop xans-myshop-orderhistorytab ec-base-tab">
                  <ul className="menu">
                    <li className="tab_class">
                      <a href="#st">Lịch sử đặt hàng</a>
                    </li>
                    <li className="tab_class_cs">
                      <a href="#st">Lịch sử hủy/đổi/trả</a>
                    </li>
                    <li className="tab_class_past">
                      <a href="#st">Lịch sử đặt hàng trong quá khứ</a>
                    </li>
                    <li className="tab_class_old displaynone">
                      <a href="#st">Đơn hàng nền tảng cũ</a>
                    </li>
                  </ul>
                </div>
                <form
                  method="GET"
                  id="OrderHistoryForm"
                  name="OrderHistoryForm"
                >
                  <div className="xans-element- xans-myshop xans-myshop-orderhistoryhead">
                    <fieldset className="ec-base-boxB">
                      <legend>Khoảng Thời Gian</legend>
                      <div className="stateSelect">
                        <select
                          id="order_status"
                          name="order_status"
                          className="fSelect"
                        >
                          <option value="all">
                            Tình trạng xử lý tất cả đơn hàng
                          </option>
                          <option value="shipped_before">
                            Trước thanh toán
                          </option>
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
                      <ul className="orderhistoryhead-ul">
                        <li>Nhấn vào mã đơn hàng để xem chi tiết đơn hàng.</li>
                        <li>
                          Yêu cầu Hủy/Đổi/Trả có thể được chấp nhận trong vòng 7
                          ngày Theo ngày hoàn tất đặt hàng.
                        </li>
                      </ul>
                      <div className="period">
                        <ul className="period-ul">
                          <li>
                            <a href="#none" className="btnNormal">
                              1 Tuần
                            </a>
                          </li>
                          <li>
                            <a href="#none" className="btnNormal">
                              1 Tháng
                            </a>
                          </li>
                          <li>
                            <a href="#none" className="btnNormal">
                              3 Tháng
                            </a>
                          </li>
                          <li>
                            <a href="#none" className="btnNormal">
                              6 Tháng
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className="form_date">
                        <input
                          id="history_start_date"
                          name="history_start_date"
                          className="fText"
                          defaultValue="2022-11-25"
                          type="text"
                        />
                        <button type="button" className="ui-datepicker-trigger">
                          <img
                            src="assets/imgs/ico_cal.gif"
                            alt="..."
                            title="..."
                          />
                        </button>
                      </span>
                      ~
                      <span className="form_date">
                        <input
                          id="history_end_date"
                          name="history_end_date"
                          className="fText"
                          defaultValue="2023-02-23"
                          type="text"
                        />
                        <button type="button" className="ui-datepicker-trigger">
                          <img
                            src="assets/imgs/ico_cal.gif"
                            alt="..."
                            title="..."
                          />
                        </button>
                      </span>
                      <span className="form_date-right">
                        <input
                          alt="Tìm kiếm"
                          id="order_search_btn"
                          type="image"
                          src="assets/imgs/btn_search.gif"
                        />
                      </span>
                    </fieldset>
                  </div>
                  <input id="mode" name="mode" defaultValue type="hidden" />
                  <input id="term" name="term" defaultValue type="hidden" />
                </form>
                <div className="xans-element- xans-myshop xans-myshop-orderhistorylistitem ec-base-table typeList">
                  <table border={1}>
                    <caption>Thông tin sản phẩm đặt hàng</caption>
                    <thead>
                      <tr>
                        <th className="historylist1" scope="col">
                          Sản phẩm
                        </th>
                        <th className="historylist2" scope="col">
                          Số tiền
                        </th>
                        <th className="historylist3" scope="col">
                          Tình Trạng
                        </th>
                      </tr>
                    </thead>
                    <tbody className="center">
                      <tr className="xans-record-">
                        <td colSpan={3}>
                          <div className="number">
                            <a
                              href="detail.html?order_id=20230317-0000019&page=1&history_start_date=2022-12-17&history_end_date=2023-03-17"
                              className="line on"
                            >
                              <strong>Mã đơn hàng | </strong>20230317-0000019
                            </a>
                            <strong>Ngày đặt | </strong>17-03-2023
                            <a
                              href="#none"
                              className="btnNormal displaynone"
                              onclick="OrderHistory.orderCancel('20230317-0000019')"
                            >
                              Hủy Đơn Hàng
                            </a>
                            <a
                              href="cancel.html?order_id=20230317-0000019"
                              className="btnNormal displaynone"
                            >
                              Hủy đơn
                            </a>
                            <a
                              href="exchange.html?order_id=20230317-0000019"
                              className="btnNormal displaynone"
                            >
                              Yêu Cầu Đổi Hàng
                            </a>
                            <a
                              href="return.html?order_id=20230317-0000019"
                              className="btnNormal displaynone"
                            >
                              Yêu Cầu Trả Hàng
                            </a>
                          </div>
                          <div className="wrap-historylist">
                            <div className="historylist1">
                              <div className="thumb">
                                <a href="/product/detail.html?product_no=732&cate_no=50">
                                  <img
                                    src="./assets/imgs/8dfec87747c1e9f29597bed7bcd22185.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product left top">
                                <strong className="name">
                                  <a
                                    href="/product/khăn-giấy-ướt-cho-bé-dùng-cho-tay-và-miệng-locklock-baby-wipes-for-han/732/category/50/"
                                    className="ec-product-name"
                                  >
                                    Khăn giấy ướt cho bé dùng cho tay và miệng
                                    Lock&amp;Lock Baby Wipes for hands and mouth
                                  </a>
                                </strong>
                                <div className="option">
                                  [Option: 20 miếng - ETM248 (+9,000)]
                                </div>
                              </div>
                            </div>
                            <div className="historylist2">
                              <strong>đ25,000</strong>
                              <div className="displaynone" />
                            </div>
                            <div className="historylist3">
                              <div className="state">
                                <p className="txtEmB">
                                  Chuẩn bị giao hàng
                                  <br />
                                  (Trước thanh toán Trả sau)
                                </p>
                                <p className="displaynone">
                                  <a href="#none" className="line" onclick>
                                    []
                                  </a>
                                </p>
                                <a
                                  href="/board/product/write.html?board_no=4&product_no=732&order_id=20230317-0000019"
                                  className="btnSubmit displaynone"
                                >
                                  Đánh giá
                                </a>
                                <a
                                  href="#none"
                                  className="btnNormal displaynone"
                                  onclick="OrderHistory.withdraw('C','20230317-0000019|732|000B|21725','F', 'F', 'F', '' , '')"
                                >
                                  Rút Yêu Cầu Hủy Đơn
                                </a>
                                <a
                                  href="#none"
                                  className="btnNormal displaynone"
                                  onclick="OrderHistory.withdraw('E','20230317-0000019|732|000B|21725','F', 'F', 'F', '' , '')"
                                >
                                  Rút Yêu Cầu Đổi Hàng
                                </a>
                                <a
                                  href="#none"
                                  className="btnNormal displaynone"
                                  onclick="OrderHistory.withdraw('R','20230317-0000019|732|000B|21725','F', 'F', 'F', '' , '')"
                                >
                                  Rút Yêu Cầu Trả Hàng
                                </a>
                              </div>
                              <div>
                                <p className="displaynone">
                                  <a
                                    href="#none"
                                    className="btnNormal"
                                    onclick="OrderHistory.getDetailInfo('?product_no=732&cate_no=50&order_id=20230317-0000019&ord_item_code=20230317-0000019-01');"
                                  >
                                    Chi tiết
                                  </a>
                                </p>
                                <p className>-</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="xans-record-">
                        <td colSpan={3}>
                          <div className="number displaynone">
                            <a
                              href="detail.html?order_id=20230317-0000019&page=1&history_start_date=2022-12-17&history_end_date=2023-03-17"
                              className="line on"
                            >
                              <strong>Mã đơn hàng | </strong>20230317-0000019
                            </a>
                            <strong>Ngày đặt | </strong>17-03-2023
                            <a
                              href="#none"
                              className="btnNormal displaynone"
                              onclick="OrderHistory.orderCancel('20230317-0000019')"
                            >
                              Hủy Đơn Hàng
                            </a>
                            <a
                              href="cancel.html?order_id=20230317-0000019"
                              className="btnNormal displaynone"
                            >
                              Hủy đơn
                            </a>
                            <a
                              href="exchange.html?order_id=20230317-0000019"
                              className="btnNormal displaynone"
                            >
                              Yêu Cầu Đổi Hàng
                            </a>
                            <a
                              href="return.html?order_id=20230317-0000019"
                              className="btnNormal displaynone"
                            >
                              Yêu Cầu Trả Hàng
                            </a>
                          </div>
                          <div className="wrap-historylist">
                            <div className="historylist1">
                              <div className="thumb">
                                <a href="/product/detail.html?product_no=732&cate_no=50">
                                  <img
                                    src="./assets/imgs/8dfec87747c1e9f29597bed7bcd22185.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product left top">
                                <strong className="name">
                                  <a
                                    href="/product/khăn-giấy-ướt-cho-bé-dùng-cho-tay-và-miệng-locklock-baby-wipes-for-han/732/category/50/"
                                    className="ec-product-name"
                                  >
                                    Khăn giấy ướt cho bé dùng cho tay và miệng
                                    Lock&amp;Lock Baby Wipes for hands and mouth
                                  </a>
                                </strong>
                                <div className="option">
                                  [Option: 10 miếng - ETM249]
                                </div>
                              </div>
                            </div>
                            <div className="historylist2">
                              <strong>đ16,000</strong>
                              <div className="displaynone" />
                            </div>
                            <div className="historylist3">
                              <div className="state">
                                <p className="txtEmB">
                                  Chuẩn bị giao hàng
                                  <br />
                                  (Trước thanh toán Trả sau)
                                </p>
                                <p className="displaynone">
                                  <a href="#none" className="line" onclick>
                                    []
                                  </a>
                                </p>
                                <a
                                  href="/board/product/write.html?board_no=4&product_no=732&order_id=20230317-0000019"
                                  className="btnSubmit displaynone"
                                >
                                  Đánh giá
                                </a>
                                <a
                                  href="#none"
                                  className="btnNormal displaynone"
                                >
                                  Rút Yêu Cầu Hủy Đơn
                                </a>
                                <a
                                  href="#none"
                                  className="btnNormal displaynone"
                                >
                                  Rút Yêu Cầu Đổi Hàng
                                </a>
                                <a
                                  href="#none"
                                  className="btnNormal displaynone"
                                >
                                  Rút Yêu Cầu Trả Hàng
                                </a>
                              </div>
                              <div>
                                <p className="displaynone">
                                  <a href="#none" className="btnNormal">
                                    Chi tiết
                                  </a>
                                </p>
                                <p className>-</p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="message displaynone">
                    Bạn không có lịch sử đặt hàng.
                  </p>
                </div>
                <div className="xans-element- xans-myshop xans-myshop-orderhistorypaging ec-base-paginate">
                  <a href="#st" className="first">
                    <i className="fa-solid fa-angles-left" />
                  </a>
                  <a href="#st">
                    <i className="fa-solid fa-angle-left" />
                  </a>
                  <ol>
                    <li className="xans-record-">
                      <a href="#st" className="this">
                        1
                      </a>
                    </li>
                  </ol>
                  <a href="#st">
                    <i className="fa-solid fa-angle-right" />
                  </a>
                  <a href="#st" className="last">
                    <i className="fa-solid fa-angles-right" />
                  </a>
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
          <span>
            <a href="#st">0</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <a href="#st">Đã Xem Gần Đây</a>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <a href="#st">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
            </li>
            <li className="displaynone xans-record-">
              <a href="#st">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
            </li>
          </ul>
          <p className="player">
            <img
              src="assets/imgs/btn_recent_prev.gif"
              alt="Prev"
              className="prev"
            />
            <img
              src="assets/imgs/btn_recent_next.gif"
              alt="Next"
              className="next"
            />
          </p>
        </div>
        <p className="pageTop">
          <a href="#header" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Order;
