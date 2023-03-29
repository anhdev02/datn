import React from 'react'

const RegisterRes = () => {
  return (
    <div id="contents">
        <div className="root_width myshop_width">
          <form id="joinForm" name="joinForm" action="/exec/front/Member/join/" method="post" target="_self" encType="multipart/form-data">
            <div className="xans-element- xans-member xans-member-join">
              <div className="titleArea-new">
                <h2>Thông tin tài khoản</h2>
              </div>
              <div className="ec-base-table typeWrite gClearBorderTop">
                <ul>
                  <li className="emailCheck">
                    <h3>
                      Địa Chỉ Email
                      <img src="./assets/imgs/ico_required.png" width={7} height={7} alt="Required" />
                    </h3>
                    <div>
                      <input id="email1" name="email1" defaultValue type="text" />
                    </div>
                  </li>
                  <li>
                    <h3>
                      Mật Khẩu
                      <img src="./assets/imgs/ico_required.png" width={7} height={7} alt="Required" />
                    </h3>
                    <div>
                      <div className="ec-base-tooltip-area">
                        <span className="eTip"><input id="passwd" name="passwd" autoComplete="off" maxLength={16} defaultValue type="password" /></span>
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
                  <li>
                    <h3 className="pwConfirm">
                      Xác Nhận Mật Khẩu
                      <img src="./assets/imgs/ico_required.png" width={7} height={7} alt="Required" />
                    </h3>
                    <div>
                      <input id="user_passwd_confirm" name="user_passwd_confirm" autoComplete="off" maxLength={16} defaultValue type="password" />
                    </div>
                  </li>
                  <li className="idCheck displaynone">
                    <h3>
                      ID
                      <img src="./assets/imgs/ico_required.png" width={7} height={7} alt="Required" />
                    </h3>
                    <div>
                      <input id="member_id" name="member_id" className="inputTypeText" placeholder defaultValue type="text" />
                      <button type="button" className="btnBasic">
                        Kiểm tra trùng lặp
                      </button>
                      <p id="idMsg" />
                    </div>
                  </li>
                  <li className>
                    <h3 id="nameTitle">
                      Tên
                      <img src="./assets/imgs/ico_required.png" className width={7} height={7} alt="Required" />
                    </h3>
                    <div>
                      <span id="nameContents"><input id="name" name="name" className="ec-member-name" placeholder maxLength={30} defaultValue type="text" /></span>
                      <p id="under14Msg" className="displaynone ec-base-help typeDash">
                        Nếu bạn dưới 14 tuổi, bạn cần có giấy đồng ý được công
                        chứng của người giám hộ hợp pháp.
                      </p>
                      <p id="idMsg" />
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Địa Chỉ
                      <img src="./assets/imgs/ico_required.png" className="displaynone" width={7} height={7} alt="Required" />
                    </h3>
                    <div>
                      <ul className="ec-address">
                        <li id="join_country_wrap" className style={{}}>
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
                          <span id="join_directInputCheck_wrap" className="ec-base-label">
                            <input id="join_directInputCheck" name="join_directInputCheck" type="checkbox" />
                            <label id="join_directInputCheckLabel" htmlFor="join_directInputCheckLabel">Nhập trực tiếp</label>
                          </span>
                        </li>
                        <li id="join_area_wrap" className="ec-address-area" style={{}}>
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
                            <option value="Bạc Liêu">Bạc Liêu</option>
                            <option value="Bắc Kạn">Bắc Kạn</option>
                            <option value="Bắc Giang">Bắc Giang</option>
                            <option value="Bắc Ninh">Bắc Ninh</option>
                            <option value="Bến Tre">Bến Tre</option>
                            <option value="Bình Dương">Bình Dương</option>
                            <option value="Bình Định">Bình Định</option>
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
                            <option value="Lạng Sơn">Lạng Sơn</option>
                            <option value="Lào Cai">Lào Cai</option>
                            <option value="Lâm Đồng">Lâm Đồng</option>
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
                            <option value>Quận/Huyện</option></select><select id="gu_name_addr" name="gu_name_addr" className fw-label="Phường/Xã" style={{}}>
                            <option value>Phường/Xã</option>
                          </select>
                        </li>
                        <li id="join_detailAddr_wrap" className style={{}}>
                          <input id="addr2" name="addr2" placeholder="Địa chỉ chi tiết(không bắt buộc)" fw-filter className="inputTypeText" type="text" size={60} maxLength={255} fw-label="Địa chỉ chi tiết(không bắt buộc)" style={{}} />
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className>
                    <h3>
                      Điện Thoại
                      <img src="./assets/imgs/ico_required.png" className width={7} height={7} alt="Required" />
                    </h3>
                    <div className="phone-td"><input id="phone2" name="phone[]" maxLength={15} defaultValue type="text" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ec-base-button gFull">
                <button type="button" className="btnBlack">Đăng Ký</button>
              </div>
              <div id="ec_shop_member_confirm-infolayer" className="joinConfirm">
                <div className="ec-base-layer">
                  <h1>Xác Nhận Thông Tin Đăng Ký</h1>
                  <div className="wrap">
                    <p className="ec-base-help">
                      Để hoàn tất đăng ký, vui lòng xác nhận thông tin tài
                      khoản và nhấn “Đăng kí”.
                    </p>
                    <div className="ec-base-table">
                      <table border={1}>
                        <caption>
                          Xác Nhận Thông Tin Đăng Ký
                        </caption>
                        <colgroup>
                          <col style={{width: '30%'}} />
                          <col style={{width: 'auto'}} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">Email</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-email1" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">ID</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-member_id" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Tên</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-name" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">Tên Tiếng Anh</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-name_en" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">Tên phiên âm</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-name_phonetic" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Quốc gia</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-country" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Địa Chỉ 1</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-addr1" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Địa Chỉ 2</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-addr2" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Thành Phố</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-city_name" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Bang/Tỉnh</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-state_name" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Mã bưu điện</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-postcode1" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Điện Thoại</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-phone" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Điện Thoại Di Động</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-mobile" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">Dịch Vụ<br />Tin Nhắn SMS</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-is_sms" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Bản tin</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-is_news_mail" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">Nickname</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-nick_name" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">Giới Tính</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-is_sex" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Ngày Sinh</th>
                            <td>
                              <p className="gBreak7">
                                <span id="ec_shop_member_confirm_field-is_solar_calendar" />
                              </p>
                              <span id="ec_shop_member_confirm_field-birth_month" />
                              /
                              <span id="ec_shop_member_confirm_field-birth_day" />
                              /
                              <span id="ec_shop_member_confirm_field-birth_year" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Kỷ niệm ngày cưới</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-marry_month" /><span>/</span><span id="ec_shop_member_confirm_field-marry_day" /><span>/</span><span id="ec_shop_member_confirm_field-marry_year" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add1" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add2" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add3" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add4" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add5" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add6" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add7" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add8" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add9" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add10" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add11" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add12" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add13" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add14" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row" />
                            <td>
                              <span id="ec_shop_member_confirm_field-add15" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">Người giới thiệu</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-reco_id" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="ec-base-button gColumn">
                    <a href="#none" className="btnSubmit" id="ec_shop_confirm-checkingjoininfo_action">Đăng Ký</a>
                    <a href="#none" className="btnEm">Đóng</a>
                  </div>
                  <button type="button" className="btnClose">Đóng</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default RegisterRes