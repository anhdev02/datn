import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Cart from '../others/Cart'
import '../assets/scss/li_12717.scss'
import '../assets/scss/xans_order_basketpackage_8869.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderProductRes from '../common/HeaderProductRes'
import CartRes from '../others/CartRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'


const CartPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Giỏ hàng';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_order_basketpackage_8869'>
        <div id="container">
            <HeaderProductRes title="Giỏ hàng"/>
            <CartRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_636 li_12717'>
        <Header/>
        <Cart/>
        <Footer/>
    </div>
  )
}

export default CartPage