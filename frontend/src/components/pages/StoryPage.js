import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Story from '../others/Story'
import '../assets/scss/xans_layout_statelogoff.scss'
import '../assets/scss/body_8094.scss'
import HeaderBlogRes from '../common/HeaderBlogRes'
import { useMediaQuery } from 'react-responsive'
import StoryRes from '../others/StoryRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'

const StoryPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Story';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 body_8094'>
        <div id="container">
            <HeaderBlogRes title="Story"/>
            <StoryRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynone_743 xans_layout_statelogoff'>
        <Header/>
        <Story/>
        <Footer/>
    </div>

  )
}

export default StoryPage