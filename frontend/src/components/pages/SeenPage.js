import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Seen from '../others/Seen'
import '../assets/scss/displaynone_523.scss'
import '../assets/scss/xans_strong_10511.scss'
import '../assets/scss/displaynone_632.scss'
import '../assets/scss/body_8525.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderProductRes from '../common/HeaderProductRes'
import SeenRes from '../others/SeenRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'


const SeenPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Sản phẩm đã xem';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_8525'>
        <div id="container">
            <HeaderProductRes/>
            <SeenRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_523 xans_strong_10511'>
        <Header/>
        <Seen/>
        <Footer/>
    </div>
  )
}

export default SeenPage