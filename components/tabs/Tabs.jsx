"use client"
import classes from './style.module.css'
import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('History');

    return (
        <div className={classes.background}>
            <div className='text-center p-16'>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }} className='text-[#102a42]'>
                    About 
                </h1>
                <p className='text-lg text-[#617d98]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!</p>
            </div> 
            <div className='w-full flex'>
                <div style={{ objectFit: 'cover', height: '20rem', paddingLeft: '150px', width: '50%' }} className='flex'>
                    <img style={{ borderRadius: '10px' }} src='/assets/tabs-js-image.jpeg' width={600} />
                </div>
                <div style={{ objectFit: 'cover', border: '3px solid #ffffff', width: '650px', height: '20rem', backgroundColor: '#ffffff', borderRadius: '10px', paddingLeft: '18px' }}>
                    <div className={classes.btn}> 
                        <div className='justify-between flex'>
                            <button
                                className={`p-4 text-lg ${activeTab === 'History' ? 'font-bold' : ''}`} 
                                onClick={() => setActiveTab('History')}
                            >
                                History 
                            </button>
                            <button  
                                className={`p-4 text-lg ${activeTab === 'Visions' ? 'font-bold' : ''}`}
                                onClick={() => setActiveTab('Visions')}
                            >
                                Visions   
                            </button>
                            <button
                                className={`p-4 text-lg ${activeTab === 'Goals' ? 'font-bold' : ''}`}
                                onClick={() => setActiveTab('Goals')}
                            >
                                Goals 
                            </button> 
                        </div> 
                    </div> 
                    <div>
                        <h2 style={{ color: '#102a42', fontWeight: 'bold' }}>{activeTab}</h2>
                        <p className='text-[#617d98] justify-center p-6'>
                            {activeTab === 'History' &&
                                "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."}

                            {activeTab === 'Visions' &&
                                "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four -0p0 loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."}
 
                            {activeTab === 'Goals' && 
                                "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."}
                        </p> 
                    </div> 
                </div> 
            </div>
        </div>
    );
};

export default Tabs;
