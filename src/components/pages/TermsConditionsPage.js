import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import TermsConditions from '../others/TermsConditions'
import '../assets/scss/froala.scss'
import '../assets/scss/displaynones_523.scss'
import '../assets/scss/xans_layout_statelogoff.scss'

const TermsConditionsPage = () => {
  return (
    
    <div className='froala displaynone_523 xans_layout_statelogoff'>
      <Header/>
      <TermsConditions/>
      <Footer/>
    </div>
  )
}

export default TermsConditionsPage