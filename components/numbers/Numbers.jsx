"use client"
import classes from './style.module.css'
import React, { useState, useEffect } from 'react';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap');
</style>

const CountingNumbersComponent = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [thirdNumber, setThirdNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (firstNumber < 500) {
                setFirstNumber(firstNumber + 1);
            }

            if (secondNumber < 1347) {
                setSecondNumber(secondNumber + 1);
            }

            if (thirdNumber < 1200) {
                setThirdNumber(thirdNumber + 1);
            }
        });

        return () => clearInterval(interval);
    }, [firstNumber, secondNumber, thirdNumber]);
 
    return ( 
        <> 
            <div className={classes.background}>
                <div className='flex justify-center gap-12 p-20'>
                    <div style={{ border: '2px solid #ffffff', backgroundColor: '#ffffff', width: '350px', borderBlockEnd: '4px solid #f59e0b', borderRadius: '12px', fontWeight: 'bold' }}>
                        <p className='jusify-center' style={{ fontSize: '6rem', border: '2px solid #ffffff', backgroundColor: '#ffffff' }}>{firstNumber}+</p>
                        <h1 style={{ fontSize: '1.5rem' }}>Succeeded Projects</h1> 
                    </div>
                    <div style={{ border: '2px solid #ffffff', backgroundColor: '#ffffff', width: '350px', borderBlockEnd: ' 4px solid #14b8a6', borderRadius: '12px', fontWeight: 'bold' }}>
                        <p style={{ fontSize: '6rem', border: '2px solid #ffffff', backgroundColor: '#ffffff' }}>{secondNumber}+</p>
                        <h1 style={{ fontSize: '1.5rem' }}>Working Hours Spent</h1>
                    </div>
                    <div style={{ border: '2px solid #ffffff', backgroundColor: '#ffffff', width: '350px', borderBlockEnd: '4px solid #a855f7', borderRadius: '12px', fontWeight: 'bold' }}>
                        <p style={{ fontSize: '6rem' }}> {thirdNumber}+</p>
                        <h1 style={{ fontSize: '1.5rem' }}>Happy Clients</h1>  
                    </div>
                </div>    
            </div>
        </>
    ); 
};
export default CountingNumbersComponent; 