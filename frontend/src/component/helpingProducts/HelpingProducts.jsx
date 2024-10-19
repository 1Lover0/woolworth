import React from 'react';
import { assests } from '../../assets/assest';
import './HelpingProducts.css'

const HelpingProducts = () => {
    return (
        <div className='helping-product'>
            <h2>Helping you find great value</h2>
            <div className="heling-product-items">
                
            <div className="heling-product-item">
                    <div className="helping-product--item-top">
                        <img src={assests.special} alt="" />
                        <p>Fruit & Veg</p>
                    </div>
                    <div className="helping-product--item-middle">
                        <img src={assests.fruit_veg} alt="" />
                        <p>Save at least 20% wih The Odd Bunch.T&cs apply</p>
                    </div>
                    <div className="helping-product--item-bottom">
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="heling-product-item">
                    <div className="helping-product--item-top">
                        <img src={assests.special} alt="" />
                        <p>Lunch</p>
                    </div>
                    <div className="helping-product--item-middle">
                        <img src={assests.fruit_veg} alt="" />
                        <p>Save at least 20% wih The Odd Bunch.T&cs apply</p>
                    </div>
                    <div className="helping-product--item-bottom">
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="heling-product-item">
                    <div className="helping-product--item-top">
                        <img src={assests.special} alt="" />
                        <p>Cadbury</p>
                    </div>
                    <div className="helping-product--item-middle">
                        <img src={assests.fruit_veg} alt="" />
                        <p>Save at least 20% wih The Odd Bunch.T&cs apply</p>
                    </div>
                    <div className="helping-product--item-bottom">
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="heling-product-item">
                    <div className="helping-product--item-top">
                        <img src={assests.special} alt="" />
                        <p>Snacks</p>
                    </div>
                    <div className="helping-product--item-middle">
                        <img src={assests.fruit_veg} alt="" />
                        <p>Save at least 20% wih The Odd Bunch.T&cs apply</p>
                    </div>
                    <div className="helping-product--item-bottom">
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="heling-product-item">
                    <div className="helping-product--item-top">
                        <img src={assests.special} alt="" />
                        <p>Fruit & Veg</p>
                    </div>
                    <div className="helping-product--item-middle">
                        <img src={assests.fruit_veg} alt="" />
                        <p>Save at least 20% wih The Odd Bunch.T&cs apply</p>
                    </div>
                    <div className="helping-product--item-bottom">
                        <button>Shop now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HelpingProducts;