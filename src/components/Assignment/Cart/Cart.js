import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props
    console.log(cart)

    let total = 0;
    let quantity = 0;
    for(const product of cart){
        //console.log(product)
        quantity = quantity + product.quantity
        total = total + product.Time_Req *product.quantity;
    }


    const [selectedOption, setSelectedOption] = useState('');
    useEffect(()=>{
        const storedOption = localStorage.getItem('selectedOption');
        if(storedOption){
            setSelectedOption(storedOption);
        }
    }, [])

    const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', option)
    }



    return (
        <div className='cart'>
             <div className='id'>
                <div className='name'>
                    <div className='first'>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <p>Amir Mazed</p>
                            <p>CTG, Bangladesh</p>
                        </div>
                    </div>

                    <div className='info'>
                        <div>
                            <p>67kg</p>
                            <p>weight</p>
                        </div>
                        <div>
                            <p>176 cm</p>
                            <p>height</p>
                        </div>
                        <div>
                            <p>25yr</p>
                            <p>Age</p>
                        </div>
                    </div>
                </div>


                <h4 className='breaks'>Add a break</h4>



                <div className='break'>
                <div className='functbtn'>
                    <button onClick={() => handleOptionClick('40s')} className={selectedOption === '40s' ? 'selected' : 'radiobtn'}>40s</button>
                    <button onClick={() => handleOptionClick('50s')} className={selectedOption === '50s' ? 'selected' : 'radiobtn'}>50s</button>
                    <button onClick={() => handleOptionClick('60s')} className={selectedOption === '60s' ? 'selected' : 'radiobtn'}>60s</button>
                    <button onClick={() => handleOptionClick('70s')} className={selectedOption === '70s' ? 'selected' : 'radiobtn'}>70s</button>
                    <button onClick={() => handleOptionClick('90s')} className={selectedOption === '90s' ? 'selected' : 'radiobtn'}>90s</button>
                </div>


                <h4 className='exDetails'>Exercise Details</h4>
                <div className="exercise">
                    
                    <strong>Exercise time</strong>
                    <p>{total} seconds</p>
                </div>

                <div className="addBreak">
                    <strong>Break time</strong>
                    <p>{selectedOption} seconds</p>
                </div>

               
                </div>





             </div>


            {/* This is for calculation */}
             {/* <div className='total'>
                <h4>Total calculation</h4>
                <p>selected Items: {quantity}
                </p>
                <strong>Exercise time {total} seconds</strong>
             </div> */}
             
        </div>
    );
};

export default Cart;