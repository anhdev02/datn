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
import ProductByCategoryParent from '../others/ProductByCategoryParent'
import { useLocation, useParams } from 'react-router-dom'
import queryString from 'query-string'
import ProductByCategoryParentRes from '../others/ProductByCategoryParentRes'
import { useEffect } from 'react'

const ProductByCategoryParentPage = () => {
  const{id}=useParams();
  const{search}=useLocation();
  const{name}=queryString.parse(search);
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Sản phẩm theo danh mục';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_7866'>
        <div id="container">
            <HeaderRes/>
            <ProductByCategoryParentRes id={id}/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_636 xans_product_normalmenu_12487'>
        <Header/>
        <ProductByCategoryParent id={id} name={(name.charAt(0).toUpperCase() + name.slice(1)).replace(/-/g, ' ')}/>
        <Footer/>
    </div>
  )
}

export default ProductByCategoryParentPage
