import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../common/Footer'
import FooterRes from '../common/FooterRes'
import Header from '../common/Header'
import HeaderRes from '../common/HeaderRes'
import BestSeller from '../others/BestSeller'
import BestSellerRes from '../others/BestSellerRes'
import { useEffect } from 'react'

const BestSellerPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Sản phẩm bán chạy';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_7866'>
        <div id="container">
            <HeaderRes/>
            <BestSellerRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <BestSeller/>
        <Footer/>
    </div>
  )
}

export default BestSellerPage