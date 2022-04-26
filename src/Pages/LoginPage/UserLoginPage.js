import React from 'react';
import LoginUser from '.';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const UserLoginPage = () => {
    return(
        <>
        <Header/>
        <br/><br/>
        <LoginUser/>
        <br/><br/><br/><br/>
        <Footer/>
        </>
    );
}
export default UserLoginPage;