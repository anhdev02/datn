import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Footer from '../common/Footer';
import FooterRes from '../common/FooterRes';
import Header from '../common/Header';
import HeaderRes from '../common/HeaderRes';
import BestSeller from '../others/BestSeller';
import BestSellerRes from '../others/BestSellerRes';
import NewProducts from '../others/NewProducts';
import NewProductsRes from '../others/NewProductsRes';

const NewProductsPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_7866'>
        <div id="container">
            <HeaderRes/>
            <NewProductsRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <NewProducts/>
        <Footer/>
    </div>
  )
}

export default NewProductsPage