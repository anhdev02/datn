import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Account from '../others/Account'
import AccountRes from '../others/AccountRes'
import FooterRes from '../common/FooterRes'
import '../assets/scss/displaynone_540.scss'
import '../assets/scss/xans_myshop_asyncbenefit.scss'
import '../assets/scss/displaynone_632.scss'
import '../assets/scss/xans_myshop_asyncbenefit_8741.scss'
import HeaderAccountRes from '../common/HeaderAccountRes'
import { useEffect } from 'react'
const AccountPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Tài khoản';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_myshop_asyncbenefit_8741'>
        <div id="container">
            <HeaderAccountRes title="Tài khoản"/>
            <AccountRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='displaynone_540 xans_myshop_asyncbenefit'>
        <Header/>
        <Account/>
        <Footer/>
    </div>
  )
}

export default AccountPage