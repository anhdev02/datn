import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import AccountInfo from '../others/AccountInfo'
import '../assets/scss/displaynone_523.scss'
import '../assets/scss/xans_myshop_asyncbenefit_10687.scss'
import '../assets/scss/fr_view_888.scss'
import '../assets/scss/header_9943.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderAccountRes from '../common/HeaderAccountRes'
import AccountInfoRes from '../others/AccountInfoRes'
import FooterRes from '../common/FooterRes'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'


const AccountInfoPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Thông tin tài khoản';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='fr_view_888 displaynone_632 header_9943'>
        <div id="container">
            <HeaderAccountRes title="Thông tin tài khoản"/>
            <AccountInfoRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_523 xans_myshop_asyncbenefit_10687'>
        <Header/>
        <AccountInfo/>
        <Footer/>
    </div>
  )
}

export default AccountInfoPage