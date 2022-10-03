import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <div className="n-left">
                    <i className="fas fa-utensils"></i>Resto.
                </div>
                <div className="n-center">
                    <a class="active" href="#home">home</a>
                    <a href="#dishes">Dishes</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#review">Review</a>
                    <a href="#order">Order</a>
                </div>
                <div className="n-right">
                    <i class="fas fa-bars" id="menu-bars"></i>
                    <i class="fas fa-search" id="search-icon"></i>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-shopping-cart"></a>
                </div>
            </div>
            {/* <form action="" id="search-form">
                <input type="search" placeholder="search here..." name="" id="search-box"/>
                    <label for="search-box" class="fas fa-search"></label>
                    <i class="fas fa-times" id="close"></i>
            </form> */}
        </div>
    );
};

export default Header;