import React from 'react'

const AccountInfoRes = () => {
  return (
    <div id="contents">
        <div className="root_width myshop_width">
          <form id="editForm" name="editForm" action="/exec/front/Member/edit/" method="post" target="_self" encType="multipart/form-data">
            <input id="use_email_confirm" name="use_email_confirm" defaultValue="T" type="hidden" />
            <input id="is_certification" name="is_certification" defaultValue="F" type="hidden" />
            <input id="is_email_auth_use" name="is_email_auth_use" defaultValue="F" type="hidden" />
            <input id="emailDuplCheck" name="emailDuplCheck" defaultValue="T" type="hidden" />
            <input id="login_id_type" name="login_id_type" defaultValue="email" type="hidden" />
            <input id="is_display_register_name" name="is_display_register_name" defaultValue="T" type="hidden" />
            <input id="display_required_name" name="display_required_name" defaultValue="T" type="hidden" />
            <input id="is_display_register_name_phonetic" name="is_display_register_name_phonetic" defaultValue="F" type="hidden" />
            <input id="display_required_name_phonetic" name="display_required_name_phonetic" defaultValue="F" type="hidden" />
            <input id="is_display_register_eng_name" name="is_display_register_eng_name" defaultValue="F" type="hidden" />
            <input id="display_required_name_en" name="display_required_name_en" defaultValue="F" type="hidden" />
            <input id="passwd_type" name="passwd_type" defaultValue="C" type="hidden" />
            <input id="is_display_register_addr" name="is_display_register_addr" defaultValue="F" type="hidden" />
            <input id="is_display_register_addr2" name="is_display_register_addr2" defaultValue="F" type="hidden" />
            <input id="__addr1" name="__addr1" defaultValue type="hidden" />
            <input id="__city_name" name="__city_name" defaultValue type="hidden" />
            <input id="__state_name" name="__state_name" defaultValue type="hidden" />
            <input id="__isRuleBasedAddrForm" name="__isRuleBasedAddrForm" defaultValue="F" type="hidden" />
            <input id="address_direct_input_check" name="address_direct_input_check" defaultValue="F" type="hidden" />
            <input id="display_required_address" name="display_required_address" defaultValue="F" type="hidden" />
            <input id="display_required_address2" name="display_required_address2" defaultValue="F" type="hidden" />
            <input id="is_display_register_mobile" name="is_display_register_mobile" defaultValue="F" type="hidden" />
            <input id="display_required_cell" name="display_required_cell" defaultValue="F" type="hidden" />
            <input id="display_register_mobile" name="display_register_mobile" defaultValue="T" type="hidden" />
            <input id="use_checking_mobile_number_duplication" name="use_checking_mobile_number_duplication" defaultValue="F" type="hidden" />
            <input id="isMobileVerify" name="isMobileVerify" defaultValue="F" type="hidden" />
            <input id="is_display_register_phone" name="is_display_register_phone" defaultValue="T" type="hidden" />
            <input id="display_required_phone" name="display_required_phone" defaultValue="T" type="hidden" />
            <input id="display_register_phone" name="display_register_phone" defaultValue="T" type="hidden" />
            <input id="is_display_password_hint" name="is_display_password_hint" defaultValue="F" type="hidden" />
            <input id="required_is_sms_flag" name="required_is_sms_flag" defaultValue="F" type="hidden" />
            <input id="required_is_news_mail_flag" name="required_is_news_mail_flag" defaultValue="T" type="hidden" />
            <input id="is_display_register_birthday" name="is_display_register_birthday" defaultValue="F" type="hidden" />
            <input id="display_required_is_birthday" name="display_required_is_birthday" defaultValue="F" type="hidden" />
            <input id="display_required_sex" name="display_required_sex" defaultValue="F" type="hidden" />
            <input id="nick_name_flag" name="nick_name_flag" defaultValue="F" type="hidden" />
            <input id="nick_name_confirm" name="nick_name_confirm" defaultValue="F" type="hidden" />
            <input id="display_required_nick_name_flag" name="display_required_nick_name_flag" defaultValue="F" type="hidden" />
            <input id="is_display_register_wedding" name="is_display_register_wedding" defaultValue="F" type="hidden" />
            <input id="display_required_is_wedding_anniversary" name="display_required_is_wedding_anniversary" defaultValue="F" type="hidden" />
            <input id="is_display_register_life_partner" name="is_display_register_life_partner" defaultValue="F" type="hidden" />
            <input id="display_required_is_life_partner" name="display_required_is_life_partner" defaultValue="F" type="hidden" />
            <input id="display_required_job" name="display_required_job" defaultValue="F" type="hidden" />
            <input id="display_required_job_class" name="display_required_job_class" defaultValue="F" type="hidden" />
            <input id="display_required_school" name="display_required_school" defaultValue="F" type="hidden" />
            <input id="display_required_interest" name="display_required_interest" defaultValue="F" type="hidden" />
            <input id="display_required_region" name="display_required_region" defaultValue="F" type="hidden" />
            <input id="display_required_internet" name="display_required_internet" defaultValue="F" type="hidden" />
            <input id="display_required_child" name="display_required_child" defaultValue="F" type="hidden" />
            <input id="display_required_car" name="display_required_car" defaultValue="F" type="hidden" />
            <input id="display_required_earning" name="display_required_earning" defaultValue="F" type="hidden" />
            <input id="display_required_reco_id" name="display_required_reco_id" defaultValue="F" type="hidden" />
            <input id="display_required_add1" name="display_required_add1" defaultValue="F" type="hidden" />
            <input id="display_required_add2" name="display_required_add2" defaultValue="F" type="hidden" />
            <input id="display_required_add3" name="display_required_add3" defaultValue="F" type="hidden" />
            <input id="display_required_add4" name="display_required_add4" defaultValue="F" type="hidden" />
            <input id="returnUrl" name="returnUrl" defaultValue="/" type="hidden" />
            <input id="sUseCountryNumberFlag" name="sUseCountryNumberFlag" defaultValue="T" type="hidden" />
            <input id="sUseSeparationNameFlag" name="sUseSeparationNameFlag" defaultValue="F" type="hidden" />
            <input id="sEData" name="sEData" defaultValue="hhHNd6tfZ2k8mwq44BobLle5PUlAGfPPzvjFOHLBu1PjDcrkctI3YDwbWqkLiFGbznT+AQpmGQXMC2yjhFqx0UoXxYgm4kitc/hDPMYBjsOFt9apLtVnQ9+dxeBKsA+VzjvjXVhUNLzMYLKx0tYl8QOOgxUBClESbb4ulpA0yvYBFeC63eVD8lVy+e0Ct9NgCqKPeI5IsFbiAPNKgSlvLUrVGmx1pw5WCWF5mnR8W8bDlvI1XYAKEgC0Jc4gLvQxT18YU58MHPZNI1K6qoJleS5UXat7IUMF2i2VerMFbRklWi9m++P0cLvLSjPK622JZyNBXYuRrdm2eFzNNU/nK2XgtXD6UpBTu6AQeMT58WdvP8Iq27gILzjZ/EpzUwQNTm13+qUfrzHj/T2YSRsgwP70eOuEsC4oSfOYIcLiiAHhIo5ayxNj4finZ51C6dGVeaLn9nPcKXuVinU7lLZhHA1Plx8mqBIfryGPrkUQtxJYwGg8AQ+e47pigcYQX7/xpOjzdSHtkI654uJ2JVZ/xppBsxZxQYNXHEOficYoNowgm4ior32CJZ/g26kSdCjeiGBXw8n7ovSF6gUAQD2IS1N6zgrCoIEJ8IiDFW5hJIPQe2gsc/SMyKv8wcEqaJfsPky/3xORxIxeeArQel8mILQrRsdi6pcRJ6AqLhmSia9OeJ0k2QyZvTO/aRM19MwCzWAYsNVw4XuPYdXRhAuaPdeIIZwA//2hiERz/h4qKJgftURWZ9gCeh6jKa3GU9qYrdIoio0sYNHwulO0kPFlXzEmvq3geA9pCvyQvgOA8fwUkq0ACoxkTiy5UCL0lYfJec2CzVpDFLRrGlfbwPcYZgij99ZoY5SDIVo4MyCdfkM6z2HdpgpxqzZ4Iqk+vmTAhIwDrT8cYTSab5L21otPisIPdrIfk6LrN6tGszU0rf+Qd/gfcr/uMrTr0yH5dYECNt5J2ksB41N75fJcOfaAl/J7p5q9LZ77PvCpaXCyu912B5JyitMAITMR+r0IMHxZMWMUANmPV+jQmlC8S9oLdM1aj1XPbrTR4wjj2F8Loes/L49UATHHxDQUgiTvgk53rXl2gEIHYclAikwedej5UJsPEV/kzCnKUsmV0BEVdOLpDg9lZ8mh8vnw2qro5Ps6X/XmTQM0SMbI1cnHm1kL+BVmty3bJZNhriPr9ObIKbZDuNAIIn1+2rVfU8pKWTn9nIPesg6fgz8J9hr4dMCcnZfNnjjFgJgbnoXGkAt4OOA9+PXsYSl08OyMMUw4Be5EXk9J78LPoAwJWVtvAu6GKS7ogYDl1zQQrmdzpZiKPqF6k0qHi1kNj6wd1XgxXDlsgN/UKuOnGxE2iECLBduAJw==" type="hidden" />
            <input id="sEDataDiff" name="sEDataDiff" defaultValue="eyJhZGQxIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJhZGQyIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJhZGQzIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJhZGQ0IjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJtZW1iZXJfaWQiOiIwNTU1MGM2YjZmNTg5YWMyNDMyZWViNGNmMmQzY2U1ZSIsImhpbnRfYW5zd2VyIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJuYW1lX2NvbnRlbnRzIjoiNmQ2NTQ4NjZiYTA3ZGQ1MmJmNjY3NDgwYjlmZTM0YzIiLCJzc25fY29udGVudHMiOiI1OGE0YTQ3YzQ3ZGRhMTE1MmFjNGYxOGIwZjE2M2U3NCIsInBvc3Rjb2RlMSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwicG9zdGNvZGUyIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJhZGRyMSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiYWRkcjIiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImNpdHlfbmFtZSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdGVfbmFtZSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RyZWV0X25hbWUiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsInBob25lMSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwicGhvbmUyIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJwaG9uZTMiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIm1vYmlsZTEiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIm1vYmlsZTIiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIm1vYmlsZTMiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImVtYWlsMSI6IjM5Yzg2M2JhY2M5ODdiYWE4MjFlYzIzNzg5Y2JhZGQ1IiwiZW1haWwyIjoiZjc0ZDM5ZmEwNDRhYTMwOWVhZWExNGI5ZjU3ZmU3OWMiLCJlbWFpbDMiOiJmNzRkMzlmYTA0NGFhMzA5ZWFlYTE0YjlmNTdmZTc5YyIsImJpcnRoX3llYXIiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImJpcnRoX21vbnRoIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJiaXJ0aF9kYXkiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIm1hcnJ5X3llYXIiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIm1hcnJ5X21vbnRoIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJtYXJyeV9kYXkiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsInBhcnRuZXJfeWVhciI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwicGFydG5lcl9tb250aCI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwicGFydG5lcl9kYXkiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIl9fYWRkcjEiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIl9fY2l0eV9uYW1lIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJfX3N0YXRlX25hbWUiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsIm5pY2tfbmFtZSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiaXNfbmV3c19tYWlsIjoiODAwNjE4OTQzMDI1MzE1Zjg2OWU0ZTFmMDk0NzEwMTIiLCJpc19zbXMiOiI4MDA2MTg5NDMwMjUzMTVmODY5ZTRlMWYwOTQ3MTAxMiIsInNleCI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiaXNfc29sYXJfY2FsZW5kYXIiOiJiOWVjZTE4Yzk1MGFmYmZhNmIwZmRiZmE0ZmY3MzFkMyIsInJlZ2lvbiI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiaW50ZXJlc3QiOiI4NTNhZTkwZjAzNTEzMjRiZDczZWE2MTVlNjQ4NzUxNyIsImludGVybmV0IjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJjaGlsZCI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiY2FyIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJhdmFpbF9taWxlYWdlIjoiZjdkZGQ0ODlhYjBhODI1NjdiMjQxYjA1OTcxY2JkYjMiLCJyZWNvX2lkIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJ6aXBjb2RlIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJtZW1iZXJfdHlwZSI6IjgzODc4YzkxMTcxMzM4OTAyZTBmZTBmYjk3YThjNDdhIiwiY29tcGFueV90eXBlIjoiNzIxNWVlOWM3ZDlkYzIyOWQyOTIxYTQwZTg5OWVjNWYiLCJjc3NuIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJibmFtZSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiY25hbWUiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImJzc24xIjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJmb3JlaWduZXJfdHlwZSI6IjcyMTVlZTljN2Q5ZGMyMjlkMjkyMWE0MGU4OTllYzVmIiwiY2l0aXplbnNoaXAiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsInBlcnNvbmFsX3R5cGUiOiI3MjE1ZWU5YzdkOWRjMjI5ZDI5MjFhNDBlODk5ZWM1ZiIsInJlZnVuZF9iYW5rX2NvZGUiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImNvdW50cnlfY29kZSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiaXNfYWdyZWVkX3Byb3ZpZGluZ19pbmZvcm1hdGlvbiI6IjgwMDYxODk0MzAyNTMxNWY4NjllNGUxZjA5NDcxMDEyIiwiaXNfYWdyZWVkX2NvbnNpZ25pbmdfaW5mb3JtYXRpb24iOiI4MDA2MTg5NDMwMjUzMTVmODY5ZTRlMWYwOTQ3MTAxMiIsImlzX2F1dGhlbnRpY2F0ZWRfYnlfZW1haWwiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsInRvdGFsX2RlcG9zaXQiOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImRpcmVjdF9pbnB1dF9jaGVjayI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiaXNfam9pbl9wcml2YWN5X3BvbGljeV9vcHRpb25hbCI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwiY29tcGFueV9jb25kaXRpb24iOiJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZSIsImNvbXBhbnlfbGluZSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIn0=" type="hidden" />
            <input id="display_agree_information_check_flag" name="display_agree_information_check_flag" defaultValue="F" type="hidden" />
            <input id="display_agree_consignment_check_flag" name="display_agree_consignment_check_flag" defaultValue="F" type="hidden" />
            <input id="display_agree_privacy_optional_check_flag" name="display_agree_privacy_optional_check_flag" defaultValue="F" type="hidden" />
            <div className="xans-element- xans-member xans-member-edit">
              <div className="titleArea-new">
                <h2>Sửa thông tin tài khoản</h2>
              </div>
              <div className="ec-base-table typeWrite gClearBorderTop">
                <ul>
                  <li className="displaynone">
                    <h3>
                      ID
                      <img src="./assets/imgs/ico_required.png" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="member_id" name="member_id" className="inputTypeText" placeholder readOnly="readonly" defaultValue type="text" />
                    </div>
                  </li>
                  <li>
                    <h3>
                      Mật khẩu
                      <img src="./assets/imgs/ico_required.png" className width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <div className="ec-base-tooltip-area">
                        <span className="eTip"><input id="passwd" name="passwd" autoComplete="off" maxLength={16} disabled={1} defaultValue type="password" /></span>
                        <div className="ec-base-tooltip typeUpper">
                          <div className="content">
                            <strong style={{display: 'none'}} className="txtWarn">※ Quy định đặt mật khẩu</strong>
                            <div className="ec-base-help typeDash txtWarn">
                              10~16 ký tự bao gồm ít nhất hai trong: chữ cái
                              viết <br />thường/ viết hoa, chữ số và ký tự đặc
                              biệt.
                            </div>
                            <button style={{display: 'none'}} type="button" className="btnClose eClose">
                              Đóng
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Xác Nhận<br />Mật Khẩu
                      <img src="./assets/imgs/ico_required.png" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="user_passwd_confirm" name="user_passwd_confirm" autoComplete="off" maxLength={16} disabled={1} defaultValue type="password" />
                      <span id="pwConfirmMsg" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>Mật Khẩu Mới</h3>
                    <div>
                      <div className="ec-base-tooltip-area">
                        <span className="eTip"><input id="new_passwd" name="new_passwd" maxLength={16} disabled={1} defaultValue type="password" /></span>
                        <div className="ec-base-tooltip typeUpper">
                          <div className="content">
                            <strong className="txtWarn">※ Quy định đặt mật khẩu</strong>
                            <ul className="ec-base-help typeDash txtWarn">
                              - (10~16 ký tự bao gồm ít nhất hai trong: chữ
                              cái viết thường/viết hoa, chữ số và ký tự đặc
                              biệt)<br />
                              - Ký tự đặc biệt có thể nhập
                              <br />
                              &nbsp;&nbsp;&nbsp; ~ ` ! @ # $ % ^ ( ) _ - = {'{'} {'}'}
                              [ ] | ; : &lt; &gt; , . ? /<br />
                              - Không thể nhập dấu cách
                            </ul>
                            <button type="button" className="btnClose eClose">
                              Đóng
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="ec-base-help typeDash">
                        (10~16 ký tự bao gồm ít nhất hai trong: chữ cái viết
                        thường/viết hoa, chữ số và ký tự đặc biệt)
                      </p>
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>Xác Nhận<br />Mật Khẩu mới</h3>
                    <div>
                      <input id="new_passwd_confirm" name="new_passwd_confirm" maxLength={16} disabled={1} defaultValue type="password" />
                      <span id="new_pwConfirmMsg" />
                    </div>
                  </li>
                  <li className="emailCheck">
                    <h3>
                      Địa Chỉ Email
                      <img src="./assets/imgs/ico_required.png" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="email1" name="email1" defaultValue type="text" />
                      <p id="emailMsg" />
                    </div>
                  </li>
                  <li className>
                    <h3 id>
                      Tên
                      <img src="./assets/imgs/ico_required.png" className width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="name" name="name" className="ec-member-name" placeholder maxLength={30} defaultValue="Phan Minh Cảnh_0178" type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      Tên Tiếng Anh<img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="name_en" name="name_en" className="ec-member-name" placeholder maxLength={30} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      Tên Phiên Âm
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="name_phonetic" name="name_phonetic" className="ec-member-name" placeholder maxLength={30} defaultValue type="text" />
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Địa Chỉ
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <ul className="ec-address">
                        <li id="fmodify_country_wrap" className style={{}}>
                          <select id="country" name="country" className="gCheckbox60" fw-label="Quốc Gia" style={{}}>
                            <option value>Vui lòng chọn.</option>
                            <option value="VN" selected>VIET NAM</option>
                            <option value="AF">AFGHANISTAN</option>
                            <option value="AL">ALBANIA</option>
                            <option value="DZ">ALGERIA</option>
                            <option value="AS">AMERICAN SAMOA</option>
                            <option value="AD">ANDORRA</option>
                            <option value="AO">ANGOLA</option>
                            <option value="AI">ANGUILLA</option>
                            <option value="AG">ANTIGUA AND BARBUDA</option>
                            <option value="AR">ARGENTINA</option>
                            <option value="AM">ARMENIA</option>
                            <option value="AW">ARUBA</option>
                            <option value="AU">AUSTRALIA</option>
                            <option value="AT">AUSTRIA</option>
                            <option value="AZ">AZERBAIJAN</option>
                            <option value="BS">BAHAMAS</option>
                            <option value="BH">BAHRAIN</option>
                            <option value="BD">BANGLADESH</option>
                            <option value="BB">BARBADOS</option>
                            <option value="BY">BELARUS</option>
                            <option value="BE">BELGIUM</option>
                            <option value="BZ">BELIZE</option>
                            <option value="BJ">BENIN</option>
                            <option value="BM">BERMUDA</option>
                            <option value="BT">BHUTAN</option>
                            <option value="BO">BOLIVIA</option>
                            <option value="BW">BOTSWANA</option>
                            <option value="BR">BRAZIL</option>
                            <option value="BN">BRUNEI DARUSSALAM</option>
                            <option value="BG">BULGARIA(REP)</option>
                            <option value="BF">BURKINA FASO</option>
                            <option value="BI">BURUNDI</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="KH">CAMBODIA</option>
                            <option value="CM">CAMEROON</option>
                            <option value="CA">CANADA</option>
                            <option value="CV">CAPE VERDE</option>
                            <option value="KY">CAYMAN ISLANDS</option>
                            <option value="CF">
                              CENTRAL AFRICAN REPUBLIC
                            </option>
                            <option value="TD">CHAD</option>
                            <option value="CL">CHILE</option>
                            <option value="CN">CHINA(PEOPLE'S REP)</option>
                            <option value="CO">COLOMBIA</option>
                            <option value="CG">CONGO</option>
                            <option value="CR">COSTA RICA</option>
                            <option value="CI">COTE D IVOIRE</option>
                            <option value="HR">CROATIA</option>
                            <option value="CU">CUBA</option>
                            <option value="CY">CYPRUS</option>
                            <option value="CZ">CZECH REP</option>
                            <option value="DK">DENMARK</option>
                            <option value="DJ">DJIBOUTI</option>
                            <option value="DM">DOMINICA</option>
                            <option value="DO">DOMINICAN REPUBLIC</option>
                            <option value="EC">ECUADOR</option>
                            <option value="EG">EGYPT</option>
                            <option value="SV">EL SALVADOR</option>
                            <option value="ER">ERITREA</option>
                            <option value="EE">ESTONIA</option>
                            <option value="ET">ETHIOPIA</option>
                            <option value="FO">FAROE ISLANDS</option>
                            <option value="FJ">FIJI</option>
                            <option value="FI">FINLAND</option>
                            <option value="FR">FRANCE</option>
                            <option value="GF">FRENCH GUIANA</option>
                            <option value="PF">FRENCH POLYNESIA</option>
                            <option value="GA">GABON</option>
                            <option value="GM">GAMBIA</option>
                            <option value="GE">GEORGIA</option>
                            <option value="DE">GERMANY</option>
                            <option value="GH">GHANA</option>
                            <option value="GI">GIBRALTAR</option>
                            <option value="GR">GREECE</option>
                            <option value="GL">GREENLAND</option>
                            <option value="GD">GRENADA</option>
                            <option value="GP">GUADELOUPE</option>
                            <option value="GU">GUAM</option>
                            <option value="GT">GUATEMALA</option>
                            <option value="GN">GUINEA</option>
                            <option value="GW">GUINEA-BISSAU</option>
                            <option value="GY">GUYANA</option>
                            <option value="HT">HAITI</option>
                            <option value="HN">HONDURAS</option>
                            <option value="HK">HONG KONG</option>
                            <option value="HU">HUNGARY(REP)</option>
                            <option value="IS">ICELAND</option>
                            <option value="IN">INDIA</option>
                            <option value="ID">INDONESIA</option>
                            <option value="IR">IRAN(ISLAMIC REP)</option>
                            <option value="IQ">IRAQ</option>
                            <option value="IE">IRELAND</option>
                            <option value="IL">ISRAEL</option>
                            <option value="IT">ITALY</option>
                            <option value="JM">JAMAICA</option>
                            <option value="JP">JAPAN</option>
                            <option value="JO">JORDAN</option>
                            <option value="KZ">KAZAKHSTAN</option>
                            <option value="KE">KENYA</option>
                            <option value="KI">KIRIBATI</option>
                            <option value="KR">KOREA (REP OF,)</option>
                            <option value="KW">KUWAIT</option>
                            <option value="KG">KYRGYZSTAN</option>
                            <option value="LA">LAO PEOPLE'S DEM REP</option>
                            <option value="LV">LATVIA</option>
                            <option value="LB">LEBANON</option>
                            <option value="LS">LESOTHO</option>
                            <option value="LR">LIBERIA</option>
                            <option value="LY">LIBYAN ARAB JAMAHIRIYA</option>
                            <option value="LI">LIECHTENSTEIN</option>
                            <option value="LT">LITHUANIA</option>
                            <option value="LU">LUXEMBOURG</option>
                            <option value="MO">MACAU</option>
                            <option value="MK">MACEDONIA</option>
                            <option value="MG">MADAGASCAR</option>
                            <option value="MW">MALAWI</option>
                            <option value="MY">MALAYSIA</option>
                            <option value="MV">MALDIVES</option>
                            <option value="ML">MALI</option>
                            <option value="MT">MALTA</option>
                            <option value="MH">MARSHALL ISLANDS</option>
                            <option value="MQ">MARTINIQUE</option>
                            <option value="MR">MAURITANIA</option>
                            <option value="MU">MAURITIUS</option>
                            <option value="MX">MEXICO</option>
                            <option value="FM">MICRONESIA</option>
                            <option value="MD">MOLDOVA, REPUBLIC OF</option>
                            <option value="MC">MONACO</option>
                            <option value="MN">MONGOLIA</option>
                            <option value="ME">MONTENEGRO</option>
                            <option value="MS">MONTSERRAT</option>
                            <option value="MA">MOROCCO</option>
                            <option value="MZ">MOZAMBIQUE</option>
                            <option value="MM">MYANMAR</option>
                            <option value="NA">NAMIBIA</option>
                            <option value="NP">NEPAL</option>
                            <option value="NL">NETHERLANDS</option>
                            <option value="AN">NETHERLANDS(ANTILLES)</option>
                            <option value="NC">NEW CALEDONIA</option>
                            <option value="NZ">NEW ZEALAND</option>
                            <option value="NI">NICARAGUA</option>
                            <option value="NE">NIGER</option>
                            <option value="NG">NIGERIA</option>
                            <option value="NF">NORFOLK ISLAND</option>
                            <option value="MP">
                              NORTHERN MARIANA ISLANDS
                            </option>
                            <option value="NO">NORWAY</option>
                            <option value="OM">OMAN</option>
                            <option value="PK">PAKISTAN</option>
                            <option value="PW">PALAU</option>
                            <option value="PA">PANAMA(REP)</option>
                            <option value="PG">PAPUA NEW GUINEA</option>
                            <option value="PY">PARAGUAY</option>
                            <option value="PE">PERU</option>
                            <option value="PH">PHILIPPINES</option>
                            <option value="PL">POLAND(REP)</option>
                            <option value="PT">PORTUGAL</option>
                            <option value="PR">PUERTO RICO</option>
                            <option value="QA">QATAR</option>
                            <option value="RE">REUNION</option>
                            <option value="RO">ROMANIA</option>
                            <option value="RU">RUSSIAN FEDERATION</option>
                            <option value="RW">RWANDA</option>
                            <option value="KN">SAINT KITTS AND NEVIS</option>
                            <option value="LC">SAINT LUCIA</option>
                            <option value="VC">
                              SAINT VINCENT AND THE GRENADINES
                            </option>
                            <option value="WS">SAMOA</option>
                            <option value="SM">SAN MARINO</option>
                            <option value="SA">SAUDI ARABIA</option>
                            <option value="SN">SENEGAL</option>
                            <option value="RS">SERBIA/KOSOVO</option>
                            <option value="SC">SEYCHELLES</option>
                            <option value="SL">SIERRA LEONE</option>
                            <option value="SG">SINGAPORE</option>
                            <option value="SK">SLOVAKIA</option>
                            <option value="SI">SLOVENIA</option>
                            <option value="SB">SOLOMON ISLANDS</option>
                            <option value="ZA">SOUTH AFRICA</option>
                            <option value="ES">SPAIN</option>
                            <option value="LK">SRI LANKA</option>
                            <option value="SR">SURINAME</option>
                            <option value="SZ">SWAZILAND</option>
                            <option value="SE">SWEDEN</option>
                            <option value="CH">SWITZERLAND</option>
                            <option value="TW">TAIWAN</option>
                            <option value="TJ">TAJIKISTAN</option>
                            <option value="TZ">TANZANIA(UNITED REP)</option>
                            <option value="TH">THAILAND</option>
                            <option value="TL">TIMOR-LESTE</option>
                            <option value="TG">TOGO</option>
                            <option value="TO">TONGA</option>
                            <option value="TT">TRINIDAD AND TOBAGO</option>
                            <option value="TN">TUNISIA</option>
                            <option value="TR">TURKEY</option>
                            <option value="TM">TURKMENISTAN</option>
                            <option value="TC">
                              TURKS AND CAICOS ISLANDS
                            </option>
                            <option value="TV">TUVALU</option>
                            <option value="US">U.S.A</option>
                            <option value="UG">UGANDA</option>
                            <option value="UA">UKRAINE</option>
                            <option value="AE">UNITED ARAB EMIRATES</option>
                            <option value="GB">UNITED KINGDOM</option>
                            <option value="UY">URUGUAY</option>
                            <option value="UZ">UZBEKISTAN</option>
                            <option value="VU">VANUATU</option>
                            <option value="VE">VENEZUELA</option>
                            <option value="VG">VIRGIN ISLANDS BRITISH</option>
                            <option value="VI">VIRGIN ISLANDS U.S.</option>
                            <option value="YE">YEMEN</option>
                            <option value="ZM">ZAMBIA</option>
                            <option value="ZW">ZIMBABWE</option>
                          </select>
                          <span id="fmodify_directInputCheck_wrap" className="ec-base-label">
                            <input id="fmodify_directInputCheck" name="fmodify_directInputCheck" type="checkbox" />
                            <label id="fmodify_directInputCheckLabel" htmlFor="fmodify_directInputCheckLabel">Nhập trực tiếp</label>
                          </span>
                        </li>
                        <li id="fmodify_area_wrap" className="ec-address-area" style={{}}>
                          <select id="si_name_addr" name="si_name_addr" className fw-label="Tỉnh/Thành" style={{}}>
                            <option value>Tỉnh/Thành</option>
                            <option value="TP. Hồ Chí Minh">
                              TP. Hồ Chí Minh
                            </option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Cần Thơ">Cần Thơ</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="An Giang">An Giang</option>
                            <option value="Bà Rịa - Vũng Tàu">
                              Bà Rịa - Vũng Tàu
                            </option>
                            <option value="Bắc Giang">Bắc Giang</option>
                            <option value="Bắc Kạn">Bắc Kạn</option>
                            <option value="Bạc Liêu">Bạc Liêu</option>
                            <option value="Bắc Ninh">Bắc Ninh</option>
                            <option value="Bến Tre">Bến Tre</option>
                            <option value="Bình Định">Bình Định</option>
                            <option value="Bình Dương">Bình Dương</option>
                            <option value="Bình Phước">Bình Phước</option>
                            <option value="Bình Thuận">Bình Thuận</option>
                            <option value="Cà Mau">Cà Mau</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Đắk Lắk">Đắk Lắk</option>
                            <option value="Đắk Nông">Đắk Nông</option>
                            <option value="Điện Biên">Điện Biên</option>
                            <option value="Đồng Nai">Đồng Nai</option>
                            <option value="Đồng Tháp">Đồng Tháp</option>
                            <option value="Gia Lai">Gia Lai</option>
                            <option value="Hà Giang">Hà Giang</option>
                            <option value="Hà Nam">Hà Nam</option>
                            <option value="Hà Tĩnh">Hà Tĩnh</option>
                            <option value="Hải Dương">Hải Dương</option>
                            <option value="Hậu Giang">Hậu Giang</option>
                            <option value="Hòa Bình">Hòa Bình</option>
                            <option value="Hưng Yên">Hưng Yên</option>
                            <option value="Khánh Hòa">Khánh Hòa</option>
                            <option value="Kiên Giang">Kiên Giang</option>
                            <option value="Kon Tum">Kon Tum</option>
                            <option value="Lai Châu">Lai Châu</option>
                            <option value="Lâm Đồng">Lâm Đồng</option>
                            <option value="Lạng Sơn">Lạng Sơn</option>
                            <option value="Lào Cai">Lào Cai</option>
                            <option value="Long An">Long An</option>
                            <option value="Nam Định">Nam Định</option>
                            <option value="Nghệ An">Nghệ An</option>
                            <option value="Ninh Bình">Ninh Bình</option>
                            <option value="Ninh Thuận">Ninh Thuận</option>
                            <option value="Phú Thọ">Phú Thọ</option>
                            <option value="Phú Yên">Phú Yên</option>
                            <option value="Quảng Bình">Quảng Bình</option>
                            <option value="Quảng Nam">Quảng Nam</option>
                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                            <option value="Quảng Ninh">Quảng Ninh</option>
                            <option value="Quảng Trị">Quảng Trị</option>
                            <option value="Sóc Trăng">Sóc Trăng</option>
                            <option value="Sơn La">Sơn La</option>
                            <option value="Tây Ninh">Tây Ninh</option>
                            <option value="Thái Bình">Thái Bình</option>
                            <option value="Thái Nguyên">Thái Nguyên</option>
                            <option value="Thanh Hóa">Thanh Hóa</option>
                            <option value="Thừa Thiên - Huế">
                              Thừa Thiên - Huế
                            </option>
                            <option value="Tiền Giang">Tiền Giang</option>
                            <option value="Trà Vinh">Trà Vinh</option>
                            <option value="Tuyên Quang">Tuyên Quang</option>
                            <option value="Vĩnh Long">Vĩnh Long</option>
                            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                            <option value="Yên Bái">Yên Bái</option></select><select id="ci_name_addr" name="ci_name_addr" className fw-label="Quận/Huyện" style={{}}>
                            <option value>Quận/Huyện</option>
                            <option value="TP. Hồ Chí Minh">
                              TP. Hồ Chí Minh
                            </option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Cần Thơ">Cần Thơ</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="An Giang">An Giang</option>
                            <option value="Bà Rịa - Vũng Tàu">
                              Bà Rịa - Vũng Tàu
                            </option>
                            <option value="Bắc Giang">Bắc Giang</option>
                            <option value="Bắc Kạn">Bắc Kạn</option>
                            <option value="Bạc Liêu">Bạc Liêu</option>
                            <option value="Bắc Ninh">Bắc Ninh</option>
                            <option value="Bến Tre">Bến Tre</option>
                            <option value="Bình Định">Bình Định</option>
                            <option value="Bình Dương">Bình Dương</option>
                            <option value="Bình Phước">Bình Phước</option>
                            <option value="Bình Thuận">Bình Thuận</option>
                            <option value="Cà Mau">Cà Mau</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Đắk Lắk">Đắk Lắk</option>
                            <option value="Đắk Nông">Đắk Nông</option>
                            <option value="Điện Biên">Điện Biên</option>
                            <option value="Đồng Nai">Đồng Nai</option>
                            <option value="Đồng Tháp">Đồng Tháp</option>
                            <option value="Gia Lai">Gia Lai</option>
                            <option value="Hà Giang">Hà Giang</option>
                            <option value="Hà Nam">Hà Nam</option>
                            <option value="Hà Tĩnh">Hà Tĩnh</option>
                            <option value="Hải Dương">Hải Dương</option>
                            <option value="Hậu Giang">Hậu Giang</option>
                            <option value="Hòa Bình">Hòa Bình</option>
                            <option value="Hưng Yên">Hưng Yên</option>
                            <option value="Khánh Hòa">Khánh Hòa</option>
                            <option value="Kiên Giang">Kiên Giang</option>
                            <option value="Kon Tum">Kon Tum</option>
                            <option value="Lai Châu">Lai Châu</option>
                            <option value="Lâm Đồng">Lâm Đồng</option>
                            <option value="Lạng Sơn">Lạng Sơn</option>
                            <option value="Lào Cai">Lào Cai</option>
                            <option value="Long An">Long An</option>
                            <option value="Nam Định">Nam Định</option>
                            <option value="Nghệ An">Nghệ An</option>
                            <option value="Ninh Bình">Ninh Bình</option>
                            <option value="Ninh Thuận">Ninh Thuận</option>
                            <option value="Phú Thọ">Phú Thọ</option>
                            <option value="Phú Yên">Phú Yên</option>
                            <option value="Quảng Bình">Quảng Bình</option>
                            <option value="Quảng Nam">Quảng Nam</option>
                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                            <option value="Quảng Ninh">Quảng Ninh</option>
                            <option value="Quảng Trị">Quảng Trị</option>
                            <option value="Sóc Trăng">Sóc Trăng</option>
                            <option value="Sơn La">Sơn La</option>
                            <option value="Tây Ninh">Tây Ninh</option>
                            <option value="Thái Bình">Thái Bình</option>
                            <option value="Thái Nguyên">Thái Nguyên</option>
                            <option value="Thanh Hóa">Thanh Hóa</option>
                            <option value="Thừa Thiên - Huế">
                              Thừa Thiên - Huế
                            </option>
                            <option value="Tiền Giang">Tiền Giang</option>
                            <option value="Trà Vinh">Trà Vinh</option>
                            <option value="Tuyên Quang">Tuyên Quang</option>
                            <option value="Vĩnh Long">Vĩnh Long</option>
                            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                            <option value="Yên Bái">Yên Bái</option></select><select id="gu_name_addr" name="gu_name_addr" className fw-label="Phường/Xã" style={{}}>
                            <option value>Phường/Xã</option>
                            <option value="TP. Hồ Chí Minh">
                              TP. Hồ Chí Minh
                            </option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Cần Thơ">Cần Thơ</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="An Giang">An Giang</option>
                            <option value="Bà Rịa - Vũng Tàu">
                              Bà Rịa - Vũng Tàu
                            </option>
                            <option value="Bắc Giang">Bắc Giang</option>
                            <option value="Bắc Kạn">Bắc Kạn</option>
                            <option value="Bạc Liêu">Bạc Liêu</option>
                            <option value="Bắc Ninh">Bắc Ninh</option>
                            <option value="Bến Tre">Bến Tre</option>
                            <option value="Bình Định">Bình Định</option>
                            <option value="Bình Dương">Bình Dương</option>
                            <option value="Bình Phước">Bình Phước</option>
                            <option value="Bình Thuận">Bình Thuận</option>
                            <option value="Cà Mau">Cà Mau</option>
                            <option value="Cao Bằng">Cao Bằng</option>
                            <option value="Đắk Lắk">Đắk Lắk</option>
                            <option value="Đắk Nông">Đắk Nông</option>
                            <option value="Điện Biên">Điện Biên</option>
                            <option value="Đồng Nai">Đồng Nai</option>
                            <option value="Đồng Tháp">Đồng Tháp</option>
                            <option value="Gia Lai">Gia Lai</option>
                            <option value="Hà Giang">Hà Giang</option>
                            <option value="Hà Nam">Hà Nam</option>
                            <option value="Hà Tĩnh">Hà Tĩnh</option>
                            <option value="Hải Dương">Hải Dương</option>
                            <option value="Hậu Giang">Hậu Giang</option>
                            <option value="Hòa Bình">Hòa Bình</option>
                            <option value="Hưng Yên">Hưng Yên</option>
                            <option value="Khánh Hòa">Khánh Hòa</option>
                            <option value="Kiên Giang">Kiên Giang</option>
                            <option value="Kon Tum">Kon Tum</option>
                            <option value="Lai Châu">Lai Châu</option>
                            <option value="Lâm Đồng">Lâm Đồng</option>
                            <option value="Lạng Sơn">Lạng Sơn</option>
                            <option value="Lào Cai">Lào Cai</option>
                            <option value="Long An">Long An</option>
                            <option value="Nam Định">Nam Định</option>
                            <option value="Nghệ An">Nghệ An</option>
                            <option value="Ninh Bình">Ninh Bình</option>
                            <option value="Ninh Thuận">Ninh Thuận</option>
                            <option value="Phú Thọ">Phú Thọ</option>
                            <option value="Phú Yên">Phú Yên</option>
                            <option value="Quảng Bình">Quảng Bình</option>
                            <option value="Quảng Nam">Quảng Nam</option>
                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                            <option value="Quảng Ninh">Quảng Ninh</option>
                            <option value="Quảng Trị">Quảng Trị</option>
                            <option value="Sóc Trăng">Sóc Trăng</option>
                            <option value="Sơn La">Sơn La</option>
                            <option value="Tây Ninh">Tây Ninh</option>
                            <option value="Thái Bình">Thái Bình</option>
                            <option value="Thái Nguyên">Thái Nguyên</option>
                            <option value="Thanh Hóa">Thanh Hóa</option>
                            <option value="Thừa Thiên - Huế">
                              Thừa Thiên - Huế
                            </option>
                            <option value="Tiền Giang">Tiền Giang</option>
                            <option value="Trà Vinh">Trà Vinh</option>
                            <option value="Tuyên Quang">Tuyên Quang</option>
                            <option value="Vĩnh Long">Vĩnh Long</option>
                            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                            <option value="Yên Bái">Yên Bái</option>
                          </select>
                        </li>
                        <li id="fmodify_detailAddr_wrap" className style={{}}>
                          <input id="addr2" name="addr2" placeholder="Địa chỉ chi tiết(không bắt buộc)" fw-filter className="inputTypeText" type="text" size={60} maxLength={255} fw-label="Địa chỉ chi tiết(không bắt buộc)" style={{}} />
                        </li>
                        <li id="fmodify_zipcode_wrap" className="ec-address-zipcode" style={{}}>
                          <input id="postcode1" name="postcode1" placeholder="Mã bưu chính" fw-filter className="inputTypeText" type="text" maxLength={14} fw-label="Mã bưu chính" style={{}} />
                          <button id="postBtn" className="btnBasic displaynone" type="button" disabled fw-filter style={{display: 'none', cursor: 'pointer'}}>
                            ZIPCODEBTN.VN</button><span className="ec-base-label">
                            <input id="nozip" name="nozip" className type="checkbox" style={{cursor: 'unset'}} />
                            <label id="modify_zipcode_check_label" htmlFor="nozip" className disabled style={{}}>Không có mã bưu chính</label> </span><span id="fmodify_zipcodeNotFoundMsg_wrap" className="ec-base-label displaynone">
                            Mã bưu chính không chính xác. Vui lòng kiểm tra
                            lại.
                          </span>
                        </li>
                        <li id="fmodify_baseAddr_wrap" className="displaynone" style={{display: 'none'}}>
                          <input id="addr1" name="addr1" placeholder="Phường/Xã" fw-filter className="inputTypeText displaynone" type="text" size={60} maxLength={100} disabled style={{display: 'none'}} />
                        </li>
                        <li id="fmodify_state_wrap" className="displaynone" style={{display: 'none'}}>
                          <select id="stateListUs" name="stateListUs" className="displaynone" disabled fw-filter style={{display: 'none'}}>
                            <option value>Tiểu bang</option></select><select id="stateListCa" name="stateListCa" className="displaynone" disabled fw-filter style={{display: 'none'}}>
                            <option value>
                              Tỉnh bang/Vùng lãnh thổ
                            </option></select><input id="state_name" name="state_name" placeholder="Tỉnh/Thành" fw-filter className="inputTypeText displaynone" type="text" size={30} maxLength={50} disabled style={{display: 'none'}} />
                        </li>
                        <li id="fmodify_city_wrap" className="displaynone" style={{display: 'none'}}>
                          <input id="city_name" name="city_name" placeholder="Quận/Huyện" fw-filter className="inputTypeText displaynone" type="text" size={30} maxLength={50} disabled style={{display: 'none'}} />
                        </li>
                        <li id="fmodify_street_wrap" className="displaynone">
                          <input id="street_name" name="street_name" placeholder="Phường/Xã" fw-filter className="inputTypeText displaynone" type="text" size={30} maxLength={50} disabled style={{display: 'none'}} />
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Điện Thoại
                      <img src="./assets/imgs/ico_required.png" className width={5} height={5} alt="Required" />
                    </h3>
                    <div className="phone-td">
                      <select id="phone1" name="phone[]">
                        <option value={93}>Afghanistan(+93)</option>
                        <option value={355}>Albania(+355)</option>
                        <option value={213}>Algeria(+213)</option>
                        <option value={1684}>American Samoa(+1684)</option>
                        <option value={376}>Andorra(+376)</option>
                        <option value={244}>Angola(+244)</option>
                        <option value={1264}>Anguilla(+1264)</option>
                        <option value={1268}>
                          Antigua and Barbuda(+1268)
                        </option>
                        <option value={54}>Argentina(+54)</option>
                        <option value={374}>Armenia(+374)</option>
                        <option value={297}>Aruba(+297)</option>
                        <option value={61}>Australia(+61)</option>
                        <option value={43}>Austria(+43)</option>
                        <option value={994}>Azerbaijan(+994)</option>
                        <option value={1242}>Bahamas(+1242)</option>
                        <option value={973}>Bahrain(+973)</option>
                        <option value={880}>Bangladesh(+880)</option>
                        <option value={1246}>Barbados(+1246)</option>
                        <option value={375}>Belarus(+375)</option>
                        <option value={32}>Belgium(+32)</option>
                        <option value={501}>Belize(+501)</option>
                        <option value={229}>Benin(+229)</option>
                        <option value={1441}>Bermuda(+1441)</option>
                        <option value={975}>Bhutan(+975)</option>
                        <option value={591}>
                          Bolivia, Pluricountryal State of(+591)
                        </option>
                        <option value={387}>
                          Bosnia and Herzegovina(+387)
                        </option>
                        <option value={267}>Botswana(+267)</option>
                        <option value={55}>Brazil(+55)</option>
                        <option value={673}>Brunei Darussalam(+673)</option>
                        <option value={359}>Bulgaria(+359)</option>
                        <option value={226}>Burkina Faso(+226)</option>
                        <option value={257}>Burundi(+257)</option>
                        <option value={855}>Cambodia(+855)</option>
                        <option value={237}>Cameroon(+237)</option>
                        <option value={1}>Canada(+1)</option>
                        <option value={238}>Cape Verde(+238)</option>
                        <option value={1345}>Cayman Islands(+1345)</option>
                        <option value={236}>
                          Central African Republic(+236)
                        </option>
                        <option value={235}>Chad(+235)</option>
                        <option value={56}>Chile(+56)</option>
                        <option value={86}>China(+86)</option>
                        <option value={57}>Colombia(+57)</option>
                        <option value={269}>Comoros(+269)</option>
                        <option value={242}>Congo(+242)</option>
                        <option value={243}>
                          Congo, the Democratic Republic of the(+243)
                        </option>
                        <option value={682}>Cook Islands(+682)</option>
                        <option value={506}>Costa Rica(+506)</option>
                        <option value={225}>Cote d'Ivoire(+225)</option>
                        <option value={385}>Croatia(+385)</option>
                        <option value={53}>Cuba(+53)</option>
                        <option value={357}>Cyprus(+357)</option>
                        <option value={420}>Czech Republic(+420)</option>
                        <option value={45}>Denmark(+45)</option>
                        <option value={253}>Djibouti(+253)</option>
                        <option value={1767}>Dominica(+1767)</option>
                        <option value={1809}>
                          Dominican Republic(+1809)
                        </option>
                        <option value={593}>Ecuador(+593)</option>
                        <option value={20}>Egypt(+20)</option>
                        <option value={503}>El Salvador(+503)</option>
                        <option value={240}>Equatorial Guinea(+240)</option>
                        <option value={291}>Eritrea(+291)</option>
                        <option value={372}>Estonia(+372)</option>
                        <option value={251}>Ethiopia(+251)</option>
                        <option value={500}>
                          Falkland Islands (Malvinas)(+500)
                        </option>
                        <option value={298}>Faroe Islands(+298)</option>
                        <option value={679}>Fiji(+679)</option>
                        <option value={358}>Finland(+358)</option>
                        <option value={33}>France(+33)</option>
                        <option value={594}>French Guiana(+594)</option>
                        <option value={689}>French Polynesia(+689)</option>
                        <option value={241}>Gabon(+241)</option>
                        <option value={220}>Gambia(+220)</option>
                        <option value={995}>Georgia(+995)</option>
                        <option value={49}>Germany(+49)</option>
                        <option value={233}>Ghana(+233)</option>
                        <option value={350}>Gibraltar(+350)</option>
                        <option value={30}>Greece(+30)</option>
                        <option value={299}>Greenland(+299)</option>
                        <option value={1473}>Grenada(+1473)</option>
                        <option value={590}>Guadeloupe(+590)</option>
                        <option value={1671}>Guam(+1671)</option>
                        <option value={502}>Guatemala(+502)</option>
                        <option value={224}>Guinea(+224)</option>
                        <option value={245}>Guinea-Bissau(+245)</option>
                        <option value={592}>Guyana(+592)</option>
                        <option value={509}>Haiti(+509)</option>
                        <option value={379}>
                          Holy See (Vatican City State)(+379)
                        </option>
                        <option value={504}>Honduras(+504)</option>
                        <option value={852}>Hong Kong(+852)</option>
                        <option value={36}>Hungary(+36)</option>
                        <option value={354}>Iceland(+354)</option>
                        <option value={91}>India(+91)</option>
                        <option value={62}>Indonesia(+62)</option>
                        <option value={98}>
                          Iran, Islamic Republic of(+98)
                        </option>
                        <option value={964}>Iraq(+964)</option>
                        <option value={353}>Ireland(+353)</option>
                        <option value={972}>Israel(+972)</option>
                        <option value={39}>Italy(+39)</option>
                        <option value={1876}>Jamaica(+1876)</option>
                        <option value={81}>Japan(+81)</option>
                        <option value={962}>Jordan(+962)</option>
                        <option value={7}>Kazakhstan(+7)</option>
                        <option value={254}>Kenya(+254)</option>
                        <option value={686}>Kiribati(+686)</option>
                        <option value={850}>
                          Korea, Democratic People's Republic of(+850)
                        </option>
                        <option value={82}>Korea, Republic of(+82)</option>
                        <option value={383}>Kosovo(+383)</option>
                        <option value={965}>Kuwait(+965)</option>
                        <option value={996}>Kyrgyzstan(+996)</option>
                        <option value={856}>
                          Lao People's Democratic Republic(+856)
                        </option>
                        <option value={371}>Latvia(+371)</option>
                        <option value={961}>Lebanon(+961)</option>
                        <option value={266}>Lesotho(+266)</option>
                        <option value={231}>Liberia(+231)</option>
                        <option value={218}>
                          Libyan Arab Jamahiriya(+218)
                        </option>
                        <option value={423}>Liechtenstein(+423)</option>
                        <option value={370}>Lithuania(+370)</option>
                        <option value={352}>Luxembourg(+352)</option>
                        <option value={853}>Macau(+853)</option>
                        <option value={389}>
                          Macedonia, the former Yugoslav Republic of(+389)
                        </option>
                        <option value={261}>Madagascar(+261)</option>
                        <option value={265}>Malawi(+265)</option>
                        <option value={60}>Malaysia(+60)</option>
                        <option value={960}>Maldives(+960)</option>
                        <option value={223}>Mali(+223)</option>
                        <option value={356}>Malta(+356)</option>
                        <option value={692}>Marshall Islands(+692)</option>
                        <option value={596}>Martinique(+596)</option>
                        <option value={222}>Mauritania(+222)</option>
                        <option value={230}>Mauritius(+230)</option>
                        <option value={262}>Mayotte(+262)</option>
                        <option value={52}>Mexico(+52)</option>
                        <option value={691}>
                          Micronesia, Federated States of(+691)
                        </option>
                        <option value={373}>
                          Moldova, Republic of(+373)
                        </option>
                        <option value={377}>Monaco(+377)</option>
                        <option value={976}>Mongolia(+976)</option>
                        <option value={382}>Montenegro(+382)</option>
                        <option value={1664}>Montserrat(+1664)</option>
                        <option value={212}>Morocco(+212)</option>
                        <option value={258}>Mozambique(+258)</option>
                        <option value={95}>Myanmar(+95)</option>
                        <option value={264}>Namibia(+264)</option>
                        <option value={674}>Nauru(+674)</option>
                        <option value={977}>Nepal(+977)</option>
                        <option value={31}>Netherlands(+31)</option>
                        <option value={599}>
                          Netherlands Antilles(+599)
                        </option>
                        <option value={687}>New Caledonia(+687)</option>
                        <option value={64}>New Zealand(+64)</option>
                        <option value={505}>Nicaragua(+505)</option>
                        <option value={227}>Niger(+227)</option>
                        <option value={234}>Nigeria(+234)</option>
                        <option value={683}>Niue(+683)</option>
                        <option value={672}>Norfolk Island(+672)</option>
                        <option value={1670}>
                          Northern Mariana Islands(+1670)
                        </option>
                        <option value={47}>Norway(+47)</option>
                        <option value={968}>Oman(+968)</option>
                        <option value={92}>Pakistan(+92)</option>
                        <option value={680}>Palau(+680)</option>
                        <option value={507}>Panama(+507)</option>
                        <option value={675}>Papua New Guinea(+675)</option>
                        <option value={595}>Paraguay(+595)</option>
                        <option value={51}>Peru(+51)</option>
                        <option value={63}>Philippines(+63)</option>
                        <option value={870}>Pitcairn(+870)</option>
                        <option value={48}>Poland(+48)</option>
                        <option value={351}>Portugal(+351)</option>
                        <option value={1}>Puerto Rico(+1)</option>
                        <option value={974}>Qatar(+974)</option>
                        <option value={262}>Reunion(+262)</option>
                        <option value={40}>Romania(+40)</option>
                        <option value={7}>Russian Federation(+7)</option>
                        <option value={250}>Rwanda(+250)</option>
                        <option value={290}>
                          Saint Helena, Ascension and Tristan da Cunha(+290)
                        </option>
                        <option value={1869}>
                          Saint Kitts and Nevis(+1869)
                        </option>
                        <option value={1758}>Saint Lucia(+1758)</option>
                        <option value={508}>
                          Saint Pierre and Miquelon(+508)
                        </option>
                        <option value={1784}>
                          Saint Vincent and the Grenadines(+1784)
                        </option>
                        <option value={685}>Samoa(+685)</option>
                        <option value={378}>San Marino(+378)</option>
                        <option value={239}>
                          Sao Tome and Principe(+239)
                        </option>
                        <option value={966}>Saudi Arabia(+966)</option>
                        <option value={221}>Senegal(+221)</option>
                        <option value={381}>Serbia(+381)</option>
                        <option value={248}>Seychelles(+248)</option>
                        <option value={232}>Sierra Leone(+232)</option>
                        <option value={65}>Singapore(+65)</option>
                        <option value={421}>Slovakia(+421)</option>
                        <option value={386}>Slovenia(+386)</option>
                        <option value={677}>Solomon Islands(+677)</option>
                        <option value={252}>Somalia(+252)</option>
                        <option value={27}>South Africa(+27)</option>
                        <option value={34}>Spain(+34)</option>
                        <option value={94}>Sri Lanka(+94)</option>
                        <option value={249}>Sudan(+249)</option>
                        <option value={597}>Suriname(+597)</option>
                        <option value={268}>Swaziland(+268)</option>
                        <option value={46}>Sweden(+46)</option>
                        <option value={41}>Switzerland(+41)</option>
                        <option value={963}>
                          Syrian Arab Republic(+963)
                        </option>
                        <option value={886}>Taiwan(+886)</option>
                        <option value={992}>Tajikistan(+992)</option>
                        <option value={255}>
                          Tanzania, United Republic of(+255)
                        </option>
                        <option value={66}>Thailand(+66)</option>
                        <option value={670}>Timor-Leste(+670)</option>
                        <option value={228}>Togo(+228)</option>
                        <option value={690}>Tokelau(+690)</option>
                        <option value={676}>Tonga(+676)</option>
                        <option value={1868}>
                          Trinidad and Tobago(+1868)
                        </option>
                        <option value={216}>Tunisia(+216)</option>
                        <option value={90}>Turkey(+90)</option>
                        <option value={993}>Turkmenistan(+993)</option>
                        <option value={1649}>
                          Turks and Caicos Islands(+1649)
                        </option>
                        <option value={688}>Tuvalu(+688)</option>
                        <option value={256}>Uganda(+256)</option>
                        <option value={380}>Ukraine(+380)</option>
                        <option value={971}>
                          United Arab Emirates(+971)
                        </option>
                        <option value={44}>United Kingdom(+44)</option>
                        <option value={1}>United States(+1)</option>
                        <option value={598}>Uruguay(+598)</option>
                        <option value={998}>Uzbekistan(+998)</option>
                        <option value={678}>Vanuatu(+678)</option>
                        <option value={58}>
                          Venezuela, Bolivarian Republic of(+58)
                        </option>
                        <option value={84}>Viet Nam(+84)</option>
                        <option value={1284}>
                          Virgin Islands, British(+1284)
                        </option>
                        <option value={1340}>
                          Virgin Islands, U.S.(+1340)
                        </option>
                        <option value={681}>Wallis and Futuna(+681)</option>
                        <option value={967}>Yemen(+967)</option>
                        <option value={260}>Zambia(+260)</option>
                        <option value={263}>Zimbabwe(+263)</option></select>-<input id="phone2" name="phone[]" maxLength={15} defaultValue type="text" />
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Điện Thoại Di Động
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div className="phone-td">
                      <select id="mobile1" name="mobile[]">
                        <option value={93}>Afghanistan(+93)</option>
                        <option value={355}>Albania(+355)</option>
                        <option value={213}>Algeria(+213)</option>
                        <option value={1684}>American Samoa(+1684)</option>
                        <option value={376}>Andorra(+376)</option>
                        <option value={244}>Angola(+244)</option>
                        <option value={1264}>Anguilla(+1264)</option>
                        <option value={1268}>
                          Antigua and Barbuda(+1268)
                        </option>
                        <option value={54}>Argentina(+54)</option>
                        <option value={374}>Armenia(+374)</option>
                        <option value={297}>Aruba(+297)</option>
                        <option value={61}>Australia(+61)</option>
                        <option value={43}>Austria(+43)</option>
                        <option value={994}>Azerbaijan(+994)</option>
                        <option value={1242}>Bahamas(+1242)</option>
                        <option value={973}>Bahrain(+973)</option>
                        <option value={880}>Bangladesh(+880)</option>
                        <option value={1246}>Barbados(+1246)</option>
                        <option value={375}>Belarus(+375)</option>
                        <option value={32}>Belgium(+32)</option>
                        <option value={501}>Belize(+501)</option>
                        <option value={229}>Benin(+229)</option>
                        <option value={1441}>Bermuda(+1441)</option>
                        <option value={975}>Bhutan(+975)</option>
                        <option value={591}>
                          Bolivia, Pluricountryal State of(+591)
                        </option>
                        <option value={387}>
                          Bosnia and Herzegovina(+387)
                        </option>
                        <option value={267}>Botswana(+267)</option>
                        <option value={55}>Brazil(+55)</option>
                        <option value={673}>Brunei Darussalam(+673)</option>
                        <option value={359}>Bulgaria(+359)</option>
                        <option value={226}>Burkina Faso(+226)</option>
                        <option value={257}>Burundi(+257)</option>
                        <option value={855}>Cambodia(+855)</option>
                        <option value={237}>Cameroon(+237)</option>
                        <option value={1}>Canada(+1)</option>
                        <option value={238}>Cape Verde(+238)</option>
                        <option value={1345}>Cayman Islands(+1345)</option>
                        <option value={236}>
                          Central African Republic(+236)
                        </option>
                        <option value={235}>Chad(+235)</option>
                        <option value={56}>Chile(+56)</option>
                        <option value={86}>China(+86)</option>
                        <option value={57}>Colombia(+57)</option>
                        <option value={269}>Comoros(+269)</option>
                        <option value={242}>Congo(+242)</option>
                        <option value={243}>
                          Congo, the Democratic Republic of the(+243)
                        </option>
                        <option value={682}>Cook Islands(+682)</option>
                        <option value={506}>Costa Rica(+506)</option>
                        <option value={225}>Cote d'Ivoire(+225)</option>
                        <option value={385}>Croatia(+385)</option>
                        <option value={53}>Cuba(+53)</option>
                        <option value={357}>Cyprus(+357)</option>
                        <option value={420}>Czech Republic(+420)</option>
                        <option value={45}>Denmark(+45)</option>
                        <option value={253}>Djibouti(+253)</option>
                        <option value={1767}>Dominica(+1767)</option>
                        <option value={1809}>
                          Dominican Republic(+1809)
                        </option>
                        <option value={593}>Ecuador(+593)</option>
                        <option value={20}>Egypt(+20)</option>
                        <option value={503}>El Salvador(+503)</option>
                        <option value={240}>Equatorial Guinea(+240)</option>
                        <option value={291}>Eritrea(+291)</option>
                        <option value={372}>Estonia(+372)</option>
                        <option value={251}>Ethiopia(+251)</option>
                        <option value={500}>
                          Falkland Islands (Malvinas)(+500)
                        </option>
                        <option value={298}>Faroe Islands(+298)</option>
                        <option value={679}>Fiji(+679)</option>
                        <option value={358}>Finland(+358)</option>
                        <option value={33}>France(+33)</option>
                        <option value={594}>French Guiana(+594)</option>
                        <option value={689}>French Polynesia(+689)</option>
                        <option value={241}>Gabon(+241)</option>
                        <option value={220}>Gambia(+220)</option>
                        <option value={995}>Georgia(+995)</option>
                        <option value={49}>Germany(+49)</option>
                        <option value={233}>Ghana(+233)</option>
                        <option value={350}>Gibraltar(+350)</option>
                        <option value={30}>Greece(+30)</option>
                        <option value={299}>Greenland(+299)</option>
                        <option value={1473}>Grenada(+1473)</option>
                        <option value={590}>Guadeloupe(+590)</option>
                        <option value={1671}>Guam(+1671)</option>
                        <option value={502}>Guatemala(+502)</option>
                        <option value={224}>Guinea(+224)</option>
                        <option value={245}>Guinea-Bissau(+245)</option>
                        <option value={592}>Guyana(+592)</option>
                        <option value={509}>Haiti(+509)</option>
                        <option value={379}>
                          Holy See (Vatican City State)(+379)
                        </option>
                        <option value={504}>Honduras(+504)</option>
                        <option value={852}>Hong Kong(+852)</option>
                        <option value={36}>Hungary(+36)</option>
                        <option value={354}>Iceland(+354)</option>
                        <option value={91}>India(+91)</option>
                        <option value={62}>Indonesia(+62)</option>
                        <option value={98}>
                          Iran, Islamic Republic of(+98)
                        </option>
                        <option value={964}>Iraq(+964)</option>
                        <option value={353}>Ireland(+353)</option>
                        <option value={972}>Israel(+972)</option>
                        <option value={39}>Italy(+39)</option>
                        <option value={1876}>Jamaica(+1876)</option>
                        <option value={81}>Japan(+81)</option>
                        <option value={962}>Jordan(+962)</option>
                        <option value={7}>Kazakhstan(+7)</option>
                        <option value={254}>Kenya(+254)</option>
                        <option value={686}>Kiribati(+686)</option>
                        <option value={850}>
                          Korea, Democratic People's Republic of(+850)
                        </option>
                        <option value={82}>Korea, Republic of(+82)</option>
                        <option value={383}>Kosovo(+383)</option>
                        <option value={965}>Kuwait(+965)</option>
                        <option value={996}>Kyrgyzstan(+996)</option>
                        <option value={856}>
                          Lao People's Democratic Republic(+856)
                        </option>
                        <option value={371}>Latvia(+371)</option>
                        <option value={961}>Lebanon(+961)</option>
                        <option value={266}>Lesotho(+266)</option>
                        <option value={231}>Liberia(+231)</option>
                        <option value={218}>
                          Libyan Arab Jamahiriya(+218)
                        </option>
                        <option value={423}>Liechtenstein(+423)</option>
                        <option value={370}>Lithuania(+370)</option>
                        <option value={352}>Luxembourg(+352)</option>
                        <option value={853}>Macau(+853)</option>
                        <option value={389}>
                          Macedonia, the former Yugoslav Republic of(+389)
                        </option>
                        <option value={261}>Madagascar(+261)</option>
                        <option value={265}>Malawi(+265)</option>
                        <option value={60}>Malaysia(+60)</option>
                        <option value={960}>Maldives(+960)</option>
                        <option value={223}>Mali(+223)</option>
                        <option value={356}>Malta(+356)</option>
                        <option value={692}>Marshall Islands(+692)</option>
                        <option value={596}>Martinique(+596)</option>
                        <option value={222}>Mauritania(+222)</option>
                        <option value={230}>Mauritius(+230)</option>
                        <option value={262}>Mayotte(+262)</option>
                        <option value={52}>Mexico(+52)</option>
                        <option value={691}>
                          Micronesia, Federated States of(+691)
                        </option>
                        <option value={373}>
                          Moldova, Republic of(+373)
                        </option>
                        <option value={377}>Monaco(+377)</option>
                        <option value={976}>Mongolia(+976)</option>
                        <option value={382}>Montenegro(+382)</option>
                        <option value={1664}>Montserrat(+1664)</option>
                        <option value={212}>Morocco(+212)</option>
                        <option value={258}>Mozambique(+258)</option>
                        <option value={95}>Myanmar(+95)</option>
                        <option value={264}>Namibia(+264)</option>
                        <option value={674}>Nauru(+674)</option>
                        <option value={977}>Nepal(+977)</option>
                        <option value={31}>Netherlands(+31)</option>
                        <option value={599}>
                          Netherlands Antilles(+599)
                        </option>
                        <option value={687}>New Caledonia(+687)</option>
                        <option value={64}>New Zealand(+64)</option>
                        <option value={505}>Nicaragua(+505)</option>
                        <option value={227}>Niger(+227)</option>
                        <option value={234}>Nigeria(+234)</option>
                        <option value={683}>Niue(+683)</option>
                        <option value={672}>Norfolk Island(+672)</option>
                        <option value={1670}>
                          Northern Mariana Islands(+1670)
                        </option>
                        <option value={47}>Norway(+47)</option>
                        <option value={968}>Oman(+968)</option>
                        <option value={92}>Pakistan(+92)</option>
                        <option value={680}>Palau(+680)</option>
                        <option value={507}>Panama(+507)</option>
                        <option value={675}>Papua New Guinea(+675)</option>
                        <option value={595}>Paraguay(+595)</option>
                        <option value={51}>Peru(+51)</option>
                        <option value={63}>Philippines(+63)</option>
                        <option value={870}>Pitcairn(+870)</option>
                        <option value={48}>Poland(+48)</option>
                        <option value={351}>Portugal(+351)</option>
                        <option value={1}>Puerto Rico(+1)</option>
                        <option value={974}>Qatar(+974)</option>
                        <option value={262}>Reunion(+262)</option>
                        <option value={40}>Romania(+40)</option>
                        <option value={7}>Russian Federation(+7)</option>
                        <option value={250}>Rwanda(+250)</option>
                        <option value={290}>
                          Saint Helena, Ascension and Tristan da Cunha(+290)
                        </option>
                        <option value={1869}>
                          Saint Kitts and Nevis(+1869)
                        </option>
                        <option value={1758}>Saint Lucia(+1758)</option>
                        <option value={508}>
                          Saint Pierre and Miquelon(+508)
                        </option>
                        <option value={1784}>
                          Saint Vincent and the Grenadines(+1784)
                        </option>
                        <option value={685}>Samoa(+685)</option>
                        <option value={378}>San Marino(+378)</option>
                        <option value={239}>
                          Sao Tome and Principe(+239)
                        </option>
                        <option value={966}>Saudi Arabia(+966)</option>
                        <option value={221}>Senegal(+221)</option>
                        <option value={381}>Serbia(+381)</option>
                        <option value={248}>Seychelles(+248)</option>
                        <option value={232}>Sierra Leone(+232)</option>
                        <option value={65}>Singapore(+65)</option>
                        <option value={421}>Slovakia(+421)</option>
                        <option value={386}>Slovenia(+386)</option>
                        <option value={677}>Solomon Islands(+677)</option>
                        <option value={252}>Somalia(+252)</option>
                        <option value={27}>South Africa(+27)</option>
                        <option value={34}>Spain(+34)</option>
                        <option value={94}>Sri Lanka(+94)</option>
                        <option value={249}>Sudan(+249)</option>
                        <option value={597}>Suriname(+597)</option>
                        <option value={268}>Swaziland(+268)</option>
                        <option value={46}>Sweden(+46)</option>
                        <option value={41}>Switzerland(+41)</option>
                        <option value={963}>
                          Syrian Arab Republic(+963)
                        </option>
                        <option value={886}>Taiwan(+886)</option>
                        <option value={992}>Tajikistan(+992)</option>
                        <option value={255}>
                          Tanzania, United Republic of(+255)
                        </option>
                        <option value={66}>Thailand(+66)</option>
                        <option value={670}>Timor-Leste(+670)</option>
                        <option value={228}>Togo(+228)</option>
                        <option value={690}>Tokelau(+690)</option>
                        <option value={676}>Tonga(+676)</option>
                        <option value={1868}>
                          Trinidad and Tobago(+1868)
                        </option>
                        <option value={216}>Tunisia(+216)</option>
                        <option value={90}>Turkey(+90)</option>
                        <option value={993}>Turkmenistan(+993)</option>
                        <option value={1649}>
                          Turks and Caicos Islands(+1649)
                        </option>
                        <option value={688}>Tuvalu(+688)</option>
                        <option value={256}>Uganda(+256)</option>
                        <option value={380}>Ukraine(+380)</option>
                        <option value={971}>
                          United Arab Emirates(+971)
                        </option>
                        <option value={44}>United Kingdom(+44)</option>
                        <option value={1}>United States(+1)</option>
                        <option value={598}>Uruguay(+598)</option>
                        <option value={998}>Uzbekistan(+998)</option>
                        <option value={678}>Vanuatu(+678)</option>
                        <option value={58}>
                          Venezuela, Bolivarian Republic of(+58)
                        </option>
                        <option value={84}>Viet Nam(+84)</option>
                        <option value={1284}>
                          Virgin Islands, British(+1284)
                        </option>
                        <option value={1340}>
                          Virgin Islands, U.S.(+1340)
                        </option>
                        <option value={681}>Wallis and Futuna(+681)</option>
                        <option value={967}>Yemen(+967)</option>
                        <option value={260}>Zambia(+260)</option>
                        <option value={263}>Zimbabwe(+263)</option></select>-<input id="mobile2" name="mobile[]" maxLength={15} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      Dịch Vụ<br />Tin Nhắn SMS
                      <img src="./assets/imgs/ico_required.png" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="is_sms0" name="is_sms" defaultValue="T" type="radio" /><label htmlFor="is_sms0">Nhận tin</label>
                      <input id="is_sms1" name="is_sms" defaultValue="F" type="radio" defaultChecked="checked" /><label htmlFor="is_sms1">Không nhận tin</label>
                      <p className="ec-base-help typeDash">
                        Đăng ký để nhận các cập nhật mới nhất và ưu đãi đặc
                        biệt qua SMS.
                      </p>
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Bản tin
                      <img src="./assets/imgs/ico_required.png" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="is_news_mail0" name="is_news_mail" defaultValue="T" type="radio" /><label htmlFor="is_news_mail0">Nhận tin</label>
                      <input id="is_news_mail1" name="is_news_mail" defaultValue="F" type="radio" defaultChecked="checked" /><label htmlFor="is_news_mail1">Không nhận tin</label>
                      <p className="ec-base-help typeDash">
                        Cập nhật các tin tức mới nhất cho tôi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <h3 className>Thông Tin Thêm</h3>
              <div className="ec-base-table typeWrite gClearBorderTop">
                <ul>
                  <li className="displaynone">
                    <h3>
                      Nickname
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="nick_name" name="nick_name" className="inputTypeText" placeholder maxLength={20} defaultValue type="text" />
                      <p id="nickMsg" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      Giới Tính
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="is_sex0" name="is_sex" defaultValue="M" type="radio" /><label htmlFor="is_sex0">Nam</label>
                      <input id="is_sex1" name="is_sex" defaultValue="F" type="radio" /><label htmlFor="is_sex1">Nữ</label>
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Ngày Sinh
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <p className="gBreak7">
                        <input id="is_solar_calendar0" name="is_solar_calendar" defaultValue="T" type="radio" defaultChecked="checked" /><label htmlFor="is_solar_calendar0">Dương lịch</label>
                        <input id="is_solar_calendar1" name="is_solar_calendar" defaultValue="F" type="radio" /><label htmlFor="is_solar_calendar1">Âm lịch</label>
                      </p>
                      <input id="birth_month" name="birth_month" className="inputTypeText" placeholder maxLength={2} defaultValue type="text" />
                      /
                      <input id="birth_day" name="birth_day" className="inputTypeText" placeholder maxLength={2} defaultValue type="text" />
                      /
                      <input id="birth_year" name="birth_year" className="inputTypeText" placeholder maxLength={4} defaultValue type="text" />
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Kỷ niệm ngày cưới
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="marry_month" name="marry_month" className="inputTypeText" placeholder maxLength={2} defaultValue type="text" />
                      /
                      <input id="marry_day" name="marry_day" className="inputTypeText" placeholder maxLength={2} defaultValue type="text" />
                      /
                      <input id="marry_year" name="marry_year" className="inputTypeText" placeholder maxLength={4} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="add1" name="add1" className="inputTypeText" placeholder maxLength={200} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="add2" name="add2" className="inputTypeText" placeholder maxLength={200} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="add3" name="add3" className="inputTypeText" placeholder maxLength={200} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="add4" name="add4" className="inputTypeText" placeholder maxLength={200} defaultValue type="text" />
                    </div>
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div />
                  </li>
                  <li className="displaynone">
                    <h3>
                      Người giới thiệu
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={5} height={5} alt="Required" />
                    </h3>
                    <div>
                      <input id="reco_id" name="reco_id" className="inputTypeText" placeholder defaultValue type="text" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="displaynone agreeArea">
                <div className="title">
                  <h4>
                    <input id="agree_privacy_optional_check0" name="agree_privacy_optional_check[]" defaultValue="T" type="checkbox" /><label htmlFor="agree_privacy_optional_check0">Đồng ý</label><label htmlFor="agree_privacy_optional_check0" className="check">Chính sách thu thập và sử dụng thông tin cá nhân (không
                      bắt buộc)</label>
                  </h4>
                  <a href="/member/agreement/agreement6.html" className="btnMore" target="_blank">Xem Tất Cả</a>
                </div>
                <div className="contents">
                  <div className="fr-view fr-view-privacy-optional">
                    ** Mẫu văn bản này được soạn thảo và ban hành nhằm hỗ trợ
                    hoạt động điều hành Trang mua sắm. Trước khi áp dụng vào
                    Trang mua sắm, vui lòng kiểm tra nội dung hoạt động chi
                    tiết của Trang mua sắm và xác nhận mức độ phù hợp của các
                    nội dung liên quan. **<br /><br />1. Mục đích thu thập và
                    sử dụng thông tin cá nhân<br />Liệt kê mục đích sử dụng
                    các hạng mục không bắt buộc được nhập khi đăng ký thành
                    viên (Ví dụ: Dùng với mục đích marketing và gợi ý nội dung
                    phù hợp với khác hàng).<br /><br />2. Hạng mục thông tin
                    cá nhân được thu thập<br />Liệt kê các hạng mục không bắt
                    buộc được nhập khi khách hàng đăng ký thành viên (Ví dụ:
                    ngày sinh, giới tính).<br /><br />3. Thời hạn lưu giữ và
                    sử dụng thông tin cá nhân<br />Thông tin cá nhân sẽ được
                    hủy ngay lập khi xóa các hạng mục này bằng cách chỉnh sửa
                    thông tin thành viên hoặc đóng tài khoản.<br /><br />Khách
                    hàng vẫn có thể sử dụng dịch vụ ngay cả khi không đồng ý
                    với các điều khoản này.
                  </div>
                </div>
              </div>
              <div className="displaynone agreeArea">
                <div className="title">
                  <h4>
                    <input id="agree_information_check0" name="agree_information_check[]" defaultValue={1} type="checkbox" /><label htmlFor="agree_information_check0">Đồng ý</label><label htmlFor="agree_information_check0" className="check">Tiết Lộ Thông Tin cho Bên Thứ Ba (Không bắt
                      buộc)</label>
                  </h4>
                  <a href="/member/agreement/agreement3.html" className="btnMore" target="_blank">Xem Tất Cả</a>
                </div>
                <div className="contents">
                  Việc có hay không đồng ý với nội dung dưới đây không ảnh
                  hưởng đến việc gia nhập thành viên. Tuy nhiên, nếu từ chối
                  đồng ý, bạn có thể bị hạn chế trong việc sử dụng dịch vụ.<br />
                  - Người nhận cung cấp:<br />
                  - Hạng mục cung cấp:<br />
                  - Mục đích cung cấp:<br />
                  - Thời gian lưu giữ và sử dụng:
                </div>
              </div>
              <div className="displaynone agreeArea">
                <div className="title">
                  <h4>
                    <input id="agree_consignment_check0" name="agree_consignment_check[]" defaultValue={1} type="checkbox" /><label htmlFor="agree_consignment_check0">Đồng ý</label><label htmlFor="agree_consignment_check0" className="check">Ủy Thác Xử Lý Thông Tin Cá Nhân (Không bắt buộc)</label>
                  </h4>
                  <a href="/member/agreement/agreement4.html" className="btnMore" target="_blank">Xem Tất Cả</a>
                </div>
                <div className="contents">
                  Việc có hay không đồng ý với nội dung dưới đây không ảnh
                  hưởng đến việc gia nhập thành viên. Tuy nhiên, nếu từ chối
                  đồng ý, bạn có thể bị hạn chế trong việc sử dụng dịch vụ.<br />
                  - Người nhận ủy thác (đơn vị nhận ủy thác):<br />
                  - Nội dung ủy thác:
                </div>
              </div>
              <div className="ec-base-button gColumn">
                <a href="#none" className="btnBlue" onclick="memberEditAction()">Lưu</a>
                <a href="/index.html" className="btnWhite">Huỷ</a>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AccountInfoRes