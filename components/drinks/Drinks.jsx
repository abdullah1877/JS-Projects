"use client"
import React, { useState } from 'react';
import classes from './style.module.css';

const drinksData = [
    {
        id: 1,
        name: 'Margarita',
        image: '/assets/drink1.jpg',
    },
    {
        id: 2,
        name: 'Martini',
        image: '/assets/drink2.jpg',
    },
    {
        id: 3,
        name: 'Acid',
        image: '/assets/drink3.jpg'
    }
];

const Drinks = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredDrinks = drinksData.filter(drink =>
        drink.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }; 
       
    return (
        <div className={classes.background}>
            <div className='flex justify-center pt-8'>
                <h1 className='text-[#102a42]' style={{ fontSize: '2rem', fontWeight: 'bold' }}>Cocktails API</h1>
            </div>
            <div className='flex justify-center p-6'> 
                <input
                    className={classes.placeholder}
                    style={{ width: '30%', border: '2px solid #ffffff', borderRadius: '8px', height: '39px', padding: '16px' }}
                    type='text' 
                    placeholder='Search your favorite cocktails'
                    name='drinks'
                    value={searchQuery} 
                    key={3} 
                    onChange={handleSearchChange} 
                /> 
            </div>
            <div className='flex justify-between p-20 w-full pl-64'>
                {filteredDrinks.map(drink => (
                    <div key={drink.id} style={{ border: '12px solid #ffffff', borderRadius: '10px', position: 'relative' }}>
                        <img src={drink.image} width={300} alt={drink.name} />
                        <h3 style={{ background: 'black', color: 'white', textAlign: 'end', textTransform: 'uppercase', fontFamily: 'monospace', fontSize: '2rem', borderRadius: '3px', position: 'absolute', padding: '30px', right: '-40px', bottom: '-20px', borderRadius: '10px', padding: '0.8rem 2rem' }}>{drink.name}</h3>
                    </div>
                ))}
            </div>  
        </div>
    );
};
export default Drinks;
