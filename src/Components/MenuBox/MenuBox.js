import React from 'react';
import './MenuBox.css'

const MenuBox = ({ img }) => {
    return (
        <div className='menu-box'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <h3>delicious food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <div className='box-footer'>
                    <button href="#" className="btn">add to cart</button>
                    <span class="price">$12.99</span>
                </div>
            </div>

        </div>
    );
};

export default MenuBox;