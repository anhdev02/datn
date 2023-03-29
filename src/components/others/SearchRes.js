import React from "react";

const SearchRes = () => {
  return (
    <div id="contents">
      <div class="root_width mobile_width">
        <div id="shopQ">
          <div class="xans-element- xans-product xans-product-searchdata typeTop search_ndisplaynone xans-record-">
            <div class="xans-product-normalmenu-m">
              <p class="xans-element- xans-product xans-product-searchdata prdCount xans-record-">
                Tổng
                <strong>31</strong>
                cái
              </p>
              <div class="xans-element- xans-product xans-product-searchdata sort xans-record-">
                <div>
                  <select name="order_by" id="order_by">
                    <option value="" selected>
                      ::: Lựa chọn tiêu chuẩn :::
                    </option>
                    <option value="recent">Sản phẩm mới</option>
                    <option value="priceasc">Giá thấp</option>
                    <option value="price">Giá cao</option>
                    <option value="favor">Sản phẩm yêu thích</option>
                    <option value="hit_count">Lượt xem</option>
                  </select>
                </div>
              </div>
            </div>
            <form
              class="searchField"
              id="ec-product-fixed-form"
              action="/product/search.html"
              method="get"
            >
              <div class="xans-element- xans-product xans-product-hotkeyword keywordArea">
                <strong class="heading">Từ khóa phổ biến</strong>
                <ul class="list">
                  <li class="xans-record-">
                    <a href="/product/search.html?keyword=B%C3%ACnh+gi%E1%BB%AF+nhi%E1%BB%87t&sort_method=">
                      Bình giữ nhiệt
                    </a>
                  </li>
                  <li class="xans-record-">
                    <a href="/product/search.html?keyword=H%E1%BB%99p+c%C6%A1m+gi%E1%BB%AF+nhi%E1%BB%87t&sort_method=">
                      Hộp cơm giữ nhiệt
                    </a>
                  </li>
                  <li class="xans-record-">
                    <a href="/product/search.html?keyword=N%E1%BB%93i+chi%C3%AAn+kh%C3%B4ng+d%E1%BA%A7u&sort_method=">
                      Nồi chiên không dầu
                    </a>
                  </li>
                  <li class="xans-record-">
                    <a href="/product/search.html?keyword=b%C3%A0n+ch%E1%BA%A3i&sort_method=">
                      bàn chải
                    </a>
                  </li>
                </ul>
              </div>
              <div class="searchCondition shopQShow">
                <div class="xans-element- xans-product xans-product-fixedsearchfilterlist toggleArea selected">
                  <div class="contents">
                    <ul class="xans-element- xans-product xans-product-filterform">
                      <li class=" "></li>
                    </ul>
                    <div class="withinInput displaynone">
                      <div class="search">
                        <button type="button" class="btnDelete">
                          Xóa
                        </button>
                        <button type="button" class="btnResearch btnStrong">
                          Tìm kiếm
                        </button>
                      </div>
                    </div>
                    <div class="priceInput displaynone"></div>
                    <div class="slider displaynone"></div>
                    <p class="value displaynone"></p>
                  </div>
                </div>
              </div>
            </form>
            <p class="moreTags">
              <button
                type="button"
                id="ec-product-searchdata-mobile-button"
                class="btnSearchdata displaynone"
              >
                Tìm kiếm sản phẩm
              </button>
            </p>
            <div class="empty displaynone">
              <h2>Bạn muốn tìm gì?</h2>
              <div class="wrap-mobile-search">
                <form
                  id="searchBarForm"
                  name=""
                  action="/product/search.html"
                  method="get"
                  target="_self"
                  enctype="multipart/form-data"
                >
                  <input
                    id="banner_action"
                    name="banner_action"
                    value=""
                    type="hidden"
                  />
                  <div
                    id="search_box"
                    class="xans-element- xans-layout xans-layout-searchheader searchBox"
                  >
                    <fieldset>
                      <legend>Tìm Kiếm</legend>
                      <div class="searchForm">
                        <input
                          id="keyword"
                          name="keyword"
                          class="inputTypeText"
                          placeholder=""
                          value=""
                          type="text"
                        />
                      </div>
                    </fieldset>
                    <h2 class="Hotkeyword">Từ khóa nồi tiếng</h2>
                    <div class="xans-element- xans-search xans-search-hotkeyword">
                      <ul class="Hotkeyword-ul">
                        <li class="xans-record-">
                          <a href="/product/search.html?keyword=Bình giữ nhiệt">
                            Bình giữ nhiệt
                          </a>
                        </li>
                        <li class="xans-record-">
                          <a href="/product/search.html?keyword=Hộp cơm giữ nhiệt">
                            Hộp cơm giữ nhiệt
                          </a>
                        </li>
                        <li class="xans-record-">
                          <a href="/product/search.html?keyword=Nồi chiên không dầu">
                            Nồi chiên không dầu
                          </a>
                        </li>
                        <li class="xans-record-">
                          <a href="/product/search.html?keyword=bàn chải">
                            bàn chải
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="xans-element- xans-search xans-search-recentkeyword">
                      <p class="">Không có từ khóa nào.</p>
                      <ul class="displaynone">
                        <li class="">
                          <button type="button" class="btnDelete">
                            Xoá
                          </button>
                        </li>
                        <li class="">
                          <button type="button" class="btnDelete">
                            Xoá
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div class="recommended-div">
                <h2 class="recommended-h2">Sản phẩm LocknLock đề cử</h2>
                <div class="in-article root_width Product-list-slide">
                  <div class="xans-element- xans-product xans-product-listmain-1 xans-product-listmain xans-product-1 mProduct swiper-container swiper-container2">
                    <ul class="swiper-wrapper">
                      <li
                        id="anchorBoxId_739"
                        class="swiper-slide xans-record-"
                      >
                        <div class="inner">
                          <div class="thumbnail">
                            <div class="prdImg">
                              <div class="wrap-thumbnail">
                                <a
                                  class="BG-thumbnail"
                                  href="/product/chảo-đúc-locklock-master-deep-pan-lmd1245-có-nắp-24cm/739/category/1/display/2/"
                                  name="anchorBoxName_739"
                                >
                                  <img
                                    src="./assets/imgs/aa686bcc8eaea386413d4ab85d9cd3ea.jpg"
                                    id="eListPrdImage739_2"
                                    alt="Chảo đúc Lock&amp;amp;Lock Master Deep Pan LMD1245 có nắp 24cm"
                                  />
                                </a>
                              </div>
                              <div class="salebox yet_slaebox displaynone">
                                <div class="sale_bg">
                                  <span class="sale_text"></span>
                                </div>
                                <span class="displaynone hidden_pcustom"></span>
                                <span class="displaynone hidden_pprice">
                                  1745000
                                </span>
                              </div>

                              <div class="wrap-list-icon">
                                <span class="wish-span">
                                  <img
                                    src="./assets/imgs/btn_wish_before.png"
                                    class="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="description">
                            <div class="color displaynone"></div>
                            <h4 class="name">
                              <a
                                href="/product/chảo-đúc-locklock-master-deep-pan-lmd1245-có-nắp-24cm/739/category/1/display/2/"
                                class=""
                              >
                                Chảo đúc Lock&Lock Master Deep Pan LMD1245 có
                                nắp 24cm
                              </a>
                            </h4>
                            <ul class="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                              <li class="xans-record-">
                                <span
                                  style={{ fontSize: '16px', color: '#0079e3', fontWeight: 'bold', textDecoration: 'line-through'}}
                                >
                                  đ1,745,000
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{textDecoration: 'line-through'}}
                                ></span>
                              </li>
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                                >
                                  đ1,570,000
                                  <span style={{"fontSize":"12px","color":"#f20000"}}>
                                    10%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div class="wrap-new-icon">
                              <span class="wrap-new-span">
                                <img
                                  src="./assets/imgs/icon_202206301209217600.png"
                                  class="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="anchorBoxId_733"
                        class="swiper-slide xans-record-"
                      >
                        <div class="inner">
                          <div class="thumbnail">
                            <div class="prdImg">
                              <div class="wrap-thumbnail">
                                <a
                                  class="BG-thumbnail"
                                  href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/"
                                  name="anchorBoxName_733"
                                >
                                  <img
                                    src="./assets/imgs/aa686bcc8eaea386413d4ab85d9cd3ea.jpg"
                                    id="eListPrdImage733_2"
                                    alt="Bộ nồi chảo chống dính Suit Lock&amp;amp;Lock Detachable 18cm - 22cm - 26cm tay cầm có thể tháo rời màu xanh mint - SDE1181IHS01"
                                  />
                                </a>
                              </div>
                              <div class="salebox yet_slaebox displaynone">
                                <div class="sale_bg">
                                  <span class="sale_text"></span>
                                </div>
                                <span class="displaynone hidden_pcustom"></span>
                                <span class="displaynone hidden_pprice">
                                  2274000
                                </span>
                              </div>

                              <div class="wrap-list-icon">
                                <span class="wish-span">
                                  <img
                                    src="./assets/imgs/btn_wish_before.png"
                                    class="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="description">
                            <div class="color displaynone"></div>
                            <h4 class="name">
                              <a
                                href="/product/bộ-nồi-chảo-chống-dính-suit-locklock-detachable-18cm-22cm-26cm-tay-cầm/733/category/1/display/2/"
                                class=""
                              >
                                Bộ nồi chảo chống dính Suit Lock&Lock Detachable
                                18cm - 22cm - 26cm tay cầm có thể tháo rời màu
                                xanh mint - SDE1181IHS01
                              </a>
                            </h4>
                            <ul class="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                                >
                                  đ2,274,000
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{"textDecoration":"line-through"}}
                                ></span>
                              </li>
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                                >
                                  đ2,047,000
                                  <span style={{"fontSize":"12px","color":"#f20000"}}>
                                    10%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div class="wrap-new-icon">
                              <span class="wrap-new-span">
                                <img
                                  src="./assets/imgs/icon_202206301209217600.png"
                                  class="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="anchorBoxId_720"
                        class="swiper-slide xans-record-"
                      >
                        <div class="inner">
                          <div class="thumbnail">
                            <div class="prdImg">
                              <div class="wrap-thumbnail">
                                <a
                                  class="BG-thumbnail"
                                  href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/"
                                  name="anchorBoxName_720"
                                >
                                  <img
                                    src="./assets/imgs/aa686bcc8eaea386413d4ab85d9cd3ea.jpg"
                                    id="eListPrdImage720_2"
                                    alt="Bộ cây lau nhà thông minh tự động tách nước bẩn SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ nhật đa năng"
                                  />
                                </a>
                              </div>
                              <div class="salebox yet_slaebox displaynone">
                                <div class="sale_bg">
                                  <span class="sale_text"></span>
                                </div>
                                <span class="displaynone hidden_pcustom"></span>
                                <span class="displaynone hidden_pprice">
                                  729000
                                </span>
                              </div>

                              <div class="wrap-list-icon">
                                <span class="wish-span">
                                  <img
                                    src="./assets/imgs/btn_wish_before.png"
                                    class="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="description">
                            <div class="color displaynone"></div>
                            <h4 class="name">
                              <a
                                href="/product/bộ-cây-lau-nhà-thông-minh-tự-động-tách-nước-bẩn-sweepy-etm973-25l-vắt-/720/category/1/display/2/"
                                class=""
                              >
                                Bộ cây lau nhà thông minh tự động tách nước bẩn
                                SWEEPY ETM973 - 2.5L - Vắt 360 độ - Cây lau chữ
                                nhật đa năng
                              </a>
                            </h4>
                            <ul class="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                                >
                                  đ729,000
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{"textDecoration":"line-through"}}
                                ></span>
                              </li>
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                                >
                                  đ656,000
                                  <span style={{"fontSize":"12px","color":"#f20000"}}>
                                    10%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div class="wrap-new-icon">
                              <span class="wrap-new-span">
                                <img
                                  src="./assets/imgs/icon_202206301209217600.png"
                                  class="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="anchorBoxId_713"
                        class="swiper-slide xans-record-"
                      >
                        <div class="inner">
                          <div class="thumbnail">
                            <div class="prdImg">
                              <div class="wrap-thumbnail">
                                <a
                                  class="BG-thumbnail"
                                  href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/"
                                  name="anchorBoxName_713"
                                >
                                  <img
                                    src="./assets/imgs/aa686bcc8eaea386413d4ab85d9cd3ea.jpg"
                                    id="eListPrdImage713_2"
                                    alt="Nồi cơm điện Lock&amp;amp;Lock Compact Rice Cooker 1.2L màu đen EJR346BLK"
                                  />
                                </a>
                              </div>
                              <div class="salebox yet_slaebox displaynone">
                                <div class="sale_bg">
                                  <span class="sale_text"></span>
                                </div>
                                <span class="displaynone hidden_pcustom"></span>
                                <span class="displaynone hidden_pprice">
                                  1970000
                                </span>
                              </div>

                              <div class="wrap-list-icon">
                                <span class="wish-span">
                                  <img
                                    src="./assets/imgs/btn_wish_before.png"
                                    class="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="description">
                            <div class="color displaynone"></div>
                            <h4 class="name">
                              <a
                                href="/product/nồi-cơm-điện-locklock-compact-rice-cooker-12l-màu-đen-ejr346blk/713/category/1/display/2/"
                                class=""
                              >
                                Nồi cơm điện Lock&Lock Compact Rice Cooker 1.2L
                                màu đen EJR346BLK
                              </a>
                            </h4>
                            <ul class="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                                >
                                  đ1,970,000
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{"textDecoration":"line-through"}}
                                ></span>
                              </li>
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                                >
                                  đ1,477,000
                                  <span style={{"fontSize":"12px","color":"#f20000"}}>
                                    25%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div class="wrap-new-icon">
                              <span class="wrap-new-span">
                                <img
                                  src="./assets/imgs/icon_202206301209217600.png"
                                  class="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="anchorBoxId_700"
                        class="swiper-slide xans-record-"
                      >
                        <div class="inner">
                          <div class="thumbnail">
                            <div class="prdImg">
                              <div class="wrap-thumbnail">
                                <a
                                  class="BG-thumbnail"
                                  href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/"
                                  name="anchorBoxName_700"
                                >
                                  <img
                                    src="./assets/imgs/aa686bcc8eaea386413d4ab85d9cd3ea.jpg"
                                    id="eListPrdImage700_2"
                                    alt="Nồi Chiên Không Dầu Điện Tử Lock&amp;amp;Lock EJF357 (5.2 Lít) - 2 màu"
                                  />
                                </a>
                              </div>
                              <div class="salebox yet_slaebox displaynone">
                                <div class="sale_bg">
                                  <span class="sale_text"></span>
                                </div>
                                <span class="displaynone hidden_pcustom"></span>
                                <span class="displaynone hidden_pprice">
                                  5215000
                                </span>
                              </div>

                              <div class="wrap-list-icon">
                                <span class="wish-span">
                                  <img
                                    src="./assets/imgs/btn_wish_before.png"
                                    class="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="description">
                            <div class="color displaynone"></div>
                            <h4 class="name">
                              <a
                                href="/product/nồi-chiên-không-dầu-Điện-tử-locklock-ejf357-52-lít-2-màu/700/category/1/display/2/"
                                class=""
                              >
                                Nồi Chiên Không Dầu Điện Tử Lock&Lock EJF357
                                (5.2 Lít) - 2 màu
                              </a>
                            </h4>
                            <ul class="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                                >
                                  đ5,215,000
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{"textDecoration":"line-through"}}
                                ></span>
                              </li>
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                                >
                                  đ3,090,000
                                  <span style={{"fontSize":"12px","color":"#f20000"}}>
                                    41%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div class="wrap-new-icon">
                              <span class="wrap-new-span">
                                <img
                                  src="./assets/imgs/icon_202206301209217600.png"
                                  class="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="anchorBoxId_699"
                        class="swiper-slide xans-record-"
                      >
                        <div class="inner">
                          <div class="thumbnail">
                            <div class="prdImg">
                              <div class="wrap-thumbnail">
                                <a
                                  class="BG-thumbnail"
                                  href="/product/bình-giữ-nhiệt-locklock-bằng-thép-không-rỉ-riga-tumbler-vietnam-editio/699/category/1/display/2/"
                                  name="anchorBoxName_699"
                                >
                                  <img
                                    src="./assets/imgs/aa686bcc8eaea386413d4ab85d9cd3ea.jpg"
                                    id="eListPrdImage699_2"
                                    alt="Bình giữ nhiệt Lock&amp;amp;Lock bằng thép không rỉ Riga Tumbler Vietnam Edition 897ml (4 phiên bản) - LHC4160"
                                  />
                                </a>
                              </div>
                              <div class="salebox yet_slaebox displaynone">
                                <div class="sale_bg">
                                  <span class="sale_text"></span>
                                </div>
                                <span class="displaynone hidden_pcustom"></span>
                                <span class="displaynone hidden_pprice">
                                  715000
                                </span>
                              </div>

                              <div class="wrap-list-icon">
                                <span class="wish-span">
                                  <img
                                    src="./assets/imgs/btn_wish_before.png"
                                    class="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="description">
                            <div class="color displaynone"></div>
                            <h4 class="name">
                              <a
                                href="/product/bình-giữ-nhiệt-locklock-bằng-thép-không-rỉ-riga-tumbler-vietnam-editio/699/category/1/display/2/"
                                class=""
                              >
                                Bình giữ nhiệt Lock&Lock bằng thép không rỉ Riga
                                Tumbler Vietnam Edition 897ml (4 phiên bản) -
                                LHC4160
                              </a>
                            </h4>
                            <ul class="xans-element- xans-product xans-product-listitem-1 xans-product-listitem xans-product-1 spec">
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                                >
                                  đ715,000
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{"textDecoration":"line-through"}}
                                ></span>
                              </li>
                              <li class="xans-record-">
                                <span
                                  style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                                      
                                >
                                  đ536,000
                                  <span style={{"fontSize":"12px","color":"#f20000"}}>
                                    25%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div class="wrap-new-icon">
                              <span class="wrap-new-span">
                                <img
                                  src="./assets/imgs/icon_202206301209217600.png"
                                  class="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                                <img
                                  src="./assets/imgs/icon_202206301209130800.png"
                                  class="icon_img"
                                  alt="Sản phẩm mới"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="swiper-pagination2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xans-element- xans-search xans-search-result wrap-mProduct Product-list">
          <ul class="prdList grid4">
            <li id="anchorBoxId_705" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/24/display/1/"
                        name="anchorBoxName_705"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage705_"
                          alt="Bình nước thủy tinh chịu nhiệt Borosilicate Lock&amp;amp;Lock Metro Glass Jug 1.2L - LLG6100"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">348,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/24/display/1/"
                      class=""
                    >
                      Bình nước thủy tinh chịu nhiệt Borosilicate Lock&Lock
                      Metro Glass Jug 1.2L - LLG6100
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ348,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ313,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>10%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span"></span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_622" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nhựa-đựng-nước-locklock-dung-tích-520ml-abf659/622/category/24/display/1/"
                        name="anchorBoxName_622"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage622_"
                          alt="Bình nhựa đựng nước Lock&amp;amp;Lock dung tích 520ml ABF659"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">315,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nhựa-đựng-nước-locklock-dung-tích-520ml-abf659/622/category/24/display/1/"
                      class=""
                    >
                      Bình nhựa đựng nước Lock&Lock dung tích 520ml ABF659
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ315,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ283,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>10%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span"></span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_601" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-hình-tai-thỏ-locklock-cute-bottle-380ml-abf652-2-màu/601/category/24/display/1/"
                        name="anchorBoxName_601"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage601_"
                          alt="Bình nước hình tai thỏ Lock&amp;amp;Lock cute bottle 380ML - ABF652 (2 màu)"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">242,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-hình-tai-thỏ-locklock-cute-bottle-380ml-abf652-2-màu/601/category/24/display/1/"
                      class=""
                    >
                      Bình nước hình tai thỏ Lock&Lock cute bottle 380ML -
                      ABF652 (2 màu)
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ242,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ218,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>10%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span"></span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_642" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-Đựng-nước-locklock-eco-water-bottle-550ml-abf644/642/category/24/display/1/"
                        name="anchorBoxName_642"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage642_"
                          alt="Bình Đựng Nước Lock&amp;amp;Lock Eco Water Bottle  550ml -  ABF644"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">204,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-Đựng-nước-locklock-eco-water-bottle-550ml-abf644/642/category/24/display/1/"
                      class=""
                    >
                      Bình Đựng Nước Lock&Lock Eco Water Bottle 550ml - ABF644
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ204,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ153,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>25%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_636" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-locklock-one-touch-550ml-abf645/636/category/24/display/1/"
                        name="anchorBoxName_636"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage636_"
                          alt="Bình Nước Lock&amp;amp;Lock One Touch  550ml - ABF645"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">217,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-locklock-one-touch-550ml-abf645/636/category/24/display/1/"
                      class=""
                    >
                      Bình Nước Lock&Lock One Touch 550ml - ABF645
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ217,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ163,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>25%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_625" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-one-touch-locklock-500ml-abf687/625/category/24/display/1/"
                        name="anchorBoxName_625"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage625_"
                          alt="Bình nước One Touch Lock&amp;amp;Lock 500ml - ABF687"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">290,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-one-touch-locklock-500ml-abf687/625/category/24/display/1/"
                      class=""
                    >
                      Bình nước One Touch Lock&Lock 500ml - ABF687
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ290,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ217,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>25%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_617" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-locklock-eco-bottle-750ml-abf664-3-màu/617/category/24/display/1/"
                        name="anchorBoxName_617"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage617_"
                          alt="Bình nước Lock&amp;amp;Lock Eco Bottle 750ml ABF664 (3 màu)"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">242,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-locklock-eco-bottle-750ml-abf664-3-màu/617/category/24/display/1/"
                      class=""
                    >
                      Bình nước Lock&Lock Eco Bottle 750ml ABF664 (3 màu)
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ242,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ181,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>25%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_398" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-pet-locklock-hap730-12l/398/category/31/display/1/"
                        name="anchorBoxName_398"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage398_"
                          alt="Bình Nước Pet Lock&amp;amp;Lock HAP730 1.2L"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">54,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-pet-locklock-hap730-12l/398/category/31/display/1/"
                      class=""
                    >
                      Bình Nước Pet Lock&Lock HAP730 1.2L
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ54,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ49,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>9%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_397" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-pet-locklock-hap728-900ml/397/category/31/display/1/"
                        name="anchorBoxName_397"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage397_"
                          alt="Bình Nước PET Lock&amp;amp;Lock HAP728 900Ml"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">51,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-pet-locklock-hap728-900ml/397/category/31/display/1/"
                      class=""
                    >
                      Bình Nước PET Lock&Lock HAP728 900Ml
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ51,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ46,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>10%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li id="anchorBoxId_396" class="xans-record-">
              <div class="inner">
                <div class="thumbnail">
                  <div class="prdImg">
                    <div class="wrap-thumbnail">
                      <a
                        class="BG-thumbnail"
                        href="/product/bình-nước-pet-locklock-hap731-15l/396/category/31/display/1/"
                        name="anchorBoxName_396"
                      >
                        <img
                          src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg"
                          id="eListPrdImage396_"
                          alt="Bình Nước Pet Lock&amp;amp;Lock HAP731 1.5L"
                        />
                      </a>
                    </div>
                    <div class="salebox yet_slaebox displaynone">
                      <div class="sale_bg">
                        <span class="sale_text"></span>
                      </div>
                      <span class="displaynone hidden_pcustom"></span>
                      <span class="displaynone hidden_pprice">65,000</span>
                    </div>

                    <div class="wrap-list-icon">
                      <span class="wish-span">
                        <img
                          src="./assets/imgs/btn_wish_before.png"
                          class="icon_img ec-product-listwishicon"
                          alt="Trước đăng ký Sản phẩm yêu thích"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <div class="color displaynone"></div>
                  <h4 class="name">
                    <a
                      href="/product/bình-nước-pet-locklock-hap731-15l/396/category/31/display/1/"
                      class=""
                    >
                      Bình Nước Pet Lock&Lock HAP731 1.5L
                    </a>
                  </h4>
                  <ul class="xans-element- xans-search xans-search-listitem spec xans-product-listitem">
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold","textDecoration":"line-through"}}
                      >
                        đ65,000
                      </span>
                      <span
                        id="span_product_tax_type_text"
                        style={{"textDecoration":"line-through"}}
                      ></span>
                    </li>
                    <li class="xans-record-">
                      <span
                        style={{"fontSize":"16px","color":"#0079e3","fontWeight":"bold"}}
                      >
                        đ58,000
                        <span style={{"fontSize":"12px","color":"#f20000"}}>11%</span>
                      </span>
                    </li>
                  </ul>
                  <div class="wrap-new-icon">
                    <span class="wrap-new-span">
                      <img
                        src="./assets/imgs/icon_202206301209320000.png"
                        class="icon_img"
                        alt="Sản phẩm hết hàng"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="xans-element- xans-search xans-search-paging ec-base-paginate">
          <a href="#none" class="first">
            <i class="fa-solid fa-angles-left"></i>
          </a>
          <a href="#none">
            <i class="fa-solid fa-angle-left"></i>
          </a>
          <ol>
            <li class="xans-record-">
              <a
                href="?banner_action=&keyword=B%C3%ACnh+n%C6%B0%E1%BB%9Bc&page=1"
                class="this"
              >
                1
              </a>
            </li>
            <li class="xans-record-">
              <a
                href="?banner_action=&keyword=B%C3%ACnh+n%C6%B0%E1%BB%9Bc&page=2"
                class="other"
              >
                2
              </a>
            </li>
          </ol>
          <a href="?banner_action=&keyword=B%C3%ACnh+n%C6%B0%E1%BB%9Bc&page=2">
            <i class="fa-solid fa-angle-right"></i>
          </a>
          <a
            href="?banner_action=&keyword=B%C3%ACnh+n%C6%B0%E1%BB%9Bc&page=4"
            class="last"
          >
            <i class="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchRes;
