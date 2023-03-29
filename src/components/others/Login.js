import React from 'react'

const Login = () => {
  return (
    <div id="wrap">
        <div id="container">
          <div id="contents">
            <div className="root_width">
              <style dangerouslySetInnerHTML={{__html: "\n              .path_OrderHistory {\n                display: none;\n              }\n            " }} />
              <div className="path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li><a href="/">Trang Chủ</a></li>
                  <li className="path_login" title="Current Page">
                    Đăng Nhập/Đăng Ký
                  </li>
                  <li className="path_OrderHistory" title="Current Page">
                    Tìm kiếm đơn hàng
                  </li>
                </ol>
              </div>
              <div className="wrap-login">
                <form id="member_form_6741407257" name method="post" target="_self">
                  <input id="returnUrl" name="returnUrl" defaultValue="/stores.html" type="hidden" />
                  <input id="forbidIpUrl" name="forbidIpUrl" defaultValue="/index.html" type="hidden" />
                  <input id="certificationUrl" name="certificationUrl" defaultValue="/intro/adult_certification.html" type="hidden" />
                  <input id="sIsSnsCheckid" name="sIsSnsCheckid" defaultValue type="hidden" />
                  <input id="sProvider" name="sProvider" defaultValue type="hidden" />
                  <div className="xans-element- xans-member xans-member-login ec-base-box typeThin">
                    <div className="login">
                      <h1>
                        <a href="/index.html"><img src="assets/imgs/logo.png" alt="LocknLock" /></a>
                      </h1>
                      <div className="text-login">
                        Chào mừng đến với LocknLock. Đăng nhập ngay!
                      </div>
                      <fieldset>
                        <legend>Đăng Nhập</legend>
                        <label className="id ePlaceholder" title="E-mail"><input id="member_id" name="member_id" className="inputTypeText" type="text" /></label>
                        <label className="password ePlaceholder" title="Mật khẩu"><input id="member_passwd" name="member_passwd" type="password" /></label>
                        <div className="login-security clearBoth">
                          <p className="security">
                            <input id="member_check_save_id0" name="check_save_id" type="checkbox" /><label htmlFor="member_check_save_id0">Lưu ID</label>
                            <img src="assets/imgs/ico_access.gif" alt="Truy cập bảo mật" />
                            Truy cập bảo mật
                          </p>
                          <a href="/member/passwd/find_passwd_info.html">Quên Mật Khẩu</a>
                        </div>
                        <ul className="ul_login">
                          <li>
                            <a href="#none" className="btnLogin">Đăng Nhập</a>
                          </li>
                          <li><a href="/member/join.html">Đăng Ký</a></li>
                        </ul>
                        <p className="or-text">Hoặc đăng nhập bằng</p>
                        <ul className="snsArea clearBoth">
                          <li className="displaynone">
                            <a href="#none"><img src="assets/imgs/btn_naver_login.gif" alt="Login with Naver" /></a>
                          </li>
                          <li className>
                            <a href="#none"><img src="assets/imgs/facebook.png" alt="Login with Facebook" />
                              Facebook</a>
                          </li>
                          <li className>
                            <a href="#none"><img src="assets/imgs/google.png" alt="Login with Google" />
                              Google</a>
                          </li>
                          <li className="displaynone">
                            <a href="#none"><img src="assets/imgs/btn_kakao_login.gif" alt="Đăng nhập qua Kakao" /></a>
                          </li>
                          <li className="displaynone">
                            <a href="#none"><img src="assets/imgs/btn_line_login.gif" alt="Login with LINE" /></a>
                          </li>
                          <li className="displaynone">
                            <a href="#none"><img src="assets/imgs/btn_apple_login.gif" alt="Login with Apple" /></a>
                          </li>
                          <li className="displaynone">
                            <a href="#none"><img src="assets/imgs/btn_yahoo_login.gif" alt="Đăng nhập qua Yahoo!" /></a>
                          </li>
                        </ul>
                        <div className="login-bottom login-bottomoff">
                          <a href="/myshop/order/list.html">Đơn hàng</a>
                        </div>
                        <p className="login-bottom displaynone" id="noMemberWrap">
                          <a href>Đặt hàng với tư cách khách</a>
                        </p>
                        <div className="login-bottom login-bottomoff">
                          <p>
                            Khi mua sắm với tư cách khách,<br />
                            bạn có thể tra cứu đơn hàng của mình với mã đơn hàng.
                          </p>
                        </div>
                        <p style={{fontSize: '15px', color: 'rgb(161, 161, 161)'}} className="displaynone" id="noMemberWrap">
                          Xin lưu ý một số chương trình khuyến mại và giảm giá có
                          thể không được áp dụng cho khách.
                        </p>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              ß
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

export default Login