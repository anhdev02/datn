import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import NewAddress from '../others/NewAddress'
import { useMediaQuery } from 'react-responsive'
import HeaderInfoRes from '../common/HeaderInfoRes'
import FooterRes from '../common/FooterRes'
import NewAddressRes from '../others/NewAddressRes'
import { useEffect } from 'react'

const NewAddressPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Thêm địa chỉ';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_myshop_addrlist_8631'>
        <div id="container">
            <HeaderInfoRes/>
            <NewAddressRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='displaynone_523 xans_layout_statelogoff_489 index'>
        <Header/>
        <NewAddress/>
        <Footer/>
    </div>
  )
}

export default NewAddressPage