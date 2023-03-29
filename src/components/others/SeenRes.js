import React from 'react'

const SeenRes = () => {
  return (
    <div id="contents">
        <div className="root_width myshop_width">
          <div className="xans-element- xans-product xans-product-recentlist xans-record-">
            <div className="titleArea-new">
              <h2>Đã Xem Gần Đây</h2>
            </div>
            <ul className="xans-element- xans-product xans-product-listitem">
              <li className="xans-record-">
                <div className="ec-base-prdInfo">
                  <div className="prdBox">
                    <div className="thumbnail">
                      <a href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/31/display/1/"><img src="./assets/imgs/25f4bab2ee15f804b1d910df08556cb1.jpg" alt="" width={71} height={71} /></a>
                      <span className="wishIcon" />
                    </div>
                    <div className="description">
                      <strong className="prdName"><a href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/31/display/1/">Bình nước thủy tinh chịu nhiệt Borosilicate
                          Lock&amp;Lock Metro Glass Jug 1.2L - LLG6100</a></strong>
                      <ul className="info">
                        <li className="price strike">
                          <strong>đ348,000</strong>
                        </li>
                        <li className>đ313,000</li>
                        <li className="displaynone">313000</li>
                        <li className="mileage" />
                      </ul>
                    </div>
                  </div>
                  <div className="ec-base-button">
                    <span className="gLeft">
                      <button type="button" className="btnNormal btn_recent_del" href="#none" rel={705}>
                        <img src="./assets/imgs/btn_wish_delete.png" alt="Remove" width={13} height={13} />
                      </button>
                      <button type="button" className="btnStrong" onclick="NewWishlist.actionOrder('basket', 0)">
                        Thêm giỏ hàng
                      </button>
                    </span>
                    <button type="button" className="btnStrong" onclick="NewWishlist.actionOrder('order', 0)">
                      Mua ngay
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <p className="empty displaynone">
              Bạn không có sản phẩm nào được xem gần đây.
            </p>
          </div>
          <div className="xans-element- xans-product xans-product-recentlistpaging ec-base-paginate">
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

export default SeenRes