import React from 'react';
import { assests, greatValue } from '../../assets/assest';
import './HelpingProducts.css'

const HelpingProducts = () => {
    return (
        <div className='helping-product'>
            <h2>Helping you find great value</h2>
            <div className="heling-product-items">

                {
                    greatValue.map((item, index) => {
                        return (
                            <div className="heling-product-item">
                                <div className="helping-product--item-top">
                                    <img src={assests.special} alt="" />
                                    <p>Fruit & Veg</p>
                                </div>
                                <div className="helping-product--item-middle">
                                    <img src={item.imgback} alt="" />
                                    <p>{item.desc}</p>
                                </div>
                                <div className="helping-product--item-bottom">
                                    <button>Shop now</button>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </div>
    );
};

export default HelpingProducts;