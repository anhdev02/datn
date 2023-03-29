import React from 'react'

const ForgotPassword = () => {
  return (
    <div id="wrap">
        <div id="container">
          <div id="contents">
            <div className="root_width">
              <div className="path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li><a href="/">Trang Chủ</a></li>
                  <li title="Current Page"><strong>Quên Mật khẩu</strong></li>
                </ol>
              </div>
              <div className="titleArea">
                <h2>Quên Mật khẩu</h2>
              </div>
              <form id="findPasswdForm" name="findPasswdForm" method="post">
                <input id="nextUrl" name="nextUrl" defaultValue="/member/passwd/find_passwd_question.html" type="hidden" />
                <input id="resultURL" name="resultURL" defaultValue type="hidden" />
                <input id="login_id_type" name="login_id_type" defaultValue="email" type="hidden" />
                <div className="xans-element- xans-member xans-member-findpasswd ec-base-box typeThin">
                  <div className="findPw">
                    <h3 className="boxTitle">Quên Mật khẩu</h3>
                    <fieldset>
                      <legend>Quên Mật khẩu</legend>
                      <ul className="ec-base-desc">
                        <li>
                          <span className="desc"><span id="ssn_lable" style={{display: 'inline'}} />
                            <input id="check_method1" name="check_method" defaultValue={2} type="radio" defaultChecked="checked" /><label htmlFor="check_method1">E-mail</label>
                          </span>
                        </li>
                        <li className="gBlank20 displaynone">
                          <strong className="term">ID</strong><span className="desc" />
                        </li>
                        <li id="name_view" className="name">
                          <strong className="term" id="name_lable">Tên</strong><span className="desc"><input id="name" className="lostInput ec-member-name" type="text" /></span>
                        </li>
                        <li id="email_view" className="email">
                          <strong className="term">Địa chỉ email</strong><span className="desc"><input id="email" name="email" className="lostInput" type="text" /></span>
                        </li>
                      </ul>
                      <div id="emailMsg" className="emailMssage" />
                      <div className="ec-base-button gColumn">
                        <a href="#none" className="btnSubmit sizeL">Gửi</a>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
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

export default ForgotPassword