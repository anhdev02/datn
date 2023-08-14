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
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'


const SearchPage = () => {
  const location= useLocation();
  const queryParams=new URLSearchParams(location.search);
  const search=queryParams.get("search");
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Tìm kiếm';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_896 body_10301'>
        <div id="container">
            <HeaderAccountRes title='Kết quả tìm kiếm'/>
            <SearchRes search={search.replace(/-/g,' ')}/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <Search search={search.replace(/-/g,' ')}/>
        <Footer/>
    </div>
  )
}

export default SearchPage