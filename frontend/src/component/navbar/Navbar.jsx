import React, { useState } from 'react';
import './Navbar.css'
import { assests } from '../../assets/assest';

const Navbar = () => {
    const [toggle, setToggler] = useState("navbar-dropdown")
    return (
        <div className="navbar">
            <div className='navbar-left'>
                <div className="logo">
                    <img src={assests.newLogo} alt="" />
                </div>
                <div className="border"></div>
                <div className='navbar-dropdown'>
                    Everyday & Other Services
                </div>
            </div>
            <div className="navbar-center">
                <div className="navbar-search-box">
                    <input type="search" placeholder='Search products, recipes & ideas' />
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-list">
                    <div className='navbar-list-img'>
                        <img src={assests.list} alt="" />
                    </div>
                    <div className='navbar-list-content'>
                        <p className='navbar-small'>Lists</p>
                        <p className='navbar-big'>Buy again</p>
                    </div>
                </div>
                <div className="navbar-account">
                    <div className='navbar-account-img'>
                        <img src={assests.profile1} alt="" />
                    </div>
                    <div className='navbar-account-content'>
                        <p className='navbar-small'>Log in or Sign up</p>
                        <p className='navbar-big'>My Account</p>
                    </div>
                </div>
                <div className="navbar-cart">
                    <img src={assests.cart} alt="" /> <span>$0.00</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;