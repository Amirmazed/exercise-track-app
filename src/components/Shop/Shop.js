import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../Utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (prod) => {
        console.log(prod);

        let newCart = []
        const exists = cart.find(product => product.id === prod.id)
        if(!exists) {
            prod.quantity = 1;
            newCart = [...cart, prod];
        }
        else{
            const rest = cart.filter(product => product.id !== prod.id);
            exists.quantity =  exists.quantity + 1;
            newCart = [...rest, exists]

        }



        //const newCart = [...cart, prod];
        setCart(newCart)
        addToDb(prod.id)
    }


    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])


    useEffect(()=> {
        const storedCart = getStoredCart();
        const savedCart = []
        for(const id in storedCart){
            //console.log(id)
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //console.log(addedProduct)
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    return (
        <div className='shop-container'>
            <div className="products-container">
                
            {
                products.map(product => <Product key={product.id}

                product={product}
                handleAddToCart = {handleAddToCart}
                
                ></Product>)
            }

            </div>


            <div className="cart-container">
            
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;