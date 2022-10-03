import React from 'react';
import Box from '../Box/Box';
import './Dishes.css'
import dish1 from '../../images/dish-1.png'
import dish2 from '../../images/dish-2.png'
import dish3 from '../../images/dish-3.png'
import dish4 from '../../images/dish-4.png'
import dish5 from '../../images/dish-5.png'
import dish6 from '../../images/dish-6.png'

const Dishes = () => {
    
    return (
        <div>
            <div className="dishes">
                <p class="sub-heading"> our dishes </p>
                <h1 class="heading"> popular dishes </h1>
                <div className="box-container">
                   
                   <Box img={dish1}></Box> 
                   <Box img={dish2}></Box> 
                   <Box img={dish3}></Box> 
                   <Box img={dish4}></Box> 
                   <Box img={dish5}></Box> 
                   <Box img={dish6}></Box> 
                </div>
            </div>

        </div>
    );
};

export default Dishes;