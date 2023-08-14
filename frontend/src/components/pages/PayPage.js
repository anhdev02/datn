import React from 'react'
import { useMediaQuery } from 'react-responsive';
import HeaderAccountRes from '../common/HeaderAccountRes';
import FooterRes from '../common/FooterRes';
import Pay from '../others/Pay';
import PayRes from '../others/PayRes';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../assets/scss/displaynone_1925.scss'
import '../assets/scss/body_14306.scss'
import '../assets/scss/xans_layout_statelogoff_19480.scss'
import { useEffect } from 'react';

const PayPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Thanh toán';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_1925 body_14306'>
        <div id="container">
          <HeaderAccountRes title="Thanh toán"/>
          <PayRes/>
          <FooterRes/>
      </div>
    </div>
    :
    <div className='index displaynone_1925 xans_layout_statelogoff_19480'>
      <div id="userStyle">
        <Header/>
        <Pay/>
        <Footer/>
      </div>
    </div>
  )
}

export default PayPage