import React from 'react';
import '../Style/front.css';
import prod from '../Images/contact.jpg';

const Product = () => {
    return (
        <>
            <div className="product-card">
                <img src={prod} alt="Product 2" />
                <h3>Product 13</h3>
                <p>Description of Product 2</p>
                <button>Add to Cart</button>
            </div>
            <div className="product-card">
                <img src={prod} alt="Product 2" />
                <h3>Product 14</h3>
                <p>Description of Product 2</p>
                <button>Add to Cart</button>
            </div>
            <div className="product-card">
                <img src={prod} alt="Product 2" />
                <h3>Product 15</h3>
                <p>Description of Product 2</p>
                <button>Add to Cart</button>
            </div> <div className="product-card">
                <img src={prod} alt="Product 2" />
                <h3>Product 13</h3>
                <p>Description of Product 2</p>
                <button>Add to Cart</button>
            </div>
            <div className="product-card">
                <img src={prod} alt="Product 2" />
                <h3>Product 14</h3>
                <p>Description of Product 2</p>
                <button>Add to Cart</button>
            </div>
            <div className="product-card">
                <img src={prod} alt="Product 2" />
                <h3>Product 15</h3>
                <p>Description of Product 2</p>
                <button>Add to Cart</button>
            </div>
        </>
    )
}

export default Product;