import React from 'react'

const FavouritesList = () => {
  return (
    <div id="wrap">
        <div id="container">
          <div id="contents">
            <div className="root_width">
              <div className="path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li><a href="#st">Trang chủ</a></li>
                  <li><a href="#st">Tài khoản của tôi</a></li>
                  <li title="Curren Page">
                    <strong>Danh sách yêu thích</strong>
                  </li>
                </ol>
              </div>
              <div className="clearBoth">
                <div className="myshpp-left">
                  <div className="customer_sidenav">
                    <h3 className="customer_h3">
                      <a href="#st" className="on">Tài khoản của tôi</a>
                    </h3>
                    <ul className="xans-element- xans-myshop xans-myshop-main my_ul">
                      <li className="my_li1">
                        <a href="#st">Đơn hàng<span className="xans-element- xans-myshop xans-myshop-orderhistorytab">(<span id="xans_myshop_total_orders">0</span>)
                          </span>
                        </a>
                      </li>
                      <li className="my_li2">
                        <a href="#st">Sổ địa chỉ</a>
                      </li>
                      <li className="my_li3">
                        <a href="#st">Danh sách yêu thích
                          <span className="count">(<span className="xans_myshop_main_interest_prd_cnt">0</span>)</span></a>
                      </li>
                      <li className="my_li4">
                        <a href="#st">Đã xem</a>
                      </li>
                      <li className="my_li5">
                        <a href="#st">Mã giảm giá</a>
                      </li>
                      <li style={{display: 'none'}} className="my_li6">
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
                    <h2>Danh sách yêu thích</h2>
                  </div>
                  <div className="xans-element- xans-myshop xans-myshop-wishlist ec-base-table typeList Product-list xans-record-">
                    <div className="top-wishlist">
                      <input id="wishlist-all" type="checkbox" /><label htmlFor="wishlist-all">Chọn tất cả</label>
                      <a href="#none" className="xans-element- xans-myshop xans-myshop-wishlistbutton xans-record-">Xóa mục đã chọn
                      </a>
                    </div>
                    <ul className="xans-element- xans-myshop xans-myshop-wishlistitem prdList">
                      <li className="xans-record-">
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <a className="BG-thumbnail" href="#st"><img src="assets/imgs/acc1751f3f2b501ae5f51222582ffa11.jpg" alt=''/></a>
                              </div>
                              <div className="wish-thum-left">
                                <input name="wish_idx[]" id="wish_idx_0" type="checkbox" />
                              </div>
                              <a href="#none" className="wish-thum-right btnNormal btn_deleteBasketItem btn_wishlist_del" rel="494||000A||"><i className="icoDelete" /> Xóa</a>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <a href="#st" className="ec-product-name">EJR973WHT - Thùng đựng gạo chân không Lock&amp;Lock
                                Vacuum Rice Keeper 5V, 3W, 7L- Màu trắng</a>
                            </h4>
                            <ul className="xans-element- xans-product xans-product-listitem spec">
                              <li className="displaynone" />
                            </ul>
                            <ul className="spec">
                              <li>
                                <strong className="wish-price1 strike">đ2,012,000</strong><strong className>đ1,207,000</strong>
                              </li>
                            </ul>
                            <div className="wrap-new-icon">
                              <span className="wrap-new-span" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="xans-record-">
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <a className="BG-thumbnail" href="#st"><img src="assets/imgs/043f2087b1daa94771021bf1d91e2abf.jpg" alt="" /></a>
                              </div>
                              <div className="wish-thum-left">
                                <input name="wish_idx[]" id="wish_idx_1" type="checkbox" />
                              </div>
                              <a href="#none" className="wish-thum-right btnNormal btn_deleteBasketItem btn_wishlist_del" rel="653||||"><i className="icoDelete" /> Xóa</a>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <a href="#st" className="ec-product-name">Bộ muỗng đũa Lock&amp;Lock bằng thép không gỉ -
                                HPL105 (2 màu)</a>
                            </h4>
                            <ul className="xans-element- xans-product xans-product-listitem spec">
                              <li className="displaynone" />
                            </ul>
                            <ul className="spec">
                              <li>
                                <strong className="wish-price1 strike">đ150,000</strong><strong className>đ90,000</strong>
                              </li>
                            </ul>
                            <div className="wrap-new-icon">
                              <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923279700.png" className="icon_img" alt="Sản phẩm hết hàng" /></span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="xans-record-">
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <a className="BG-thumbnail" href="#st"><img src="assets/imgs/80db86f2639f8df4845a8bc103b37801.jpg" alt="" /></a>
                              </div>
                              <div className="wish-thum-left">
                                <input name="wish_idx[]" id="wish_idx_2" type="checkbox" />
                              </div>
                              <a href="#none" className="wish-thum-right btnNormal btn_deleteBasketItem btn_wishlist_del" rel="684||||"><i className="icoDelete" /> Xóa</a>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <a href="#st" className="ec-product-name">Bình giữ nhiệt Lock&amp;Lock Jumbo Tumbler 900 ml -
                                LHC4300</a>
                            </h4>
                            <ul className="xans-element- xans-product xans-product-listitem spec">
                              <li className="displaynone" />
                            </ul>
                            <ul className="spec">
                              <li>
                                <strong className="wish-price1 strike">đ730,000</strong><strong className>đ438,000</strong>
                              </li>
                            </ul>
                            <div className="wrap-new-icon">
                              <span className="wrap-new-span"><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="Order_Empty displaynone">
                      <p className="empty-basket" style={{margin: '10px 0 50px'}}>
                        Bạn không có sản phẩm nào trong danh sách yêu thích.
                      </p>
                      <a className="btnWhite" href="#st">Tiếp tục mua sắm</a>
                    </div>
                  </div>
                  <div className="xans-element- xans-myshop xans-myshop-wishlistbutton ec-base-button xans-record-">
                    <span className="gLeft" style={{display: 'none'}}>
                      <strong className="text">Sửa sản phẩm đã chọn</strong>
                      <a href="#none" className="btnEm"><i className="icoDelete" /> Xóa</a>
                      <a href="#none" className="btnNormal">Đến giỏ hàng</a>
                    </span>
                    <div className="Myshop_WishlistButton_div">
                      <a href="#none" className="btnBlack">Đặt hàng</a>
                      <a href="#none" className="btnWhite">Thêm vào giỏ hàng</a>
                    </div>
                  </div>
                  <div className="xans-element- xans-myshop xans-myshop-wishlistpaging ec-base-paginate">
                    <a href="#none" className="first"><i className="fa-solid fa-angles-left" /></a>
                    <a href="#none"><i className="fa-solid fa-angle-left" /></a>
                    <ol>
                      <li className="xans-record-">
                        <a href="?page=1" className="this">1</a>
                      </li>
                    </ol>
                    <a href="#none"><i className="fa-solid fa-angle-right" /></a>
                    <a href="#none" className="last"><i className="fa-solid fa-angles-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md_choice">
              <div className="root_width">
                <section className="main_section main_section2">
                  <article className="wrap-mProduct Product-list Product-list1">
                    <div className="titleArea titleArea-foot">
                      <h3 className="main-h3">
                        <span>Sản phẩm LocknLock đề cử</span>
                      </h3>
                    </div>
                    <div className="in-article root_width Product-list-slide">
                      <div className="xans-element- xans-product xans-product-listmain-1 xans-product-listmain xans-product-1 mProduct swiper-container swiper-container2 swiper-initialized swiper-horizontal swiper-pointer-events">
                        <ul className="swiper-wrapper" id="swiper-wrapper-7e63eb4baaf34855" style={{transform: 'translate3d(-5193px, 0px, 0px)', transitionDuration: '0ms'}}>
                          <li id="anchorBoxId_541" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_541"><img src="assets/imgs/f7eefb277ce29bfc512f96149c77719a.jpg" id="eListPrdImage541_2" alt="EJM501DGRY - Máy đánh trứng Lock&amp;Lock Hand Mixer 220-240V, 50/60Hz, 250-300W - Màu xám đậm" /></a>
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
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>EJM501DGRY - Máy đánh trứng Lock&amp;Lock
                                      Hand Mixer 220-240V, 50/60Hz, 250-300W - Màu
                                      xám đậm</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ973,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ486,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_657" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_657"><img src="assets/imgs/67ef40f877431635ca76fe7375610acb.jpg" id="eListPrdImage657_2" alt="Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
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
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi chảo nhôm chống dính Suit IH
                                      Lock&amp;Lock dùng được bếp từ ( nhiều phân
                                      loại nồi , chảo)</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ677,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ338,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_656" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_656"><img src="assets/imgs/20220714/2faa7e2913691496d15f71e30b72b1c7.jpg" id="eListPrdImage656_2" alt="Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top Class LBG (nhiều dung tích)" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">159000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top
                                      Class LBG (nhiều dung tích)</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ159,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ79,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_585" className="swiper-slide xans-record- swiper-slide-duplicate swiper-slide-duplicate-prev" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_585"><img src="assets/imgs/20221003/c9d5b5b9c6c9233d7c6a65cbc6dfe9c4.jpg" id="eListPrdImage585_2" alt="LLG510S3 - Hộp đựng thức ăn cho bé Lock&amp;Lock 260ml*3 hộp - Nắp màu cam, silicone màu cam" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">430000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>LLG510S3 - Hộp đựng thức ăn cho bé
                                      Lock&amp;Lock 260ml*3 hộp - Nắp màu cam,
                                      silicone màu cam</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ430,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ215,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_720" className="swiper-slide xans-record- swiper-slide-duplicate-active" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_720"><img src="assets/imgs/d71931e26e0cd57388c8717e3fa816d4.jpg" id="eListPrdImage720_2" alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">729000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ cây lau nhà thông minh tự động tách nước
                                      bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây
                                      lau chữ nhật đa năng</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ729,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ437,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>40%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_713" className="swiper-slide xans-record- swiper-slide-duplicate-next" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_713"><img src="assets/imgs/71350b15fc4a19f571594fd9f52a51a4.jpg" id="eListPrdImage713_2" alt="Nồi cơm điện Lock&amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">1970000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi cơm điện Lock&amp;Lock Compact Rice
                                      Cooker 1.2L màu đen EJR346BLK</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,970,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ985,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_706" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_706"><img src="assets/imgs/3b3949b01431952147de91a65af48332.jpg" id="eListPrdImage706_2" alt="Bộ hộp cơm giữ nhiệt Lock&amp;Lock Pump Vacuum Lunch Box (300ml*2, 500ml*1, bộ đũa và thìa, túi) - LHC8052S01" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">1490000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ hộp cơm giữ nhiệt Lock&amp;Lock Pump
                                      Vacuum Lunch Box (300ml*2, 500ml*1, bộ đũa
                                      và thìa, túi) - LHC8052S01</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,490,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ745,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_700" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_700"><img src="assets/imgs/ce1c2a496599c3282e59e4003981750b.jpg" id="eListPrdImage700_2" alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock EJF357 (5.2 Lít) - 2 màu" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">5215000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock
                                      EJF357 (5.2 Lít) - 2 màu</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ5,215,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ2,190,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>58%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_699" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_699"><img src="assets/imgs/8188eaf29824c761f89041baa17ab969.jpg" id="eListPrdImage699_2" alt="Bình giữ nhiệt Lock&amp;Lock bằng thép không rỉ Riga Tumbler Vietnam Edition 897ml (4 phiên bản) - LHC4160" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">715000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Bình giữ nhiệt Lock&amp;Lock bằng thép
                                      không rỉ Riga Tumbler Vietnam Edition 897ml
                                      (4 phiên bản) - LHC4160</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ715,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ357,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_646" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_646"><img src="assets/imgs/b61d6e01d1653a0b8ab470c33ecd1d60.jpg" id="eListPrdImage646_2" alt="Lò nướng chân không kết hợp chức năng hấp LocknLock Steam Air Fryer Oven 12.5L, 220-240V, 50/60Hz, 985-1635W - EJF693GRY" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">7990000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Lò nướng chân không kết hợp chức năng hấp
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
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ4,794,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>40%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_652" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_652"><img src="assets/imgs/e82ad7903a0a8aac3fd6e80d7a421752.jpg" id="eListPrdImage652_2" alt="Nồi điện đa năng LocknLock Multi Cooker 220-240V, 50/60Hz, 1300-1500W, 4L - White - EJP544WHT" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">2200000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi điện đa năng LocknLock Multi Cooker
                                      220-240V, 50/60Hz, 1300-1500W, 4L - White -
                                      EJP544WHT</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ2,200,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ1,100,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_49" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_49"><img src="assets/imgs/ae731abc5a9af56f5cf715e9266cbea3.jpg" id="eListPrdImage49_2" alt="Máy Nướng Bánh Mì Lock&amp; Lock EJB221BLU (730 - 870 W)" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">1043000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Máy Nướng Bánh Mì Lock&amp; Lock EJB221BLU
                                      (730 - 870 W)</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,043,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ521,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_391" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_391"><img src="assets/imgs/794f2e1b5d74aa60950af8c4114ac292.jpg" id="eListPrdImage391_2" alt="Nồi điện đa năng Lock&amp;Lock EJP116BLK (0.8 Lít)" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">888000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi điện đa năng Lock&amp;Lock EJP116BLK
                                      (0.8 Lít)</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ888,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ444,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_414" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_414"><img src="assets/imgs/6a1ba1f901e41383c2da7d342e6e24cd.jpg" id="eListPrdImage414_2" alt="ENR156BLU - Máy tăm nước không dây Lock&amp;Lock Cordless Oral Irrigator, 200ml - Màu xanh da trời" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">1263000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>ENR156BLU - Máy tăm nước không dây
                                      Lock&amp;Lock Cordless Oral Irrigator, 200ml
                                      - Màu xanh da trời</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,263,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ758,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>40%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_541" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_541"><img src="assets/imgs/f7eefb277ce29bfc512f96149c77719a.jpg" id="eListPrdImage541_2" alt="EJM501DGRY - Máy đánh trứng Lock&amp;Lock Hand Mixer 220-240V, 50/60Hz, 250-300W - Màu xám đậm" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">973000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>EJM501DGRY - Máy đánh trứng Lock&amp;Lock
                                      Hand Mixer 220-240V, 50/60Hz, 250-300W - Màu
                                      xám đậm</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ973,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ486,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_657" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_657"><img src="assets/imgs/67ef40f877431635ca76fe7375610acb.jpg" id="eListPrdImage657_2" alt="Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">677000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi chảo nhôm chống dính Suit IH
                                      Lock&amp;Lock dùng được bếp từ ( nhiều phân
                                      loại nồi , chảo)</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ677,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ338,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_656" className="swiper-slide xans-record-" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_656"><img src="assets/imgs/20220714/2faa7e2913691496d15f71e30b72b1c7.jpg" id="eListPrdImage656_2" alt="Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top Class LBG (nhiều dung tích)" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">159000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top
                                      Class LBG (nhiều dung tích)</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ159,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ79,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_585" className="swiper-slide xans-record- swiper-slide-prev" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_585"><img src="assets/imgs/20221003/c9d5b5b9c6c9233d7c6a65cbc6dfe9c4.jpg" id="eListPrdImage585_2" alt="LLG510S3 - Hộp đựng thức ăn cho bé Lock&amp;Lock 260ml*3 hộp - Nắp màu cam, silicone màu cam" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">430000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>LLG510S3 - Hộp đựng thức ăn cho bé
                                      Lock&amp;Lock 260ml*3 hộp - Nắp màu cam,
                                      silicone màu cam</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ430,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ215,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /><img src="assets/imgs/icon_202206291922527800.png" className="icon_img" alt="Sản phẩm mới" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_720" className="swiper-slide xans-record- swiper-slide-duplicate swiper-slide-active" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_720"><img src="assets/imgs/d71931e26e0cd57388c8717e3fa816d4.jpg" id="eListPrdImage720_2" alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">729000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st"><span style={{fontSize: '12px', color: '#555555'}}>Bộ cây lau nhà thông minh tự động tách nước
                                      bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây
                                      lau chữ nhật đa năng</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ729,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ437,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>40%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_713" className="swiper-slide xans-record- swiper-slide-duplicate swiper-slide-next" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_713"><img src="assets/imgs/71350b15fc4a19f571594fd9f52a51a4.jpg" id="eListPrdImage713_2" alt="Nồi cơm điện Lock&amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">1970000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi cơm điện Lock&amp;Lock Compact Rice
                                      Cooker 1.2L màu đen EJR346BLK</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,970,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ985,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_706" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_706"><img src="assets/imgs/3b3949b01431952147de91a65af48332.jpg" id="eListPrdImage706_2" alt="Bộ hộp cơm giữ nhiệt Lock&amp;Lock Pump Vacuum Lunch Box (300ml*2, 500ml*1, bộ đũa và thìa, túi) - LHC8052S01" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">1490000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Bộ hộp cơm giữ nhiệt Lock&amp;Lock Pump
                                      Vacuum Lunch Box (300ml*2, 500ml*1, bộ đũa
                                      và thìa, túi) - LHC8052S01</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ1,490,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ745,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>50%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li id="anchorBoxId_700" className="swiper-slide xans-record- swiper-slide-duplicate" style={{width: '274.5px', marginRight: '14px'}}>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st" name="anchorBoxName_700"><img src="assets/imgs/ce1c2a496599c3282e59e4003981750b.jpg" id="eListPrdImage700_2" alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock EJF357 (5.2 Lít) - 2 màu" /></a>
                                  </div>
                                  <div className="salebox displaynone">
                                    <div className="sale_bg" style={{display: 'none'}}>
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">5215000</span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" icon_status="off" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className><span style={{fontSize: '12px', color: '#555555'}}>Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock
                                      EJF357 (5.2 Lít) - 2 màu</span></a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}>đ5,215,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                                    </span>
                                  </li>
                                  <li className="xans-record-">
                                    <span style={{fontSize: '16px', color: '#0079e3', fontWeight: 'bold'}}>đ2,190,000
                                      <span style={{fontSize: '12px', color: '#f20000'}}>58%</span></span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923034500.png" className="icon_img" alt="Sản phẩm đề xuất" /></span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <span className="swiper-notification" />
                      </div>
                      <div className="swiper-button-prev swiper-button-prev2" />
                      <div className="swiper-button-next swiper-button-next2" />
                      <div className="swiper-pagination2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" />
                      </div>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
          <hr className="layout" />
        </div>
        <hr className="layout" />
        <div id="quick">
          <div className="xans-element- xans-layout xans-layout-orderbasketcount">
            <strong>Giỏ Hàng</strong>
            <span><a href="#st">0</a> Sản Phẩm</span>
          </div>
          <div className="xans-element- xans-layout xans-layout-productrecent">
            <h2>
              <a href="#st">Đã Xem Gần Đây</a>
            </h2>
            <ul>
              <li className="displaynone xans-record-">
                <a href="#st"><img src="about:blank" alt="" /><span>##name##</span></a>
              </li>
              <li className="displaynone xans-record-">
                <a href="#st"><img src="about:blank" alt="" /><span>##name##</span></a>
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

export default FavouritesList