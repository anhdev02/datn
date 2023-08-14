import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import FavouritesList from '../others/FavouritesList'
import '../assets/scss/displaynone_523.scss'
import '../assets/scss/xans_title_10596.scss'
import '../assets/scss/displaynone_632.scss'
import '../assets/scss/xans_myshop_wishlist_8655.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderProductRes from '../common/HeaderProductRes'
import FavouritesListRes from '../others/FavouritesListRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'

const FavouritesListPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Danh sách yêu thích';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_myshop_wishlist_8655'>
        <div id="container">
            <HeaderProductRes title="Danh sách yêu thích"/>
            <FavouritesListRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_523 xans_title_10596'>
        <Header/>
        <FavouritesList/>
        <Footer/>
    </div>
  )
}

export default FavouritesListPage