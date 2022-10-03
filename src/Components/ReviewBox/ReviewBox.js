import React from 'react';
import './ReviewBox.css'

const ReviewBox = ({ img }) => {
    return (
        <div className='review-box-container'>
            <div className="customer-content">
                <div className="left-content">
                    <img src={img} alt="" />
                    <div>
                        <h2>John Doe</h2>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <i class="fas fa-quote-right"></i>
                </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsam natus distinctio ab, quia illo molestias voluptate quod reiciendis nisi ex sint odit placeat enim hic quaerat. Repudiandae quibusdam quae quos dolores doloribus. Eum adipisci nulla provident at blanditiis, quisquam consectetur neque consequuntur numquam asperiores laborum possimus tempore mollitia aperiam.</p>
        </div>
    );
};

export default ReviewBox;