"use client" 
import React, { useState } from "react";
import classes from "./style.module.css";

const BackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState('#cba846');

  const handleChangeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor); 
  };  
       
  return (
    <div className={`app-container ${classes.appContainer}`} style={{ backgroundColor }}>
      <div className="place-content-center flex">   
        <nav>
          <h4 style={{ fontSize: '1.9rem' }} className="text-blue-700">Color Flipper</h4>
        </nav> 
      </div>
      <div className="p-60 place-content-center flex">
        <h2 style={{ border: '10px solid black', borderRadius: '12px', fontSize: '2.5rem', background: backgroundColor, color: "white" }}>  
          background color : " 
          <span className="color">{backgroundColor}</span>  
        </h2>  
      </div>
      <div style={{ minHeight: '17vh', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
        <button onClick={handleChangeColor} style={{ border: '3px solid black', borderRadius: '5px', fontSize: '1.5rem', padding: '8px' }}>Click Me!</button>
      </div>
    </div>  
  );
};

export default BackgroundChange;
