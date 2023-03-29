import React from 'react'

const ForgotPasswordRes = () => {
  return (
    <div id="contents">
        <div id="titleArea" style={{marginTop: '20px', textAlign: 'center'}}>
          <h3>Quên Mật Khẩu</h3>
        </div>
        <form id="findPasswdForm" name="findPasswdForm" action="/exec/front/Member/FindPasswd/" method="post" target="_self" encType="multipart/form-data">
          <input id="nextUrl" name="nextUrl" defaultValue="/member/passwd/find_passwd_question.html" type="hidden" />
          <input id="resultURL" name="resultURL" defaultValue type="hidden" />
          <input id="login_id_type" name="login_id_type" defaultValue="email" type="hidden" />
          <div className="xans-element- xans-member xans-member-findpasswd">
            <div className="ec-base-table typeWrite">
              <p className="check displaynone">
                <label htmlFor="check_method0" style={{whiteSpace: 'nowrap'}}><input id="check_method0" name="check_method" defaultValue={1} type="radio" /><span id="ssn_lable" style={{display: 'inline'}} /></label>
                <label htmlFor="check_method1" style={{whiteSpace: 'nowrap'}}><input id="check_method1" name="check_method" defaultValue={2} type="radio" defaultChecked="checked" />E-mail</label>
                <label htmlFor="check_method2" style={{whiteSpace: 'nowrap'}}><input id="check_method2" name="check_method" defaultValue={3} type="radio" /><span id="search_type_mobile_lable" style={{display: 'inline'}}>Số Di Động</span></label>
              </p>
              <table border={1}>
                <caption>
                  Bước 1. Nhập Thông Tin Cá Nhân
                </caption>
                <colgroup>
                  <col style={{width: '115px'}} />
                  <col style={{width: 'auto'}} />
                </colgroup>
                <tbody>
                  <tr className="displaynone">
                    <th scope="row">ID</th>
                    <td />
                  </tr>
                  <tr id="name_view" className="name">
                    <th scope="row" id="name_lable">Tên</th>
                    <td>
                      <input id="name" name="name" className="lostInput ec-member-name" placeholder defaultValue type="text" />
                    </td>
                  </tr>
                  <tr id="email_view" className="email">
                    <th scope="row">Địa Chỉ Email</th>
                    <td>
                      <input id="email" name="email" className="lostInput" placeholder defaultValue type="text" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="emailMsg" className="emailMssage" />
            <div className="ec-base-button gFull">
              <a href="#none" className="btnSubmit">Gửi</a>
            </div>
          </div>
        </form>
      </div>
  )
}

export default ForgotPasswordRes