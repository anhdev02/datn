import React from 'react'
import HeaderAboutUs from '../common/HeaderAboutUs'
import FooterAboutUs from '../common/FooterAboutUs'
import AboutUs from '../others/AboutUs'
import '../assets/scss/html_11042.scss'
import '../assets/scss/hero_946.scss'

const AboutUsPage = () => {
  return (
    <div className='html_11042 hero_946'>
        <HeaderAboutUs/>
        <AboutUs/>
        <FooterAboutUs/>
    </div>
  )
}

export default AboutUsPage