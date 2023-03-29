import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Search from '../others/Search'
import '../assets/scss/displaynone_743.scss'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/displaynone_896.scss'
import '../assets/scss/body_10301.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderAccountRes from '../common/HeaderAccountRes'
import SearchRes from '../others/SearchRes'
import FooterRes from '../common/FooterRes'


const SearchPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_896 body_10301'>
        <div id="container">
            <HeaderAccountRes/>
            <SearchRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <Search/>
        <Footer/>
    </div>
  )
}

export default SearchPage