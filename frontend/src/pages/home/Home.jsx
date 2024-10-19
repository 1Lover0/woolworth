import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import HelpingProducts from '../../component/helpingProducts/HelpingProducts';
import HalfPrice from '../../component/HalfPrice/HalfPrice';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HelpingProducts />
            <HalfPrice />
        </div>
    );
};

export default Home;