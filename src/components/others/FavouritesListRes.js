import React from 'react'

const FavouritesListRes = () => {
  return (
    <div id="contents">
        <div className="root_width myshop_width">
          <div className="xans-element- xans-myshop xans-myshop-wishlist wishlistdisplaynone0 xans-record-">
            <div className="titleArea-new">
              <h2>Danh Sách Yêu Thích</h2>
            </div>
            <div className="xans-element- xans-myshop xans-myshop-wishlistbutton select xans-record-">
              <a href="#none" className="all-wish-list" id="product_select_all" data-status="off">Chọn tất cả</a>
              <a href="#none" className="del-right-wish">Xóa mục đã chọn</a>
            </div>
            <div className="xans-element- xans-myshop xans-myshop-wishlistitem">
              <div className="ec-base-prdInfo xans-record-">
                <input name="wish_idx[]" id="wish_idx_0" className defaultValue={6336} type="checkbox" />
                <div className="prdBox">
                  <div className="thumbnail">
                    <a href="/product/lò-nướng-chân-không-kết-hợp-chức-năng-hấp-locknlock-steam-air-fryer-ov/646/category/1/"><img src="./assets/imgs/a147cf92e3a8ff96bcf2acabfcbdd06d.jpg" alt="" width={71} height={71} /></a>
                  </div>
                  <div className="description">
                    <strong className="prdName" title="Product"><a href="/product/lò-nướng-chân-không-kết-hợp-chức-năng-hấp-locknlock-steam-air-fryer-ov/646/category/1/" className="ec-product-name">Lò nướng chân không kết hợp chức năng hấp LocknLock
                        Steam Air Fryer Oven 12.5L, 220-240V, 50/60Hz,
                        985-1635W - EJF693GRY</a></strong>
                    <ul className="info">
                      <li className="price">
                        <strong className="strike" title="Price">đ7,990,000</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="xans-element- xans-myshop xans-myshop-optionall option">
                  <li className="xans-record-">
                    <div className="name">
                      <span className="optionDesc"><span className="displaynone"> : </span>
                        <span className="displaynone">( sản phẩm)</span></span>
                      <a href="#none" className="btnBasic change displaynone">Sửa Phân Loại</a>
                    </div>
                    <div className="layerOptionModify" id="wishlist_option_modify_layer_0">
                      <div className="titleArea">
                        <h2>Sửa Phân Loại</h2>
                      </div>
                      <div className="ec-base-button gCenter">
                        <a href="#none" className="btnStrong">Sửa</a>
                        <a href="#none" className="btnNormal">Huỷ</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="ec-base-button">
                  <span className="gLeft">
                    <a href="#none" className="btnNormal btn_wishlist_del" rel="646||000A||"><img src="./assets/imgs/btn_wish_delete.png" alt="Remove" width={13} height={13} /></a>
                  </span>
                </div>
              </div>
            </div>
            <div className="Order_Empty displaynone">
              <p className="empty-basket" style={{margin: '10px 0 20px'}}>
                Bạn không có sản phẩm nào trong danh sách yêu thích.
              </p>
              <a className="btnWhite" href="/">Tiếp tục mua sắm</a>
            </div>
          </div>
          <div className="xans-element- xans-myshop xans-myshop-wishlistbutton xans-record-">
            <div className="button">
              <div className="ec-base-button gFull">
                <a href="#none" className="btnWhite">Thêm giỏ hàng</a>
                <a href="#none" className="btnWhite">Đặt hàng</a>
              </div>
            </div>
          </div>
          <div className="xans-element- xans-myshop xans-myshop-wishlistpaging ec-base-paginate">
            <a href="#none" className="btnPrev"><i className="fa-solid fa-angle-left" /></a>
            <ol>
              <li className="xans-record-">
                <a href="?page=1" className="this">1</a>
              </li>
            </ol>
            <a href="#none" className="btnNext"><i className="fa-solid fa-angle-right" /></a>
          </div>
        </div>
    </div>
  )
}

export default FavouritesListRes