import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Register from '../others/Register'
import '../assets/scss/froala.scss'
import '../assets/scss/xans_member_join_20196.scss'
import '../assets/scss/header_9947.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderAccountRes from '../common/HeaderAccountRes'
import RegisterRes from '../others/RegisterRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'


const RegisterPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Đăng ký';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='fr_view_888 displaynone_632 header_9947'>
        <div id="container">
            <HeaderAccountRes title="Đăng ký"/>
            <RegisterRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index froala displaynones_523 xans_member_join_20196'>
        <Header/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default RegisterPage