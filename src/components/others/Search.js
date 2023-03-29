import React from 'react'

const Search = () => {
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
                    <li title="Current Page"><strong>Tìm kiếm</strong></li>
                  </ol>
                </div>
                <div className="titleArea-new">
                  <h2>Tìm kiếm</h2>
                </div>
                <div className="xans-element- xans-product xans-product-searchdata xans-record-">
                  <form className="searchField" id="ec-product-searchdata-searchkeyword_form" action="/product/search.html" method="get">
                    <fieldset>
                      <legend>Tìm kiếm sản phẩm</legend>
                      <div className="searchInput">
                        <input type="text" className="keyword" name="keyword" id="ec-product-searchdata-keyword" defaultValue="bình nước" />
                        <input type="image" id="ec-product-searchdata-submit_button" src="assets/imgs/icon_search.png" alt="Tìm kiếm" className="btnSearch" />
                        <ul className="autoDrop" id />
                      </div>
                      <div id="ec-product-searchoption" className="searchOption ec-base-layer">
                        <div className="header">
                          <h3>Option tìm kiếm</h3>
                        </div>
                        <div className="content">
                          <div className="boardWrite">
                            <table border={1}>
                              <colgroup>
                                <col style={{width: '80px'}} />
                                <col style={{width: 'auto'}} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th scope="row">Từ khóa</th>
                                  <td>
                                    <input type="text" name="keyword_layer" id="ec-product-searchdata-detail-keyword" />
                                    <p className="desc">
                                      <input type="checkbox" name="search_detail_type" id="ec-product-searchdata-detail-type" defaultValue="or" />
                                      <label htmlFor="ec-product-searchdata-detail-type">
                                        Tìm kiếm tất cả sản phẩm có chứa trên một
                                        từ khóa</label>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Từ khóa loại trừ</th>
                                  <td>
                                    <input type="text" name="except_keyword" id="ec-product-searchdata-except-keyword" />
                                    <p className="desc">
                                      Có thể nhập từ khóa loại trừ khỏi kết quả
                                      tìm kiếm.
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="ec-base-button">
                          <a href="#none"><img src="assets/imgs/btn_search.gif" alt="Tìm kiếm" id="ec-product-searchdata-layer-submit" /></a>
                          <a href="#none"><img src="assets/imgs/btn_reset.gif" alt="Reset" id="ec-product-searchdata-layer-reset" /></a>
                        </div>
                        <a href="#none" className="close"><img src="assets/imgs/btn_close.gif" alt="Đóng" /></a>
                      </div>
                    </fieldset>
                    <div className="xans-element- xans-product xans-product-hotkeyword keywordArea">
                      <strong className="heading">Từ khóa phổ biến</strong>
                      <ul className="list">
                        <li className="xans-record-">
                          <a href="/product/search.html?keyword=B%C3%ACnh+gi%E1%BB%AF+nhi%E1%BB%87t&sort_method=">Bình giữ nhiệt</a>
                        </li>
                        <li className="xans-record-">
                          <a href="/product/search.html?keyword=H%E1%BB%99p+c%C6%A1m+gi%E1%BB%AF+nhi%E1%BB%87t&sort_method=">Hộp cơm giữ nhiệt</a>
                        </li>
                        <li className="xans-record-">
                          <a href="/product/search.html?keyword=N%E1%BB%93i+chi%C3%AAn+kh%C3%B4ng+d%E1%BA%A7u&sort_method=">Nồi chiên không dầu</a>
                        </li>
                        <li className="xans-record-">
                          <a href="/product/search.html?keyword=b%C3%A0n+ch%E1%BA%A3i&sort_method=">bàn chải</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                  <div id="searchContent" className="xans-element- xans-product xans-product-searchdata xans-record-">
                    <form className="searchCondition" id="ec-product-searchdata-form" name method="get">
                      <input type="hidden" name="keyword" id="ec-product-searchdata-keyword_hidden" />
                    </form>
                  </div>
                  <div className="searchResult">
                    <p className="record">Tổng <strong>31</strong> cái</p>
                    <ul className="xans-element- xans-product xans-product-searchorderby">
                      <li className="xans-record-">
                        <a href="/product/search.html?banner_action=&keyword=bình nước &order_by=recent">Sản phẩm mới</a>
                      </li>
                      <li className="xans-record-">
                        <a href="/product/search.html?banner_action=&keyword=bình nước &order_by=priceasc">Giá thấp</a>
                      </li>
                      <li className="xans-record-">
                        <a href="/product/search.html?banner_action=&keyword=bình nước &order_by=price">Giá cao</a>
                      </li>
                      <li className="xans-record-">
                        <a href="/product/search.html?banner_action=&keyword=bình nước &order_by=favor">Sản phẩm yêu thích</a>
                      </li>
                      <li className="xans-record-">
                        <a href="/product/search.html?banner_action=&keyword=bình nước &order_by=hit_count">Lượt xem</a>
                      </li>
                    </ul>
                  </div>
                  <p className="noData displaynone">Không có kết quả tìm kiếm.</p>
                </div>
                <div className="xans-element- xans-search xans-search-result wrap-mProduct Product-list">
                  <ul className="prdList grid4">
                    <li id="anchorBoxId_705" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/24/display/1/" name="anchorBoxName_705"><img src="assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg" id="eListPrdImage705_" alt="Bình nước thủy tinh chịu nhiệt Borosilicate Lock&amp;Lock Metro Glass Jug 1.2L - LLG6100" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">348,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="category_add_basket('705','24', '1', 'A0000', false, '1', 'P0000BBD', 'B', 'F', '0');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('705', '24', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" login_status="T" individual-set="F" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/24/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình nước thủy tinh chịu nhiệt Borosilicate
                                Lock&amp;Lock Metro Glass Jug 1.2L - LLG6100</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ348,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ313,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_622" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nhựa-đựng-nước-locklock-dung-tích-520ml-abf659/622/category/24/display/1/" name="anchorBoxName_622"><img src="assets/imgs/37262e5c0751c1c8e8f28f3796c1983e.jpg" id="eListPrdImage622_" alt="Bình nhựa đựng nước Lock&amp;Lock dung tích 520ml ABF659" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">315,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="PRODUCTSUBMIT.sendLoginPage(622, '');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('622', '24', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" login_status="T" individual-set="F" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nhựa-đựng-nước-locklock-dung-tích-520ml-abf659/622/category/24/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình nhựa đựng nước Lock&amp;Lock dung tích 520ml
                                ABF659</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ315,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ283,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_601" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nước-hình-tai-thỏ-locklock-cute-bottle-380ml-abf652-2-màu/601/category/24/display/1/" name="anchorBoxName_601"><img src="assets/imgs/1cba0649f2c8fcf7bc0bf36d313f2fa6.jpg" id="eListPrdImage601_" alt="Bình nước hình tai thỏ Lock&amp;Lock cute bottle 380ML - ABF652 (2 màu)" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">242,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="PRODUCTSUBMIT.sendLoginPage(601, '');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('601', '24', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" login_status="T" individual-set="F" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nước-hình-tai-thỏ-locklock-cute-bottle-380ml-abf652-2-màu/601/category/24/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình nước hình tai thỏ Lock&amp;Lock cute bottle
                                380ML - ABF652 (2 màu)</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ242,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ218,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_642" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-Đựng-nước-locklock-eco-water-bottle-550ml-abf644/642/category/24/display/1/" name="anchorBoxName_642"><img src="assets/imgs/746b34c642c9352757fa4fbbd87715f5.jpg" id="eListPrdImage642_" alt="Bình Đựng Nước Lock&amp;Lock Eco Water Bottle  550ml -  ABF644" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">204,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="PRODUCTSUBMIT.sendLoginPage(601, '');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('642', '24', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" icon_status="off" login_status="T" individual-set="F" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-Đựng-nước-locklock-eco-water-bottle-550ml-abf644/642/category/24/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình Đựng Nước Lock&amp;Lock Eco Water Bottle 550ml -
                                ABF644</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ204,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ153,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923279700.png" className="icon_img" alt="Sản phẩm hết hàng" /></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_397" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nước-pet-locklock-hap728-900ml/397/category/31/display/1/" name="anchorBoxName_397"><img src="assets/imgs/9883b69d9169f74b558fa88fef03c36e.jpg" id="eListPrdImage397_" alt="Bình Nước PET Lock&amp;Lock HAP728 900Ml" /></a>
                            </div>
                            <div className="salebox displaynone">
                              <div className="sale_bg" style={{display: 'none'}}>
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">51,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon" /><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nước-pet-locklock-hap728-900ml/397/category/31/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình Nước PET Lock&amp;Lock HAP728 900Ml</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ51,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ46,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>10%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923279700.png" className="icon_img" alt="Sản phẩm hết hàng" /></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_625" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nước-one-touch-locklock-500ml-abf687/625/category/24/display/1/" name="anchorBoxName_625"><img src="assets/imgs/7d39f70c173752c1f879a464938fd754.jpg" id="eListPrdImage625_" alt="Bình nước One Touch Lock&amp;Lock 500ml - ABF687" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">290,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="PRODUCTSUBMIT.sendLoginPage(601, '');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('625', '24', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nước-one-touch-locklock-500ml-abf687/625/category/24/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình nước One Touch Lock&amp;Lock 500ml -
                                ABF687</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ290,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ217,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923279700.png" className="icon_img" alt="Sản phẩm hết hàng" /></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_617" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nước-locklock-eco-bottle-750ml-abf664-3-màu/617/category/24/display/1/" name="anchorBoxName_617"><img src="assets/imgs/dd9b18c1feb327b4edd20aab7b9ca6cd.jpg" id="eListPrdImage617_" alt="Bình nước Lock&amp;Lock Eco Bottle 750ml ABF664 (3 màu)" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">242,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="PRODUCTSUBMIT.sendLoginPage(601, '');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('617', '24', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nước-locklock-eco-bottle-750ml-abf664-3-màu/617/category/24/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình nước Lock&amp;Lock Eco Bottle 750ml ABF664 (3
                                màu)</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ242,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ181,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>25%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923279700.png" className="icon_img" alt="Sản phẩm hết hàng" /></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="anchorBoxId_398" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a className="BG-thumbnail" href="/product/bình-nước-pet-locklock-hap730-12l/398/category/31/display/1/" name="anchorBoxName_398"><img src="assets/imgs/a7898c5df0d152d899ae3d657e93d658.jpg" id="eListPrdImage398_" alt="Bình Nước Pet Lock&amp;Lock HAP730 1.2L" /></a>
                            </div>
                            <div className="salebox yet_slaebox displaynone">
                              <div className="sale_bg">
                                <span className="sale_text" />
                              </div>
                              <span className="displaynone hidden_pcustom" />
                              <span className="displaynone hidden_pprice">54,000</span>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" onclick="PRODUCTSUBMIT.sendLoginPage(601, '');" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" onclick="zoom('398', '31', '1','', '');" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a href="/product/bình-nước-pet-locklock-hap730-12l/398/category/31/display/1/" className><span style={{fontSize: '12px', color: '#555555', fontWeight: 'bold'}}>Bình Nước Pet Lock&amp;Lock HAP730 1.2L</span></a>
                          </h4>
                          <ul className="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold', textDecoration: 'line-through'}}>đ54,000</span><span id="span_product_tax_type_text" style={{textDecoration: 'line-through'}}>
                              </span>
                            </li>
                            <li className="xans-record-">
                              <span style={{fontSize: '16px', color: '#098ee6', fontWeight: 'bold'}}>đ49,000
                                <span style={{fontSize: '12px', color: '#f20000'}}>9%</span></span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span"><img src="assets/imgs/icon_202206291923279700.png" className="icon_img" alt="Sản phẩm hết hàng" /></span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="xans-element- xans-search xans-search-paging ec-base-paginate">
                  <a href="#none" className="first"><i className="fa-solid fa-angles-left" /></a>
                  <a href="#none"><i className="fa-solid fa-angle-left" /></a>
                  <ol>
                    <li className="xans-record-">
                      <a href="?banner_action=&keyword=b%C3%ACnh+n%C6%B0%E1%BB%9Bc+&page=1" className="this">1</a>
                    </li>
                    <li className="xans-record-">
                      <a href="?banner_action=&keyword=b%C3%ACnh+n%C6%B0%E1%BB%9Bc+&page=2" className="other">2</a>
                    </li>
                    <li className="xans-record-">
                      <a href="?banner_action=&keyword=b%C3%ACnh+n%C6%B0%E1%BB%9Bc+&page=3" className="other">3</a>
                    </li>
                    <li className="xans-record-">
                      <a href="?banner_action=&keyword=b%C3%ACnh+n%C6%B0%E1%BB%9Bc+&page=4" className="other">4</a>
                    </li>
                  </ol>
                  <a href="?banner_action=&keyword=b%C3%ACnh+n%C6%B0%E1%BB%9Bc+&page=2"><i className="fa-solid fa-angle-right" /></a>
                  <a href="?banner_action=&keyword=b%C3%ACnh+n%C6%B0%E1%BB%9Bc+&page=4" className="last"><i className="fa-solid fa-angles-right" /></a>
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
                          <ul className="swiper-wrapper" id="swiper-wrapper-46f5855a30d4d283" aria-live="off" style={{transitionDuration: '0ms', transform: 'translate3d(-2308px, 0px, 0px)'}}>
                            <li id="anchorBoxId_657" data-no={657} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={10} role="group" aria-label="11 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/display/2/" name="anchorBoxName_657"><img src="assets/imgs/54ee049db5bd93de73e473350656a8d7.jpg" id="eListPrdImage657_2" alt="Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">677000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_656" data-no={656} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={11} role="group" aria-label="12 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-hộp-bảo-quản-thủy-tinh-locklock-top-class-lbg-nhiều-dung-tích/656/category/1/display/2/" name="anchorBoxName_656"><img src="assets/imgs/2faa7e2913691496d15f71e30b72b1c7.jpg" id="eListPrdImage656_2" alt="Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top Class LBG (nhiều dung tích)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">159000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_133" data-no={133} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={12} role="group" aria-label="13 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/máy-sấy-tóc-locklock-trắng-ena136wht-2000-2200w/133/category/1/display/2/" name="anchorBoxName_133"><img src="assets/imgs/4da48587584418ed645889738f6253b3.jpg" id="eListPrdImage133_2" alt="Máy Sấy Tóc Lock&amp;Lock - Trắng ENA136WHT 2000-2200W" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">776000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_585" data-no={585} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={13} role="group" aria-label="14 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/llg510s3-hộp-đựng-thức-ăn-cho-bé-locklock-260ml3-hộp-nắp-màu-cam-silic/585/category/1/display/2/" name="anchorBoxName_585"><img src="assets/imgs/c9d5b5b9c6c9233d7c6a65cbc6dfe9c4.jpg" id="eListPrdImage585_2" alt="LLG510S3 - Hộp đựng thức ăn cho bé Lock&amp;Lock 260ml*3 hộp - Nắp màu cam, silicone màu cam" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">430000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_733" data-no={733} className="swiper-slide xans-record-" data-swiper-slide-index={0} role="group" aria-label="1 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/" name="anchorBoxName_733"><img src="assets/imgs/c0c85a1b444880b3ed20bec0d1c7bc56.jpg" id="eListPrdImage733_2" alt="Bộ nồi chảo chống dính Suit Lock&amp;Lock Detachable 18cm - 22cm - 26cm tay cầm có thể tháo rời màu xanh mint - SDE1181IHS01" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">2274000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_720" data-no={720} className="swiper-slide xans-record-" data-swiper-slide-index={1} role="group" aria-label="2 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/" name="anchorBoxName_720"><img src="assets/imgs/eaca666828fe222a66cbe45c34c1912f.jpg" id="eListPrdImage720_2" alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">729000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_713" data-no={713} className="swiper-slide xans-record-" data-swiper-slide-index={2} role="group" aria-label="3 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/" name="anchorBoxName_713"><img src="assets/imgs/33c7128a35a474db56f084bab283f96f.jpg" id="eListPrdImage713_2" alt="Nồi cơm điện Lock&amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1970000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_700" data-no={700} className="swiper-slide xans-record- swiper-slide-prev" data-swiper-slide-index={3} role="group" aria-label="4 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/" name="anchorBoxName_700"><img src="assets/imgs/2a6306c708febd507c98cbde702280be.jpg" id="eListPrdImage700_2" alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock EJF357 (5.2 Lít) - 2 màu" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">5215000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_699" data-no={699} className="swiper-slide xans-record- swiper-slide-active" data-swiper-slide-index={4} role="group" aria-label="5 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bình-giữ-nhiệt-locklock-bằng-thép-không-rỉ-riga-tumbler-vietnam-editio/699/category/1/display/2/" name="anchorBoxName_699"><img src="assets/imgs/dd070baebdf09876b52b5848d6461606.jpg" id="eListPrdImage699_2" alt="Bình giữ nhiệt Lock&amp;Lock bằng thép không rỉ Riga Tumbler Vietnam Edition 897ml (4 phiên bản) - LHC4160" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">715000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_646" data-no={646} className="swiper-slide xans-record- swiper-slide-next" data-swiper-slide-index={5} role="group" aria-label="6 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/lò-nướng-chân-không-kết-hợp-chức-năng-hấp-locknlock-steam-air-fryer-ov/646/category/1/display/2/" name="anchorBoxName_646"><img src="assets/imgs/025668ff6ae6f1ece71dcbebc286c17e.jpg" id="eListPrdImage646_2" alt="Lò nướng chân không kết hợp chức năng hấp LocknLock Steam Air Fryer Oven 12.5L, 220-240V, 50/60Hz, 985-1635W - EJF693GRY" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">7990000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_652" data-no={652} className="swiper-slide xans-record-" data-swiper-slide-index={6} role="group" aria-label="7 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-điện-đa-năng-locknlock-multi-cooker-220-240v-5060hz-1300-1500w-4l-/652/category/1/display/2/" name="anchorBoxName_652"><img src="assets/imgs/ce24b628086a33a6b70975f9184bde89.jpg" id="eListPrdImage652_2" alt="Nồi điện đa năng LocknLock Multi Cooker 220-240V, 50/60Hz, 1300-1500W, 4L - White - EJP544WHT" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">2200000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_49" data-no={49} className="swiper-slide xans-record-" data-swiper-slide-index={7} role="group" aria-label="8 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/máy-nướng-bánh-mì-lock-lock-ejb221blu-730-870-w/49/category/1/display/2/" name="anchorBoxName_49"><img src="assets/imgs/24b0ea8cb10b6103597383746ab87175.jpg" id="eListPrdImage49_2" alt="Máy Nướng Bánh Mì Lock&amp; Lock EJB221BLU (730 - 870 W)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1043000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_414" data-no={414} className="swiper-slide xans-record-" data-swiper-slide-index={8} role="group" aria-label="9 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/enr156blu-máy-tăm-nước-không-dây-locklock-cordless-oral-irrigator-200m/414/category/1/display/2/" name="anchorBoxName_414"><img src="assets/imgs/077e0518baac8c7d9c58b03a17bf322d.jpg" id="eListPrdImage414_2" alt="ENR156BLU - Máy tăm nước không dây Lock&amp;Lock Cordless Oral Irrigator, 200ml - Màu xanh da trời" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1263000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_541" data-no={541} className="swiper-slide xans-record-" data-swiper-slide-index={9} role="group" aria-label="10 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/ejm501dgry-máy-đánh-trứng-locklock-hand-mixer-220-240v-5060hz-250-300w/541/category/1/display/2/" name="anchorBoxName_541"><img src="assets/imgs/7bde3ac11327a16283b815664fe1a592.jpg" id="eListPrdImage541_2" alt="EJM501DGRY - Máy đánh trứng Lock&amp;Lock Hand Mixer 220-240V, 50/60Hz, 250-300W - Màu xám đậm" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">973000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_657" data-no={657} className="swiper-slide xans-record-" data-swiper-slide-index={10} role="group" aria-label="11 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chảo-nhôm-chống-dính-suit-ih-locklock-dùng-được-bếp-từ-nhiều-phân-/657/category/1/display/2/" name="anchorBoxName_657"><img src="assets/imgs/54ee049db5bd93de73e473350656a8d7.jpg" id="eListPrdImage657_2" alt="Nồi chảo nhôm chống dính Suit IH Lock&amp;Lock dùng được bếp từ ( nhiều phân loại nồi , chảo)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">677000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_656" data-no={656} className="swiper-slide xans-record-" data-swiper-slide-index={11} role="group" aria-label="12 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-hộp-bảo-quản-thủy-tinh-locklock-top-class-lbg-nhiều-dung-tích/656/category/1/display/2/" name="anchorBoxName_656"><img src="assets/imgs/2faa7e2913691496d15f71e30b72b1c7.jpg" id="eListPrdImage656_2" alt="Bộ hộp bảo quản thủy tinh Lock&amp;Lock Top Class LBG (nhiều dung tích)" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">159000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_133" data-no={133} className="swiper-slide xans-record-" data-swiper-slide-index={12} role="group" aria-label="13 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/máy-sấy-tóc-locklock-trắng-ena136wht-2000-2200w/133/category/1/display/2/" name="anchorBoxName_133"><img src="assets/imgs/4da48587584418ed645889738f6253b3.jpg" id="eListPrdImage133_2" alt="Máy Sấy Tóc Lock&amp;Lock - Trắng ENA136WHT 2000-2200W" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">776000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_585" data-no={585} className="swiper-slide xans-record-" data-swiper-slide-index={13} role="group" aria-label="14 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/llg510s3-hộp-đựng-thức-ăn-cho-bé-locklock-260ml3-hộp-nắp-màu-cam-silic/585/category/1/display/2/" name="anchorBoxName_585"><img src="assets/imgs/c9d5b5b9c6c9233d7c6a65cbc6dfe9c4.jpg" id="eListPrdImage585_2" alt="LLG510S3 - Hộp đựng thức ăn cho bé Lock&amp;Lock 260ml*3 hộp - Nắp màu cam, silicone màu cam" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">430000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_733" data-no={733} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={0} role="group" aria-label="1 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/" name="anchorBoxName_733"><img src="assets/imgs/c0c85a1b444880b3ed20bec0d1c7bc56.jpg" id="eListPrdImage733_2" alt="Bộ nồi chảo chống dính Suit Lock&amp;Lock Detachable 18cm - 22cm - 26cm tay cầm có thể tháo rời màu xanh mint - SDE1181IHS01" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">2274000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_720" data-no={720} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={1} role="group" aria-label="2 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/" name="anchorBoxName_720"><img src="assets/imgs/eaca666828fe222a66cbe45c34c1912f.jpg" id="eListPrdImage720_2" alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">729000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_713" data-no={713} className="swiper-slide xans-record- swiper-slide-duplicate" data-swiper-slide-index={2} role="group" aria-label="3 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/" name="anchorBoxName_713"><img src="assets/imgs/33c7128a35a474db56f084bab283f96f.jpg" id="eListPrdImage713_2" alt="Nồi cơm điện Lock&amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">1970000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                            <li id="anchorBoxId_700" data-no={700} className="swiper-slide xans-record- swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index={3} role="group" aria-label="4 / 14" style={{width: '274.5px', marginRight: '14px'}}>
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a className="BG-thumbnail" href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/" name="anchorBoxName_700"><img src="assets/imgs/2a6306c708febd507c98cbde702280be.jpg" id="eListPrdImage700_2" alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;Lock EJF357 (5.2 Lít) - 2 màu" /></a>
                                    </div>
                                    <div className="salebox displaynone">
                                      <div className="sale_bg" style={{display: 'none'}}>
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">5215000</span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon"><img src="assets/imgs/btn_list_cart.gif" alt="Thêm vào giỏ hàng" className="ec-admin-icon cart" /></span><span className="view-icon"><img src="assets/imgs/btn_prd_zoom.gif" style={{cursor: 'pointer'}} alt="Phóng to hình ảnh sản phẩm" /></span><span className="wish-span"><img src="assets/imgs/btn_wish_before.png" className="icon_img ec-product-listwishicon" alt="Trước đăng ký Sản phẩm yêu thích" /></span>
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
                                </div>
                              </div>
                            </li>
                          </ul>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                        </div>
                        <div className="swiper-button-prev swiper-button-prev2" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-46f5855a30d4d283" />
                        <div className="swiper-button-next swiper-button-next2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-46f5855a30d4d283" />
                        <div className="swiper-pagination2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                          <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 3" aria-current="true" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 4" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 5" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 6" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 7" />
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
            <span><a href="/order/basket.html">1</a> Sản Phẩm</span>
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

export default Search