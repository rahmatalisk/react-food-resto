import React from 'react';
import './Home.css'
import noodles from '../../images/home-img-1.png'
import chiken from '../../images/home-img-2.png'
import pizza from '../../images/home-img-3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';

const Home = () => {
    return (
        <div>
            <Swiper   modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide><div className="banner">
                    <div className="b-left">
                        <p style={{ textAlign: 'left' }}>Our Special Dish</p>
                        <h1>Fried Chicken</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, beatae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate.</p>
                        <button className='btn'>Order Now</button>
                    </div>
                    <div className="b-right">
                        <img src={chiken} alt="" />
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="banner">
                    <div className="b-left">
                        <p style={{ textAlign: 'left' }}>Our Special Dish</p>
                        <h1>Spicy Noodles</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, beatae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate.</p>
                        <button className='btn'>Order Now</button>
                    </div>
                    <div className="b-right">
                        <img src={noodles} alt="" />
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="banner">
                    <div className="b-left">
                        <p style={{ textAlign: 'left' }}>Our Special Dish</p>
                        <h1>Hot Pizza</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, beatae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, cupiditate.</p>
                        <button className='btn'>Order Now</button>
                    </div>
                    <div className="b-right">
                        <img src={pizza} alt="" />
                    </div>
                </div></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Home;