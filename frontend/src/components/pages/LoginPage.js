import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Login from '../others/Login'
import '../assets/scss/displaynone_636.scss'
import '../assets/scss/body_12479.scss'
import '../assets/scss/displaynone_632.scss'
import '../assets/scss/body_8974.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderAccountRes from '../common/HeaderAccountRes'
import LoginRes from '../others/LoginRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'

const LoginPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Đăng nhập';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_8974'>
        <div id="container">
            <HeaderAccountRes/>
            <LoginRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_636 body_12479'>
        <Header/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default LoginPage