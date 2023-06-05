import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {ratings, img, price, name} = props.product
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='ProdInfo'>
                <p className='proName'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Ratings: {ratings}stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btnCart'>
                <p className='btnText'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;