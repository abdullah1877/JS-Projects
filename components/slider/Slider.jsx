"use client"
import React, { useState } from 'react';
import classes from './style.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    const reviews = [
        {
            name: 'PETER DOE',
            role: 'Product Manager',
            text: 'Hi its peter I used this product it is great?',
            image: './assets/Slider1.jpeg',
        },
        {
            name: 'John Petter',
            role: 'Team Leader',
            text: 'Hey there it, john I used this it is amazing?',
            image: './assets/Slider2.jpeg',
        },
        {
            name: 'Petter HENRY',
            role: 'Head Manager',
            text: 'I am petter henry I have used this it is amazing?',
            image: './assets/Slider3.jpeg'
        }
    ];

    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    }; 

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <>
            <div className={classes.background}>
                <div className='text-center'>
                    <div className='flex justify-center pt-28'>
                        <span style={{ fontSize: '2.4rem', color: '#49a6e9', marginRight: '1rem' }}>/</span>
                        <h1 style={{ color: '#102a42', fontSize: '2.5rem', fontWeight: 'bold' }}>Reviews</h1>
                    </div>
                    <div className={classes.border}>
                        <div className='flex justify-center pt-6'>

                            <div className='absolute left-0 top-1/2 transform -translate-y-1/2 pl-[494px]'>
                                <FaArrowLeft size={30} color='#102a42' onClick={prevReview} />
                            </div>

                            <div className='w-[170px] h-[170px] rounded-full overflow-hidden'> 
                                <img
                                    style={{
                                        border: '1px solid #9eb2c7',
                                        borderRadius: '50%',
                                        background: '#ffffff',
                                        padding: '0.25rem', 
                                    }}
                                    className='w-full h-full object-cover'
                                    src={reviews[currentReview].image}
                                    alt='Your Image'
                                />
                            </div>

                            <div className='absolute right-0 top-1/2 transform -translate-y-1/2 pr-[494px]'>
                                <FaArrowRight size={30} color='#102a42' onClick={nextReview} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[#49a6e9] p-1'>{reviews[currentReview].name}</h1>
                            <h2 className='text-[#617d98]'>{reviews[currentReview].role}</h2>
                            <p className='text-[#617d98] p-4 text-center'>{reviews[currentReview].text}</p>
                        </div>
                    </div> 
                    <div className='flex justify-center pt-8'>
                        <img
                            src='/assets/quotation-marks-removebg-preview.png' width={90} height={90} 
                            alt='Your Image'
                        />
                    </div>
                </div>
            </div>
        </> 
    );
};
export default Slider;
