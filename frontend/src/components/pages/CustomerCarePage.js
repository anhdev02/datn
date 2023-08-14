import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import CustomerCare from '../others/CustomerCare'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/xans_mall_faq_8161.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderStoresRes from '../common/HeaderStoresRes'
import CustomerCareRes from '../others/CustomerCareRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'

const CustomerCarePage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Chăm sóc khách hàng';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='fr_view_888 displaynone_632 xans_mall_faq_8161'>
      <div id="container">
          <HeaderStoresRes title="Chăm sóc khách hàng"/>
          <CustomerCareRes/>
          <FooterRes/>
      </div>
  </div>
  :
    <div className='index displaynones_523 xans_layout_statelogoff'>
        <Header/>
        <CustomerCare/>
        <Footer/>
    </div>
  )
}

export default CustomerCarePage