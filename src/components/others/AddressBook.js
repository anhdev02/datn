import React from 'react'

const AddressBook = () => {
  return (
    <div id="wrap">
    <div id="container">
      <div id="contents">
        <div className="root_width">
          <div className="path">
            <span>Trang Hiện Tại</span>
            <ol>
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/myshop/index.html">Tài khoản của tôi</a></li>
              <li title="Current Page"><strong>Danh sách địa chỉ</strong></li>
            </ol>
          </div>
          <div className="clearBoth">
            <div className="myshpp-left">
              <div className="customer_sidenav">
                <h3 className="customer_h3">
                  <a href="/myshop/index.html" className="on">Tài khoản của tôi</a>
                </h3>
                <ul className="xans-element- xans-myshop xans-myshop-main my_ul">
                  <li className="my_li1">
                    <a href="/myshop/order/list.html">Đơn hàng<span className="xans-element- xans-myshop xans-myshop-orderhistorytab">(<span id="xans_myshop_total_orders">0</span>)
                      </span>
                    </a>
                  </li>
                  <li className="my_li2">
                    <a href="/myshop/addr/list.html">Sổ địa chỉ</a>
                  </li>
                  <li className="my_li3">
                    <a href="/myshop/wish_list.html">Danh sách yêu thích
                      <span className="count">(<span className="xans_myshop_main_interest_prd_cnt">0</span>)</span></a>
                  </li>
                  <li className="my_li4">
                    <a href="/product/recent_view_product.html">Đã xem</a>
                  </li>
                  <li className="my_li5">
                    <a href="/myshop/coupon/coupon.html">Mã giảm giá</a>
                  </li>
                  <li style={{display: 'none'}} className="my_li6">
                    <a href="/stores.html">Nhận xét của tôi</a>
                  </li>
                  <li className="my_li7">
                    <a href="/member/modify.html">Thông tin tài khoản</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="myshpp-right">
              <div className="titleArea">
                <h2>Danh sách địa chỉ</h2>
                <p>Vui lòng thêm các địa chỉ nhận hàng thường xuyên.</p>
                <span className="gRight">
                  <a href="register.html" className="btnBlack">Thêm địa chỉ mới</a>
                </span>
              </div>
              <form id="frmAddr" method="post">
                <input id="__address_addr1" name="__address_addr1" type="hidden" />
                <input id="__city_name" name="__city_name" type="hidden" />
                <input id="__state_name" name="__state_name" type="hidden" />
                <input id="__isRuleBasedAddrForm" name="__isRuleBasedAddrForm" type="hidden" />
                <input id="__use_foreign_country_list" name="__use_foreign_country_list" defaultValue="T" type="hidden" />
                <input id="__ma_rcv_contry_code" name="__ma_rcv_contry_code" type="hidden" />
                <input id="__country" name="__country" type="hidden" />
                <input id="__province" name="__province" type="hidden" />
                <input id="__city" name="__city" defaultValue type="hidden" />
                <input id="__district" name="__district" type="hidden" />
                <input id="is_display_phone" name="is_display_phone" type="hidden" />
                <input id="is_display_mobile" name="is_display_mobile" type="hidden" />
                <input id="sUseCountryNumberFlag" name="sUseCountryNumberFlag" defaultValue="T" type="hidden" />
                <div className="xans-element- xans-myshop xans-myshop-addrlist">
                  <div className="ec-base-table typeList">
                    <table border={1} className="addr-table">
                      <caption>
                        Danh Sách Địa Chỉ
                      </caption>
                      <colgroup>
                        <col style={{width: '27px'}} />
                        <col style={{width: '120px'}} />
                        <col style={{width: '120px'}} />
                        <col style={{width: '150px'}} />
                        <col style={{width: 'auto'}} />
                        <col style={{width: '76px'}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">
                            <span className="displaynone"><input id="allCheck" defaultValue type="checkbox" /></span>
                          </th>
                          <th scope="col">Nhãn Địa Chỉ</th>
                          <th scope="col">Hộ tên người nhận</th>
                          <th scope="col">Địa chỉ</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Quản lý</th>
                        </tr>
                      </thead>
                      <tbody className="displaynone center">
                        <tr className>
                          <td />
                          <td className="td_rcv_title">
                            <span className="lock-blue displaynone">Địa chỉ mặc định</span>
                          </td>
                          <td>
                            <p />
                            <p />
                          </td>
                          <td className="left">
                            <ul className="addr-ul">
                              <li />
                              <li />
                            </ul>
                          </td>
                          <td><p /></td>
                          <td>
                            <a href="modify.html?ma_idx=" className="btnNormal">Sửa</a>
                          </td>
                        </tr>
                        <tr className>
                          <td />
                          <td className="td_rcv_title">
                            <span className="lock-blue displaynone">Địa chỉ mặc định</span>
                          </td>
                          <td>
                            <p />
                            <p />
                          </td>
                          <td className="left">
                            <ul className="addr-ul">
                              <li />
                              <li />
                            </ul>
                          </td>
                          <td><p /></td>
                          <td>
                            <a href="modify.html?ma_idx=" className="btnNormal">Sửa</a>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className>
                        <tr>
                          <td colSpan={7} className="message">
                            Sổ địa chỉ của bạn hiện đang trống.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="ec-base-button">
                    <span className="gLeft displaynone">
                      <a href="#none" className="btnNormal sizeS">Xóa Địa Chỉ Đã Chọn</a>
                    </span>
                    <span className="gRight" style={{display: 'none'}}>
                      <a href="register.html" className="btnSubmitFix sizeS">Thêm</a>
                    </span>
                  </div>
                </div>
              </form>
              <div className="ec-base-help">
                <h3>Về Sổ Địa Chỉ</h3>
                <div className="inner">
                  <ol>
                    <li className="item1">
                      Bạn có thể thêm tối đa 10 địa chỉ. Nếu bạn không thêm
                      các địa chỉ, sổ địa chỉ của bạn sẽ tự động cập nhật địa
                      chỉ nhận hàng của đơn hàng gần nhất.
                    </li>
                    <li className="item2">
                      Nếu bạn không muốn cập nhật tự động, mở Danh Sách Địa
                      Chỉ và thay đổi cài đặt cập nhật tự động thành “Cố
                      định”.
                    </li>
                    <li className="item3">
                      Để cài đặt địa chỉ nhận hàng mặc định, tìm địa chỉ nhận
                      hàng bạn muốn và nhấn “Chỉnh sửa”. Chọn “Lưu làm địa chỉ
                      nhận hàng mặc định”, rồi nhấn “Lưu”.
                    </li>
                  </ol>
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
          <li className="displaynone xans-record-">
            <a href="/product/detail.html##param##"><img src="about:blank" alt="" /><span>##name##</span></a>
          </li>
          <li className="displaynone xans-record-">
            <a href="/product/detail.html##param##"><img src="about:blank" alt="" /><span>##name##</span></a>
          </li>
        </ul>
        <p className="player">
          <img src="assets/imgs/btn_recent_prev.gif" alt="Prev" className="prev" /><img src="assets/imgs/btn_recent_next.gif" alt="Next" className="next" />
        </p>
      </div>
      <p className="pageTop">
        <a href="#header" title="Back to Top"><img src="assets/imgs/btn_top1.gif" alt="Top" /></a>
      </p>
    </div>
  </div>
  )
}

export default AddressBook