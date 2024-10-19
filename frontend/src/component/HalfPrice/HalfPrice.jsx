import React from 'react';

const HalfPrice = () => {
    return (
        <div className='half-price'>
            <div className="half-price-items">
                <div className="half-price-item">
                    <div className="half-price-item-img">
                        <img src="" className='front' alt="" />
                        <img src="" className='offer' alt="" />
                    </div>
                    <div className="half-price-item-content">
                        <div className="item-price">
                            <span className='offer-off'>Save $22.50</span>
                            <p className="price">$22.50</p>
                            <p className="add-details">
                                <del>$45.00</del> - $0.32 / 100g
                            </p>
                        </div>
                        <div className='caption'>
                            <p>Optimum Adult All Breed Dry Dog Food Chicken, Vegetables & Rice 7kg</p>
                        </div>
                    </div>
                    <div className="half-price-item-btn">
                        <button className='btn-1'>Add to cart</button>
                        <button className='btn-2'>Save to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HalfPrice;