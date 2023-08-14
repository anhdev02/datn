import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Policy from '../others/Policy'
import '../assets/scss/xans_mall_faq_12165.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderStoresRes from '../common/HeaderStoresRes'
import FooterRes from '../common/FooterRes'
import PolicyRes from '../others/PolicyRes'
import { useEffect } from 'react'

const PolicyPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Chính sách bảo hành';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='fr_view_888 displaynone_632 xans_mall_faq_8161'>
      <div id="container">
          <HeaderStoresRes title="Chính sách bảo hành"/>
          <PolicyRes/>
          <FooterRes/>
      </div>
  </div>
  : 
    <div className='index displaynone_632 xans_mall_faq_12165'>
        <Header/>
        <Policy/>
        <Footer/>
    </div>
  )
}

export default PolicyPage