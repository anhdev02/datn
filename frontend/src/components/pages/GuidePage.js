import React from 'react'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderBlogRes from '../common/HeaderBlogRes';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Guide from '../others/Guide';
import FooterRes from '../common/FooterRes';
import GuideRes from '../others/GuideRes';

const GuidePage = () => {
    const isTablet = useMediaQuery({ maxWidth: 820 });
    useEffect(() => {
      document.title = 'Hướng dẫn sử dụng sản phẩm';
    }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_product_menupackage_13329'>
        <div id="container">
            <HeaderBlogRes title="Hướng dẫn sử dụng sản phẩm"/>
            <GuideRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_532 xans_product_normalmenu_12487'>
        <Header/>
        <Guide/>
        <Footer/>
    </div>

  )
}

export default GuidePage