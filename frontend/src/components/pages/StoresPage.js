import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Stores from '../others/Stores'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/body_8155.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderStoresRes from '../common/HeaderStoresRes'
import StoresRes from '../others/StoresRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'


const StoresPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Cửa hàng';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_8155'>
      <div id="container">
          <HeaderStoresRes title="Hệ thống cửa hàng"/>
          <StoresRes/>
          <FooterRes/>
      </div>
  </div>
  :
    <div className='index displaynone_636 xans_layout_statelogoff'>
        <Header/>
        <Stores/>
        <Footer/>
    </div>
  )
}

export default StoresPage