import React from 'react'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HeaderBlogRes from '../common/HeaderBlogRes';
import FooterRes from '../common/FooterRes';
import GuideRes from '../others/GuideRes';
import LNLTV from '../others/LNLTV';
import LNLTVRes from '../others/LNLTVRes';

const LNLTVPage = () => {
    const isTablet = useMediaQuery({ maxWidth: 820 });
    useEffect(() => {
      document.title = 'Hướng dẫn sử dụng sản phẩm';
    }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_743 xans_product_menupackage_13329'>
        <div id="container">
            <HeaderBlogRes title="LocknLock TV"/>
            <LNLTVRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynones_532 xans_product_normalmenu_12487'>
        <Header/>
        <LNLTV/>
        <Footer/>
    </div>

  )
}

export default LNLTVPage