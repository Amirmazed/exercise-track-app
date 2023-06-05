import React from 'react';
import weight from '../../images/weight.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={weight} alt="" />

                <div>
                    <a href="/shop">Home</a>
                    {/* <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a> */}
                </div>
            </nav>
        </div>
    );
};

export default Header;