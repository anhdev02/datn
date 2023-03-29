import React from 'react'

const Cart = () => {
  return (
    <div id="wrap">
        <div id="container">
          <div id="contents">
            <div className="root_width">
              <style dangerouslySetInnerHTML={{__html: "\n              .root_width {\n                width: 100%;\n              }\n              .wrap-basket-width {\n                max-width: 1140px;\n                margin: 0 auto;\n              }\n            " }} />
              <div className="wrap-basket-width">
                <div className="path">
                  <span>Trang Hiện Tại</span>
                  <ol>
                    <li><a href="/">Trang Chủ</a></li>
                    <li title="Current Page"><strong>Giỏ Hàng</strong></li>
                  </ol>
                </div>
                <div className="titleArea-new">
                  <h2>Sản phẩm trong giỏ hàng</h2>
                </div>
                <div className="wrap-basket">
                  <div className="wrap-basket-top">
                    <span className="xans-element- xans-order xans-order-normoversea Baskrt_new xans-record-"><input type="checkbox" />
                      Chọn tất cả
                      <span className="xans-element- xans-order xans-order-normoverseatitle">
                        (3)
                      </span>
                    </span>
                    <span className="xans-element- xans-order xans-order-selectorder ec-base-button"><a href="#none" className="order_list_Delete">Xóa mục đã chọn</a>
                    </span>
                    <a className="more-wish" href="/myshop/wish_list.html">Xem danh sách yêu thích</a>
                  </div>
                  <div className="xans-element- xans-order xans-order-basketpackage Baskrt_new">
                    <div className="xans-element- xans-order xans-order-dcinfo ec-base-box typeMember">
                      <div className="information">
                        <h3 className="title">Quyền lợi</h3>
                        <div className="description">
                          <ul className="mileage">
                            <li className="displaynone">
                              <a href="/myshop/deposits/historyList.html">Tiền tích lũy : <strong /></a>
                            </li>
                            <li>
                              <a href="/myshop/coupon/coupon.html">Mã giảm giá : <strong>0 Mã giảm giá</strong></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="orderListArea ec-base-table typeList gBorder">
                      <table border={1} summary className="xans-element- xans-order xans-order-normoversea xans-record-">
                        <caption>
                          Sản phẩm
                        </caption>
                        <colgroup>
                          <col style={{width: '27px'}} className />
                          <col style={{width: '92px'}} />
                          <col style={{width: 'auto'}} />
                          <col style={{width: '75px'}} />
                          <col style={{width: '120px'}} />
                          <col style={{width: '88px'}} />
                          <col style={{width: '110px'}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col" className />
                            <th scope="col" />
                            <th scope="col">Sản phẩm / Option</th>
                            <th scope="col" className="Order-count">Số Lượng</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Giảm giá</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody className="xans-element- xans-order xans-order-list center">
                          <tr className="xans-record-">
                            <td className>
                              <input type="checkbox" id="basket_chk_id_0" name="basket_product_normal_type_oversea" />
                            </td>
                            <td className="thumb gClearLine">
                              <a href="/product/detail.html?product_no=657&cate_no=1"><img src="assets/imgs/c5d2643072e65498c56d8f80e800fcbc.jpg" alt="Nồi chảo nhôm chống dính Suit IH Lock&Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
                            </td>
                            <td className="left gClearLine">
                              <strong className="name"><a href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/" className="ec-product-name">Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock
                                  dùng được bếp từ ( nhiều phân loại nồi ,
                                  chảo)</a></strong>
                              <span className="displaynone engName">(Tên Tiếng Anh : )</span>
                              <ul className="xans-element- xans-order xans-order-optionall option">
                                <li className="xans-record-">
                                  <strong className="displaynone">Nồi chảo nhôm chống dính Suit IH
                                    Lock&amp;Lock dùng được bếp từ ( nhiều phân
                                    loại nồi , chảo)</strong>[Option: Chảo 24cm - CSU1243PIK (+32,000)]
                                  <span className="displaynone">(1 sản phẩm)</span><br /><span className><a href="#none" className="btnNormal gBlank5">Sửa Phân Loại</a></span>
                                </li>
                              </ul>
                              <p className="gBlank5 displaynone">
                                <strong>Khối lượng</strong> :
                                <span>2.40kg * 1 = 2.40kg</span>
                              </p>
                            </td>
                            <td>
                              <span className>
                                <span className="ec-base-qty"><input id="quantity_id_0" name="quantity_name_0" size={2} defaultValue={1} type="text" /><a href="#st" className="up"><img src="assets/imgs/btn_quantity_up.gif" alt="Up" /></a><a href="#st" className="down"><img src="assets/imgs/btn_quantity_down.gif" alt="Down" /></a></span>
                                <a href="#st" className="btnNormal gBlank5">Sửa</a>
                              </span>
                              <span className="displaynone">1</span>
                            </td>
                            <td>
                              <div className="product_purchase_price_div" id>
                                <strong>đ709,000</strong>
                                <p className="displaynone" />
                              </div>
                            </td>
                            <td rowSpan={1} className>
                              <span />
                              <div id className>
                                <strong className="txtWarnB">-đ<span id="product_discount_price_front0">177,000</span></strong>
                                <p className="displaynone" />
                              </div>
                            </td>
                            <td className="button">
                              <a href="#st" className="btnNormal btn_deleteBasketItem">Xoá</a>
                            </td>
                          </tr>
                          <tr className="xans-record-">
                            <td className>
                              <input type="checkbox" id="basket_chk_id_1" name="basket_product_normal_type_oversea" />
                            </td>
                            <td className="thumb gClearLine">
                              <a href="/product/detail.html?product_no=580&cate_no=1"><img src="assets/imgs/c935752d2bba2b7be6d4592cd585782e.jpg" alt="CSU1243PIK - Chảo Suit LocknLock, 24CM - Màu Pink" /></a>
                            </td>
                            <td className="left gClearLine">
                              <strong className="name"><a href="/product/csu1243pik-chảo-suit-locknlock-24cm-màu-pink/580/category/1/" className="ec-product-name">CSU1243PIK - Chảo Suit LocknLock, 24CM - Màu
                                  Pink</a></strong>
                              <span className="displaynone engName">(Tên Tiếng Anh : )</span>
                              <p className="gBlank5 displaynone">
                                <strong>Khối lượng</strong> :
                                <span>1.60kg * 1 = 1.60kg</span>
                              </p>
                            </td>
                            <td>
                              <span className>
                                <span className="ec-base-qty"><input id="quantity_id_1" name="quantity_name_1" size={2} defaultValue={1} type="text" /><a href="#st" className="up"><img src="assets/imgs/btn_quantity_up.gif" alt="Up" /></a><a href="#st" className="down"><img src="assets/imgs/btn_quantity_down.gif" alt="Down" /></a></span>
                                <a href="#st" className="btnNormal gBlank5">Sửa</a>
                              </span>
                              <span className="displaynone">1</span>
                            </td>
                            <td>
                              <div className="product_purchase_price_div" id>
                                <strong>đ709,000</strong>
                                <p className="displaynone" />
                              </div>
                            </td>
                            <td rowSpan={1} className>
                              <span />
                              <div id className>
                                <strong className="txtWarnB">-đ<span id="product_discount_price_front1">177,000</span></strong>
                                <p className="displaynone" />
                              </div>
                            </td>
                            <td className="button">
                              <a href="#st" className="btnNormal btn_deleteBasketItem">Xoá</a>
                            </td>
                          </tr>
                          <tr className="xans-record-">
                            <td className>
                              <input type="checkbox" id="basket_chk_id_2" name="basket_product_normal_type_oversea" />
                            </td>
                            <td className="thumb gClearLine">
                              <a href="/product/detail.html?product_no=658&cate_no=1"><img src="assets/imgs/d14370bc733b0ead047108c5f1935175.jpg" alt="Máy xay sinh tố Lock&Lock dung tích tối đa 3L - Đa tốc độ - 3 chế độ cài sẵn (Nhồi/ Nghiền đá/ Xay sinh tố) - EJM476SLV" /></a>
                            </td>
                            <td className="left gClearLine">
                              <strong className="name"><a href="/product/máy-xay-sinh-tố-locklock-dung-tích-tối-đa-3l-Đa-tốc-độ-3-chế-độ-cài-sẵ/658/category/1/" className="ec-product-name">Máy xay sinh tố Lock&amp;Lock dung tích tối đa
                                  3L - Đa tốc độ - 3 chế độ cài sẵn (Nhồi/ Nghiền
                                  đá/ Xay sinh tố) - EJM476SLV</a></strong>
                              <span className="displaynone engName">(Tên Tiếng Anh : )</span>
                              <p className="gBlank5 displaynone">
                                <strong>Khối lượng</strong> :
                                <span>4.90kg * 1 = 4.90kg</span>
                              </p>
                            </td>
                            <td>
                              <span className>
                                <span className="ec-base-qty"><input id="quantity_id_2" name="quantity_name_2" size={2} defaultValue={1} type="text" /><a href="#st" className="up"><img src="assets/imgs/btn_quantity_up.gif" alt="Up" /></a><a href="#st" className="down"><img src="assets/imgs/btn_quantity_down.gif" alt="Down" /></a></span>
                                <a href="#st" className="btnNormal gBlank5">Sửa</a>
                              </span>
                              <span className="displaynone">1</span>
                            </td>
                            <td>
                              <div className="product_purchase_price_div" id>
                                <strong>đ4,990,000</strong>
                                <p className="displaynone" />
                              </div>
                            </td>
                            <td rowSpan={1} className>
                              <span />
                              <div id className>
                                <strong className="txtWarnB">-đ<span id="product_discount_price_front2">1,248,000</span></strong>
                                <p className="displaynone" />
                              </div>
                            </td>
                            <td className="button">
                              <a href="#st" className="btnNormal btn_deleteBasketItem">Xoá</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="xans-element- xans-order xans-order-basketpriceinfoguide">
                      <p className="info displaynone">
                        Bạn có thể kiểm tra mức giảm giá được áp dụng tại mục ước
                        tính thanh toán ở mẫu đặt hàng.
                      </p>
                      <p className="info displaynone">
                        Số tiền phải trả cuối cùng sẽ được tính với phí vận chuyển
                        và được hiển thị trên trang thanh toán.
                      </p>
                      <p className="info displaynone">
                        Bạn có thể thay đổi phân loại sản phẩm hoặc số lượng sản
                        phẩm tại trang 'chi tiết sản phẩm'.
                      </p>
                    </div>
                    <div className="xans-element- xans-order xans-order-weight displaynone">
                      <div className="totalWeight">
                        Tổng khối lượng :
                        <span><span id="total_weight">8.90</span>kg</span>
                      </div>
                    </div>
                    <div style={{display: 'none'}} className="xans-element- xans-order xans-order-selectorder ec-base-button">
                      <span className="gLeft">
                        <strong className="text">Sửa sản phẩm đã chọn</strong>
                        <a href="#none" className="btnEm"><i className="icoDelete" /> Xoá</a>
                        <a href="#none" className="btnNormal displaynone">Thêm vào<br />Yêu thích</a>
                        <a href="#none" className="btnNormal displaynone">Chia Sẻ Danh Sách Yêu Thích Của Tôi</a>
                      </span>
                      <span className="gRight">
                        <span className><a href="#none" className="btnNormal displaynone">Chọn sản phẩm nhận tại cửa hàng</a></span>
                        <a href="#none" className="btnNormal">In Đơn Hàng</a>
                      </span>
                    </div>
                    <div className="xans-element- xans-order xans-order-totaloversea ec-base-table typeList gBorder total">
                      <table border={1} summary>
                        <caption>
                          Tổng
                        </caption>
                        <colgroup>
                          <col style={{width: '23%'}} />
                          <col style={{width: '21%'}} className="displaynone" />
                          <col style={{width: '21%'}} className />
                          <col style={{width: 'auto'}} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col"><span>Tổng</span></th>
                            <th scope="col" className="displaynone">
                              <strong>Tax</strong>
                            </th>
                            <th scope="col" id="oversea_total_benefit_price_title_area" className>
                              <a href="#none">Giảm Giá</a>
                            </th>
                            <th scope="col">Tổng tiền thanh toán</th>
                          </tr>
                        </thead>
                        <tbody className="center">
                          <tr>
                            <td>
                              <div className="box txt16">
                                <strong>đ<span className="txt23"><span className="total_product_price_display_front">6,408,000</span></span></strong>
                                <span className="txt14 displaynone"><span className="total_product_price_display_back" /></span>
                              </div>
                            </td>
                            <td className="displaynone">
                              <div className="box txt16">
                                <strong>đ<span className="txt23"><span className="total_product_vat_price_front">0</span></span></strong>
                                <span className="txt14 displaynone"><span className="total_product_vat_price_back" /></span>
                              </div>
                            </td>
                            <td id="oversea_total_benefit_price_area" className>
                              <div className="box txt16">
                                <strong><span className="total-discount">-</span> đ<span id="oversea_total_product_discount_price_front" className="txt23">1,602,000</span></strong>
                                <span className="txt14 displaynone"><span id="oversea_total_product_discount_price_back" /></span>
                              </div>
                            </td>
                            <td>
                              <div className="box txtEm txt16">
                                <strong className="txt23"><span className="total-equal">=</span></strong><strong>đ<span id="oversea_total_order_price_front" className="txt23">4,806,000</span></strong>
                                <span className="txt14 displaynone"><span id="oversea_total_order_price_back" /></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="xans-element- xans-order xans-order-totalorder ec-base-button justify">
                      <a href="#none" className="btnBlue">Thanh Toán tất cả sản phẩm</a>
                      <a href="#none" className="btnBlack">Thanh toán sản phẩm đã chọn</a><span className="gRight">
                        <a href="/" className="btnNormal sizeM">Tiếp Tục Mua Sắm</a>
                      </span>
                      <div id="appPaymentButtonBox" />
                    </div>
                  </div>
                  <div id="ec-basketOptionModifyLayer" className="optionModify ec-base-layer" style={{display: 'none'}}>
                    <div className="header">
                      <h3>Sửa Phân Loại</h3>
                    </div>
                    <div className="content">
                      <ul className="prdInfo">
                        <li className="ec-basketOptionModifyLayer-productName">
                          {'{'}$product_name{'}'}
                        </li>
                        <li className="ec-basketOptionModifyLayer-optionStr">
                          {'{'}$layer_option_str{'}'}
                        </li>
                      </ul>
                      <div className="prdModify">
                        <h4>Phân Loại Sản Phẩm</h4>
                        <ul>
                          <li className="ec-basketOptionModifyLayer-options" style={{display: 'none'}}>
                            <span>{'{'}$option_name{'}'}</span> {'{'}$form.option_value{'}'}
                          </li>
                          <li className="ec-basketOptionModifyLayer-addOptions" style={{display: 'none'}}>
                            <span>{'{'}$option_name{'}'}</span> {'{'}$form.option_value{'}'}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ec-base-button">
                      <a href="#none" className="btnSubmitFix sizeS ec-basketOptionModifyLayer-add">Thêm</a>
                      <a href="#none" className="btnNormalFix sizeS ec-basketOptionModifyLayer-modify">Sửa</a>
                    </div>
                    <a href="#none" className="close"><img src="assets/imgs/btn_close.gif" alt="Close" /></a>
                  </div>
                </div>
              </div>
              <div className="md_choice">
                <div className="wrap-basket-width">
                  <section className="main_section main_section2">
                    <article className="wrap-mProduct Product-list Product-list1">
                      <div className="titleArea titleArea-foot">
                        <h3 className="main-h3">
                          <span>Sản phẩm LocknLock đề cử</span>
                        </h3>
                      </div>
                      <div className="in-article root_width Product-list-slide">
                        <div className="xans-element- xans-product xans-product-listmain-1 xans-product-listmain xans-product-1 mProduct swiper-container swiper-container2 swiper-initialized swiper-horizontal swiper-pointer-events">
                          <ul className="swiper-wrapper" id="swiper-wrapper-af721b2e59da06db" style={{transform: 'translate3d(-3462px, 0px, 0px)', transitionDuration: '0ms'}}>
                            <li id="anchorBoxId_657" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/display/2/"><img src="assets/imgs/54ee049db5bd93de73e473350656a8d7.jpg" id="eListPrdImage657_2" alt="Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">677000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi chảo nhôm chống dính Suit IH
                                        Lock&amp;Lock dùng được bếp từ ( nhiều
                                        phân loại nồi , chảo)</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ677,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ508,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_656" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-hộp-bảo-quản-thủy-tinh-locklock-top-class-lbg-nhiều-dung-tích/656/category/1/display/2/"><img src="assets/imgs/2faa7e2913691496d15f71e30b72b1c7.jpg" id="eListPrdImage656_2" alt="Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top Class LBG (nhiều dung tích)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">159000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bộ-hộp-bảo-quản-thủy-tinh-locklock-top-class-lbg-nhiều-dung-tích/656/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ hộp bảo quản thủy tinh Lock&amp;Lock
                                        Top Class LBG (nhiều dung tích)</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ159,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ119,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_133" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/máy-sấy-tóc-locklock-trắng-ena136wht-2000-2200w/133/category/1/display/2/"><img src="assets/imgs/4da48587584418ed645889738f6253b3.jpg" id="eListPrdImage133_2" alt="Máy Sấy Tóc Lock&amp;Lock - Trắng ENA136WHT 2000-2200W" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">776000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/máy-sấy-tóc-locklock-trắng-ena136wht-2000-2200w/133/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Máy Sấy Tóc Lock&amp;Lock - Trắng
                                        ENA136WHT 2000-2200W</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ776,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ582,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_585" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/llg510s3-hộp-đựng-thức-ăn-cho-bé-locklock-260ml3-hộp-nắp-màu-cam-silic/585/category/1/display/2/"><img src="assets/imgs/c9d5b5b9c6c9233d7c6a65cbc6dfe9c4.jpg" id="eListPrdImage585_2" alt="LLG510S3 - Hộp đựng thức ăn cho bé Lock&amp;Lock 260ml*3 hộp - Nắp màu cam, silicone màu cam" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">430000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/llg510s3-hộp-đựng-thức-ăn-cho-bé-locklock-260ml3-hộp-nắp-màu-cam-silic/585/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>LLG510S3 - Hộp đựng thức ăn cho bé
                                        Lock&amp;Lock 260ml*3 hộp - Nắp màu cam,
                                        silicone màu cam</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ430,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ322,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_733" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/"><img src="assets/imgs/c0c85a1b444880b3ed20bec0d1c7bc56.jpg" id="eListPrdImage733_2" alt="Bộ nồi chảo chống dính Suit Lock&amp;Lock Detachable 18cm - 22cm - 26cm tay cầm có thể tháo rời màu xanh mint - SDE1181IHS01" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">2274000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ nồi chảo chống dính Suit Lock&amp;Lock
                                        Detachable 18cm - 22cm - 26cm tay cầm có
                                        thể tháo rời màu xanh mint -
                                        SDE1181IHS01</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ2,274,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ2,047,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_720" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/"><img src="assets/imgs/eaca666828fe222a66cbe45c34c1912f.jpg" id="eListPrdImage720_2" alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">729000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ cây lau nhà thông minh tự động tách
                                        nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ
                                        - Cây lau chữ nhật đa năng</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ729,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ656,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_713" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/"><img src="assets/imgs/33c7128a35a474db56f084bab283f96f.jpg" id="eListPrdImage713_2" alt="Nồi cơm điện Lock&amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1970000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi cơm điện Lock&amp;Lock Compact Rice
                                        Cooker 1.2L màu đen EJR346BLK</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,970,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ1,477,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_700" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/"><img src="assets/imgs/2a6306c708febd507c98cbde702280be.jpg" id="eListPrdImage700_2" alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock EJF357 (5.2 Lít) - 2 màu" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">5215000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock
                                        EJF357 (5.2 Lít) - 2 màu</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ5,215,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ3,090,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>41%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_699" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bình-giữ-nhiệt-locklock-bằng-thép-không-rỉ-riga-tumbler-vietnam-editio/699/category/1/display/2/"><img src="assets/imgs/dd070baebdf09876b52b5848d6461606.jpg" id="eListPrdImage699_2" alt="Bình giữ nhiệt Lock&amp;Lock bằng thép không rỉ Riga Tumbler Vietnam Edition 897ml (4 phiên bản) - LHC4160" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">715000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bình-giữ-nhiệt-locklock-bằng-thép-không-rỉ-riga-tumbler-vietnam-editio/699/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bình giữ nhiệt Lock&amp;Lock bằng thép
                                        không rỉ Riga Tumbler Vietnam Edition
                                        897ml (4 phiên bản) - LHC4160</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ715,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ536,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_646" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/lò-nướng-chân-không-kết-hợp-chức-năng-hấp-locknlock-steam-air-fryer-ov/646/category/1/display/2/"><img src="assets/imgs/025668ff6ae6f1ece71dcbebc286c17e.jpg" id="eListPrdImage646_2" alt="Lò nướng chân không kết hợp chức năng hấp LocknLock Steam Air Fryer Oven 12.5L, 220-240V, 50/60Hz, 985-1635W - EJF693GRY" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">7990000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_after.png" className="icon_img ec-product-listwishicon" alt="Sau đăng ký Sản phẩm yêu thích" icon_status="on" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/lò-nướng-chân-không-kết-hợp-chức-năng-hấp-locknlock-steam-air-fryer-ov/646/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Lò nướng chân không kết hợp chức năng hấp
                                        LocknLock Steam Air Fryer Oven 12.5L,
                                        220-240V, 50/60Hz, 985-1635W -
                                        EJF693GRY</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ7,990,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ7,191,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_652" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-điện-đa-năng-locknlock-multi-cooker-220-240v-5060hz-1300-1500w-4l-/652/category/1/display/2/"><img src="assets/imgs/ce24b628086a33a6b70975f9184bde89.jpg" id="eListPrdImage652_2" alt="Nồi điện đa năng LocknLock Multi Cooker 220-240V, 50/60Hz, 1300-1500W, 4L - White - EJP544WHT" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">2200000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-điện-đa-năng-locknlock-multi-cooker-220-240v-5060hz-1300-1500w-4l-/652/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi điện đa năng LocknLock Multi Cooker
                                        220-240V, 50/60Hz, 1300-1500W, 4L - White
                                        - EJP544WHT</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ2,200,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ1,650,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_49" className="swiper-slide xans-record- swiper-slide-prev" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/máy-nướng-bánh-mì-lock-lock-ejb221blu-730-870-w/49/category/1/display/2/"><img src="assets/imgs/24b0ea8cb10b6103597383746ab87175.jpg" id="eListPrdImage49_2" alt="Máy Nướng Bánh Mì Lock&amp; Lock EJB221BLU (730 - 870 W)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1043000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/máy-nướng-bánh-mì-lock-lock-ejb221blu-730-870-w/49/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Máy Nướng Bánh Mì Lock&amp; Lock
                                        EJB221BLU (730 - 870 W)</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,043,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ782,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_414" className="swiper-slide xans-record- swiper-slide-active" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/enr156blu-máy-tăm-nước-không-dây-locklock-cordless-oral-irrigator-200m/414/category/1/display/2/"><img src="assets/imgs/077e0518baac8c7d9c58b03a17bf322d.jpg" id="eListPrdImage414_2" alt="ENR156BLU - Máy tăm nước không dây Lock&amp;Lock Cordless Oral Irrigator, 200ml - Màu xanh da trời" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1263000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/enr156blu-máy-tăm-nước-không-dây-locklock-cordless-oral-irrigator-200m/414/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>ENR156BLU - Máy tăm nước không dây
                                        Lock&amp;Lock Cordless Oral Irrigator,
                                        200ml - Màu xanh da trời</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,263,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ1,137,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_541" className="swiper-slide xans-record- swiper-slide-next" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/ejm501dgry-máy-đánh-trứng-locklock-hand-mixer-220-240v-5060hz-250-300w/541/category/1/display/2/"><img src="assets/imgs/7bde3ac11327a16283b815664fe1a592.jpg" id="eListPrdImage541_2" alt="EJM501DGRY - Máy đánh trứng Lock&amp;Lock Hand Mixer 220-240V, 50/60Hz, 250-300W - Màu xám đậm" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">973000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/ejm501dgry-máy-đánh-trứng-locklock-hand-mixer-220-240v-5060hz-250-300w/541/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>EJM501DGRY - Máy đánh trứng Lock&amp;Lock
                                        Hand Mixer 220-240V, 50/60Hz, 250-300W -
                                        Màu xám đậm</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ973,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ730,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_657" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/display/2/"><img src="assets/imgs/54ee049db5bd93de73e473350656a8d7.jpg" id="eListPrdImage657_2" alt="Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">677000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi chảo nhôm chống dính Suit IH
                                        Lock&amp;Lock dùng được bếp từ ( nhiều
                                        phân loại nồi , chảo)</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ677,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ508,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_656" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-hộp-bảo-quản-thủy-tinh-locklock-top-class-lbg-nhiều-dung-tích/656/category/1/display/2/"><img src="assets/imgs/2faa7e2913691496d15f71e30b72b1c7.jpg" id="eListPrdImage656_2" alt="Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top Class LBG (nhiều dung tích)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">159000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bộ-hộp-bảo-quản-thủy-tinh-locklock-top-class-lbg-nhiều-dung-tích/656/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ hộp bảo quản thủy tinh Lock&amp;Lock
                                        Top Class LBG (nhiều dung tích)</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ159,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ119,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_133" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/máy-sấy-tóc-locklock-trắng-ena136wht-2000-2200w/133/category/1/display/2/"><img src="assets/imgs/4da48587584418ed645889738f6253b3.jpg" id="eListPrdImage133_2" alt="Máy Sấy Tóc Lock&amp;Lock - Trắng ENA136WHT 2000-2200W" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">776000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/máy-sấy-tóc-locklock-trắng-ena136wht-2000-2200w/133/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Máy Sấy Tóc Lock&amp;Lock - Trắng
                                        ENA136WHT 2000-2200W</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ776,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ582,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_585" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/llg510s3-hộp-đựng-thức-ăn-cho-bé-locklock-260ml3-hộp-nắp-màu-cam-silic/585/category/1/display/2/"><img src="assets/imgs/c9d5b5b9c6c9233d7c6a65cbc6dfe9c4.jpg" id="eListPrdImage585_2" alt="LLG510S3 - Hộp đựng thức ăn cho bé Lock&amp;Lock 260ml*3 hộp - Nắp màu cam, silicone màu cam" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">430000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/llg510s3-hộp-đựng-thức-ăn-cho-bé-locklock-260ml3-hộp-nắp-màu-cam-silic/585/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>LLG510S3 - Hộp đựng thức ăn cho bé
                                        Lock&amp;Lock 260ml*3 hộp - Nắp màu cam,
                                        silicone màu cam</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ430,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ322,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_733" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/"><img src="assets/imgs/c0c85a1b444880b3ed20bec0d1c7bc56.jpg" id="eListPrdImage733_2" alt="Bộ nồi chảo chống dính Suit Lock&amp;Lock Detachable 18cm - 22cm - 26cm tay cầm có thể tháo rời màu xanh mint - SDE1181IHS01" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">2274000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ nồi chảo chống dính Suit Lock&amp;Lock
                                        Detachable 18cm - 22cm - 26cm tay cầm có
                                        thể tháo rời màu xanh mint -
                                        SDE1181IHS01</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ2,274,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ2,047,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_720" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/"><img src="assets/imgs/eaca666828fe222a66cbe45c34c1912f.jpg" id="eListPrdImage720_2" alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">729000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ cây lau nhà thông minh tự động tách
                                        nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ
                                        - Cây lau chữ nhật đa năng</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ729,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ656,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_713" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/"><img src="assets/imgs/33c7128a35a474db56f084bab283f96f.jpg" id="eListPrdImage713_2" alt="Nồi cơm điện Lock&amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1970000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi cơm điện Lock&amp;Lock Compact Rice
                                        Cooker 1.2L màu đen EJR346BLK</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,970,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ1,477,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_700" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/"><img src="assets/imgs/2a6306c708febd507c98cbde702280be.jpg" id="eListPrdImage700_2" alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock EJF357 (5.2 Lít) - 2 màu" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">5215000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" /></span>
                                    </div>
                                  </div>
                                </div>
                                <div className="description">
                                  <div className="color displaynone" />
                                  <h4 className="name">
                                    <a href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock
                                        EJF357 (5.2 Lít) - 2 màu</span></a>
                                  </h4>
                                  <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ5,215,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                      </span>
                                    </li>
                                    <li className="xans-record-">
                                      <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ3,090,000
                                        <span style={{fontSize: '12px', color: '#f20000'}}>41%</span></span>
                                    </li>
                                  </ul>
                                  <div className="wrap-new-icon">
                                    <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                  </div>
                                  <div className="ezca-reviews-badge">
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <div className="ezca-star-empty" />
                                    <span>(0)</span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <span className="swiper-notification" aria-atomic="true" />
                        </div>
                        <div className="swiper-button-prev swiper-button-prev2" tabIndex={0} aria-controls="swiper-wrapper-af721b2e59da06db" />
                        <div className="swiper-button-next swiper-button-next2" tabIndex={0} aria-controls="swiper-wrapper-af721b2e59da06db" />
                        <div className="swiper-pagination2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                          <span className="swiper-pagination-bullet" tabIndex={0} /><span className="swiper-pagination-bullet" tabIndex={0} /><span className="swiper-pagination-bullet" tabIndex={0} /><span className="swiper-pagination-bullet" tabIndex={0} /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} aria-current="true" /><span className="swiper-pagination-bullet" tabIndex={0} /><span className="swiper-pagination-bullet" tabIndex={0} />
                        </div>
                      </div>
                    </article>
                  </section>
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
            <span><a href="/order/basket.html">3</a> Sản Phẩm</span>
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

export default Cart