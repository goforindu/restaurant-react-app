import React from 'react';
import aboutimg from '../images/about.png';

function About(props) {
    return (
        <div id="about">
            <div className='about-text'>
                <h1>UPCOMING EVENTS</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                <button>Order Now</button>
            </div>
            <div className='about-image'>
                <img src={aboutimg} alt=""/>
            </div>
            
        </div>
    );
}

export default About;