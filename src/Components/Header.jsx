import React from 'react';

function Header(props) {
    return (
        <div id="main">
            <div className='header-heading'>
                <h3>It's Good Time For A Great Taste of Burger</h3>
                <h1><span>BURGER</span>FOR<br/> WEEK</h1>
                <p className='details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <div className='header-btns'>
                    <a href="#" className='header-btn'>Order</a>
                </div>
            </div>
        </div>
    );
}

export default Header;