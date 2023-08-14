import React from 'react'
import { useMediaQuery } from 'react-responsive';
import HeaderRes from '../common/HeaderRes';
import FooterRes from '../common/FooterRes';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ResetPassword from '../others/ResetPassword';
import ResetPasswordRes from '../others/ResetPasswordRes';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';

const ResetPasswordPage = () => {
  const{id}=useParams();
  const{search}=useLocation();
  const{userId}=queryString.parse(search);
  const isTablet = useMediaQuery({ maxWidth: 820 });
  useEffect(() => {
    document.title = 'Đặt lại mật khẩu';
  }, [])
  return (
    isTablet ?
    <div id="wrap" className='displaynone_632 xans_member_findpasswd_11353'>
        <div id="container">
            <HeaderRes/>
            <ResetPasswordRes id={id} userId={userId}/>
            <FooterRes/>
        </div>
    </div>
    :
    <div className='index displaynones_523 xans_member_findpasswd_box_10548'>
        <Header/>
        <ResetPassword id={id} userId={userId}/>
        <Footer/>
    </div>
  )
}

export default ResetPasswordPage