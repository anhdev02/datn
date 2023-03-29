import React from 'react'

const AddressBookRes = () => {
  return (
    <div id="contents">
        <div className="root_width myshop_width">
          <form id="frmAddr" name action="/exec/front/Myshop/Addr/?mode=Delete&return_url=%2Fmyshop%2Faddr%2Flist.html" method="post" target="_self" encType="multipart/form-data">
            <input id="__address_addr1" name="__address_addr1" defaultValue type="hidden" />
            <input id="__city_name" name="__city_name" defaultValue type="hidden" />
            <input id="__state_name" name="__state_name" defaultValue type="hidden" />
            <input id="__isRuleBasedAddrForm" name="__isRuleBasedAddrForm" defaultValue type="hidden" />
            <input id="__use_foreign_country_list" name="__use_foreign_country_list" defaultValue="T" type="hidden" />
            <input id="__ma_rcv_contry_code" name="__ma_rcv_contry_code" defaultValue type="hidden" />
            <input id="__country" name="__country" defaultValue type="hidden" />
            <input id="__province" name="__province" defaultValue type="hidden" />
            <input id="__city" name="__city" defaultValue type="hidden" />
            <input id="__district" name="__district" defaultValue type="hidden" />
            <input id="is_display_phone" name="is_display_phone" defaultValue type="hidden" />
            <input id="is_display_mobile" name="is_display_mobile" defaultValue type="hidden" />
            <input id="sUseCountryNumberFlag" name="sUseCountryNumberFlag" defaultValue="T" type="hidden" />
            <div className="xans-element- xans-myshop xans-myshop-addrlist">
              <div className="myshop_AddrList_top">
                <div className="titleArea-new">
                  <h2>Danh Sách Địa Chỉ</h2>
                </div>
                <a href="register.html" className="btnBlack">Thêm Địa Chỉ Mới.</a>
              </div>
              <div className="addList">
                <div className="description xans-record-">
                  <p className="name">
                    <span className="authssl_ma_rcv_title_0">*****</span>
                    <span className="color-blue displaynone">Địa chỉ mặc định</span>
                  </p>
                  <div className="info">
                    <ul className="address">
                      <li>
                        <div className="address-title">Địa chỉ</div>
                        <div>
                          <span className="authssl_ma_rcv_addr_0">*****</span>
                        </div>
                      </li>
                      <li>
                        <div className="address-title">Điện thoại</div>
                        <div>
                          <span className="authssl_ma_rcv_phone_0">*****</span>
                          <span className="authssl_ma_rcv_mobile_no_0">*****</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ec-base-button">
                    <a href="modify.html?ma_idx=8579" onclick>Chính sửa</a>
                    <a href="#none">Xoá</a>
                  </div>
                </div>
              </div>
              <p className="empty displaynone">
                Sổ địa chỉ của bạn hiện đang trống.
              </p>
              <div className="help">
                <p>
                  Nếu bạn không muốn cập nhật tự động, mở Danh Sách Địa Chỉ và
                  thay đổi cài đặt cập nhật tự động thành “Cố định”.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddressBookRes