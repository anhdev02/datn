import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Order from '../others/Order'
import '../assets/scss/displaynone_1915.scss'
import '../assets/scss/xans_myshop_orderhistoryhead_fieldset_img_10602.scss'
import '../assets/scss/displaynone_2352.scss'
import '../assets/scss/xans_myshop_orderhistoryhead_8727.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderInfoRes from '../common/HeaderInfoRes'
import OrderRes from '../others/OrderRes'
import FooterRes from '../common/FooterRes'
const OrderPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_2352 xans_myshop_orderhistoryhead_8727'>
        <div id="container">
            <HeaderInfoRes/>
            <OrderRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='displaynone_1915 xans_myshop_orderhistoryhead_fieldset_img_10602'>
        <Header/>
        <Order/>
        <Footer/>
    </div>
  )
}

export default OrderPage