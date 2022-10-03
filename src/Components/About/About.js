import React from 'react';
import './About.css'
import about from '../../images/about-img.png'

const About = () => {
    return (
        <div className='about'>
            <p class="sub-heading"> About Us </p>
            <h1 class="heading">WHY CHOOSE US?</h1>
            <div className="about-container">
                <div className="about-left">
                    <img src={about} alt="" />
                </div>
                <div className="about-right">
                    <h1>Best Food In The Country</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore, Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta Odio Corporis Nihil!</p>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque Deleniti Iste Alias, Eum Natus.</p>
                    <div class="icons-container">
                        <div class="icons">
                            <i class="fas fa-shipping-fast"></i>
                            <span>free delivery</span>
                        </div>
                        <div class="icons">
                            <i class="fas fa-dollar-sign"></i>
                            <span>easy payments</span>
                        </div>
                        <div class="icons">
                            <i class="fas fa-headset"></i>
                            <span>24/7 service</span>
                        </div>
                    </div>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default About;