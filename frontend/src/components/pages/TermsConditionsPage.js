import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import TermsConditions from '../others/TermsConditions'
import '../assets/scss/froala.scss'
import '../assets/scss/displaynones_523.scss'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/contents_9855.scss'
import { useMediaQuery } from 'react-responsive'
import HeaderRes from '../common/HeaderRes'
import FooterRes from '../common/FooterRes'
import TermsConditionsRes from '../others/TermsConditionsRes'
import { useEffect } from 'react'

const TermsConditionsPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Điều khoản và điều kiện';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 contents_9855 fr_view_888'>
        <div id="container">
            <HeaderRes/>
            <TermsConditionsRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='froala displaynone_523 xans_layout_statelogoff'>
      <Header/>
      <TermsConditions/>
      <Footer/>
    </div>
  )
}

export default TermsConditionsPage