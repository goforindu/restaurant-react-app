import React from 'react';

function Contacts(props) {
    return (
        <div id="contact">
            <h1>Book Your Table</h1>
            <form>
                <input type="text" placeholder='Enter your name'/>
                <input type="email" placeholder='Enter your email'/>
                <textarea placeholder='Write Here...'></textarea>
                <input type="submit" value="BOOK"/>
            </form>
            
        </div>
    );
}

export default Contacts;