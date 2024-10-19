import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar navbar-expand-sm'>
            <div className="container-fluid">
                <a href='#' className="navbar-brand">
                    Logo
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link ">Everday & Other Services</a>
                        </li>
                        <li className="nav-item nav-search">
                            <input type="search" className='' placeholder='Search products, recipes & ideas' />
                        </li>
                        <li className="nav-item">
                            <img src="" alt="" />
                            <div>
                                <p>Lists &</p>
                                <p>Buy again</p>
                            </div>
                        </li>
                        <li className="nav-item">
                            <img src="" alt="" />
                            <div>
                                <p>Log in or Sign up</p>
                                <p>My Account</p>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <img src="" alt="" /> $0.00
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;