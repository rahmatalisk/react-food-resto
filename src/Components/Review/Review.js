import React from 'react';
import './Review.css'
import pic1 from '../../images/pic-1.png'
import pic2 from '../../images/pic-2.png'
import pic3 from '../../images/pic-3.png'
import pic4 from '../../images/pic-4.png'
import ReviewBox from '../ReviewBox/ReviewBox';
import { Swiper, SwiperSlide } from 'swiper/react'


const Review = () => {
    return (
        <div className='review'>
            <p class="sub-heading">Customer's Review</p>
            <h1 class="heading">WHAT THEY SAY</h1>
            <div className="review-content">

                <Swiper spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}>
                    <SwiperSlide>
                        <ReviewBox img={pic1}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic2}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic3}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic4}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic1}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic1}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic2}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic3}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic4}></ReviewBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox img={pic1}></ReviewBox>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;