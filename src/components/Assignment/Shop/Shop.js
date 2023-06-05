import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../Utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=> {
        fetch('bal.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([]);

//ekhane button removie dibi, niche function remove dibi r product.js e btn function e event, event.target remove dibi.. tahole added to cart er function ta purapuri delete jabe

    const handleAddToCart = (product, button) => {
        
        let newCart = [];

        const exists = cart.find(prod => prod.id===product.id )
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(prod => prod.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(product.id)
        //
        //console.log(product)
        button.innerHTML = 'Added to Cart';
    }

    useEffect( () => {
        const storedCart = getStoredCart();
        console.log(storedCart)
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
                savedCart.push(addedProduct);
                //console.log(savedCart)
            }
        }
        setCart(savedCart)
    }, [products]);

    return (
        <div className='shopContainer'>
            <div className="prodContainer">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
                


            <div className="cartContainer">
              
               
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;