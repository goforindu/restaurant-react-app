import React from 'react';
import ProductBox from './ProductBox';
import productimg1 from '../images/s1.png';
import productimg2 from '../images/s2.png';

function Products(props) {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='a-container'>
        <ProductBox title="Large Burger" image={productimg1}/>
        <ProductBox title="Medium Burger" image={productimg2}/>
        <ProductBox title="Small Burger" image={productimg2}/>
        </div>
        </div>
    );
}

export default Products;