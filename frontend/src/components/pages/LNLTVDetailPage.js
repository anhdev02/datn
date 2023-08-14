import React from 'react'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../common/Header';
import Footer from '../common/Footer';
import LNLTVDetail from '../others/LNLTVDetail';
import HeaderBlogRes from '../common/HeaderBlogRes';
import FooterRes from '../common/FooterRes';
import '../assets/scss/html_13335.scss'
import LNLTVDetailRes from '../others/LNLTVDetailRes';
import { useParams } from 'react-router-dom';

const LNLTVDetailPage = () => {
    const {id} = useParams();
    const isTablet = useMediaQuery({ maxWidth: 820 });
    useEffect(() => {
      document.title = 'Hướng dẫn sử dụng sản phẩm';
    }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_532 html_12857'>
        <div id="container">
            <HeaderBlogRes title="LocknLock TV"/>
            <LNLTVDetailRes id={id}/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_532 html_13335'>
        <Header/>
        <LNLTVDetail id={id}/>
        <Footer/>
    </div>

  )
}

export default LNLTVDetailPage