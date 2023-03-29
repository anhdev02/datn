import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Home from '../home/Home'
import FooterRes from '../common/FooterRes'
import HeaderRes from '../common/HeaderRes'
import HomeRes from '../home/HomeRes'
import '../assets/scss/displaynone_743.scss'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/displaynone_632.scss'
import '../assets/scss/body_11307.scss'
import '../assets/scss/xans_myshop_asyncbenefit_8741.scss'


import { useMediaQuery } from 'react-responsive'


const HomePage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_11307'>
        <div id="container">
            <HeaderRes/>
            <HomeRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className="xans_layout_statelogoff displaynone_743">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default HomePage