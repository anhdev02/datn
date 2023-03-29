import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { useMediaQuery } from 'react-responsive'
import ProductByCategory from '../others/ProductByCategory'
import '../assets/scss/xans_product_normalmenu_12487.scss'
import '../assets/scss/xans_product_menupackage_13329.scss'
import HeaderRes from '../common/HeaderRes'
import ProductByCategoryRes from '../others/ProductByCategoryRes'
import FooterRes from '../common/FooterRes'

const ProductByCategoryPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_7866'>
        <div id="container">
            <HeaderRes/>
            <ProductByCategoryRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_636 xans_product_normalmenu_12487'>
        <Header/>
        <ProductByCategory/>
        <Footer/>
    </div>
  )
}

export default ProductByCategoryPage