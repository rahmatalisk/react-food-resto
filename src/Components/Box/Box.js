import React from 'react';
import './Box.css'

const Box = ({ img }) => {
    return (
        <div>
            <div class="box">
                <img src={img} alt="" />
                <h3>tasty food</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div className='box-footer'>
                    <span>$15.99</span>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
        </div>
    );
};

export default Box;