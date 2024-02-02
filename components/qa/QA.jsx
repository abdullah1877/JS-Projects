"use client"
import React, { useState } from 'react'
import classes from './style.module.css'

const QA = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const questions = [
    { text: "DO YOU ACCEPT ALL MAJOR CREDIT CARDS?", color: '#ffffff', size: '40%', },
    { text: "Do You Support Local Farmers?", color: '#ffffff', size: '40%' },
    { text: "Do You Use Organic Ingredients?", color: '#ffffff', size: '40%' }
  ];
 1
  return (
    <>
      <div className={classes.background}>
        <div className={`flex justify-center p-20`}>
          <h2 style={{ fontFamily: '"Great Vibes", cursive', color: '#c59d5f', fontSize: '3rem' }}>General Questions</h2>
        </div>
        {questions.map((question, index) => (
          <div key={index} className='flex justify-center'>
            <div style={{ border: '20px solid ' + question.color, backgroundColor: question.color, borderRadius: '10px', width: question.size, marginBottom: '2rem', boxShadow: 'var(--light-shadow)' }}>
              <div className='justify-between flex'>
                <p style={{ fontSize: '1.5rem' }}>{question.text}</p>
                <button onClick={() => handleAccordionClick(index)} style={{ border: '3px solid #c59d5f', borderRadius: '4px', boxSizing: 'border-box' }}>+</button>
              </div>
              {activeAccordion === index && (
                <div className='pt-6'> 
                    <div className='accordion-content'>
                      <div style={{ borderTop: '2px solid #cccccc', padding:'4px' }}>
                        <p style={{ color: '#617d98' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.</p>
                      </div>
                    </div>
                  </div>
              )} 
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default QA;