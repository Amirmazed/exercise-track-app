import React from 'react';
import './Product.css'


const Product = (props) => {
    const {name, img, For_Age, Time_Req} = props.product;
    const {handleAddToCart} = props;
  
    return (
        <div className='product'>
       
            <img src={img} alt="" />
            <div className='prodInfo'>
                <h4 className='prodName'> {name}</h4>
                <p>For Age:{For_Age}</p>
                <p>Time Required: {Time_Req} s</p>
            </div>
            <button onClick={(event) => handleAddToCart(props.product, event.target)} className='btnCart'>Exercise</button>
        </div>
    )
};

export default Product;