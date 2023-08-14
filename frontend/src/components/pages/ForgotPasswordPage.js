import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import ForgotPassword from '../others/ForgotPassword'
import '../assets/scss/displaynones_523.scss'
import '../assets/scss/xans_member_findpasswd_box_10548.scss'
import '../assets/scss/xans_member_findpasswd_11353.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderRes from '../common/HeaderRes'
import ForgotPasswordRes from '../others/ForgotPasswordRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'

const ForgotPasswordPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Quên mật khẩu';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_member_findpasswd_11353'>
        <div id="container">
            <HeaderRes/>
            <ForgotPasswordRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynones_523 xans_member_findpasswd_box_10548'>
        <Header/>
        <ForgotPassword/>
        <Footer/>
    </div>
  )
}

export default ForgotPasswordPage