import React from 'react';
import './Menu.css'
import menu1 from '../../images/menu-1.jpg'
import menu2 from '../../images/menu-2.jpg'
import menu3 from '../../images/menu-3.jpg'
import menu4 from '../../images/menu-4.jpg'
import menu5 from '../../images/menu-5.jpg'
import menu6 from '../../images/menu-6.jpg'
import menu7 from '../../images/menu-7.jpg'
import menu8 from '../../images/menu-8.jpg'
import menu9 from '../../images/menu-9.jpg'
import MenuBox from '../MenuBox/MenuBox';

const Menu = () => {
    return (
        <div className='menu'>
            <p class="sub-heading"> Our Menu </p>
            <h1 class="heading">TODAY'S SPECIALITY</h1>
            <div className="menu-box-container">
                <MenuBox img={menu1}></MenuBox>
                <MenuBox img={menu2}></MenuBox>
                <MenuBox img={menu3}></MenuBox>
                <MenuBox img={menu4}></MenuBox>
                <MenuBox img={menu5}></MenuBox>
                <MenuBox img={menu6}></MenuBox>
                <MenuBox img={menu7}></MenuBox>
                <MenuBox img={menu8}></MenuBox>
                <MenuBox img={menu9}></MenuBox>
            </div>
        </div>
    );
};

export default Menu;