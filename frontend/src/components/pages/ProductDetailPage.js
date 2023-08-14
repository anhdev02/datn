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
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


const ProductDetailPage = () => {
  const {id} = useParams();
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Chi tiết sản phẩm';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='fr_view_888 displaynone_632 html_14713'>
      <div id="container">
          <HeaderAccountRes title='Chi tiết sản phẩm'/>
          <ProductDetailRes id={id}/>
          <FooterRes/>
      </div>
  </div>
  :
    <div className='index displaynone_743 html'>
        <Header/>
        <ProductDetail id={id}/>
        <Footer/>
    </div>
  )
}

export default ProductDetailPage