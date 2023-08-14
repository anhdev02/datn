import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../common/Footer'
import Header from '../common/Header'
import AddressBook from '../others/AddressBook'
import '../assets/scss/displaynone_523.scss'
import '../assets/scss/xans_layout_statelogoff_489.scss'
import '../assets/scss/displaynone_632.scss'
import '../assets/scss/xans_myshop_addrlist_8631.scss'
import AddressBookRes from '../others/AddressBookRes'
import HeaderInfoRes from '../common/HeaderInfoRes'
import FooterRes from '../common/FooterRes'
import { useEffect } from 'react'

const AddressBookPage = () => {
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Sổ địa chỉ';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_myshop_addrlist_8631'>
        <div id="container">
            <HeaderInfoRes title="Sổ địa chỉ"/>
            <AddressBookRes/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='displaynone_523 xans_layout_statelogoff_489 index'>
        <Header/>
        <AddressBook/>
        <Footer/>
    </div>
  )
}

export default AddressBookPage