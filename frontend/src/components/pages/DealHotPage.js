import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../common/Footer'
import Header from '../common/Header'
import DealHot from '../others/DealHot'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/body_7866.scss'
import FooterRes from '../common/FooterRes'
import HeaderRes from '../common/HeaderRes'
import DealHotRes from '../others/DealHotRes'
import { useEffect } from 'react'


const DealHotPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Ưu đãi nóng';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_7866'>
        <div id="container">
            <HeaderRes/>
            <DealHotRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <DealHot/>
        <Footer/>
    </div>
  )
}

export default DealHotPage