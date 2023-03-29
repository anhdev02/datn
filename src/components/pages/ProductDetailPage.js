import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import ProductDetail from '../others/ProductDetail'
import '../assets/scss/displaynone_743.scss'
import '../assets/scss/html.scss'
import '../assets/scss/html_14713.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderAccountRes from '../common/HeaderAccountRes'
import ProductDetailRes from '../others/ProductDetailRes'
import FooterRes from '../common/FooterRes'


const ProductDetailPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='fr_view_888 displaynone_632 html_14713'>
      <div id="container">
          <HeaderAccountRes/>
          <ProductDetailRes/>
          <FooterRes/>
      </div>
  </div>
  :
    <div className='index displaynone_743 html'>
        <Header/>
        <ProductDetail/>
        <Footer/>
    </div>
  )
}

export default ProductDetailPage