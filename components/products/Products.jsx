import React from 'react'
import classes from "./style.module.css"

const Products = () => {
    return (
        <>
            <div className={classes.background}>
                <div className='flex justify-center p-14'>
                    <h1 className={classes.border} style={{ fontSize: '2.441rem' }}>Our Products</h1>
                </div>
                <div className='flex justify-between p-10'> 
                    <div className='pl-24 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-1.jpeg' width={400} />
                        <h1 className='text-center text-[#64748b] '>High Back Bench</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$9.99</h2>
                    </div>
                    <div className='gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-2.jpeg' width={400} />
                        <h1 className='text-center text-[#64748b] '>Albany Table</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$79.99</h2>
                    </div>
                    <div className='pr-20 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-3.jpeg' width={400} />
                        <h1 className='text-center text-[#64748b] '>Accent Chair</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$25.99</h2>   
                    </div>  
                </div>  
                <div className='flex justify-between'> 
                    <div className='pl-24 gap-4'> 
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-4.jpeg' width={430} />
                        <h1 className='text-center text-[#64748b] '>Woodn Table</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$9.99</h2>
                    </div> 
                    <div className='gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-5.jpeg' width={390} />
                        <h1 className='text-center text-[#64748b] '>Dining Table</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$79.99</h2>
                    </div>
                    <div className='pr-20 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-6.jpeg' width={470} />
                        <h1 className='text-center text-[#64748b] '>Sofa Set</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$25.99</h2>
                    </div>
                </div> 
                <div className='flex justify-between p-10'>
                    <div className='pl-12 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-7.jpeg' width={410} />
                        <h1 className='text-center text-[#64748b] '>Modern BookShelf</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$45.99</h2>
                    </div>
                    <div className='gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-8.jpeg' width={440} />
                        <h1 className='text-center text-[#64748b] '>Emperor Table</h1> 
                        <h2 className='text-center text-[#334155] font-medium '>$6.99</h2>
                    </div>
                    <div className='pr-20 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-9.jpeg' width={410} />
                        <h1 className='text-center text-[#64748b] '>Utopia Sofa</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$69.99</h2> 
                    </div>   
                </div> 
                <div className='flex justify-between p-10'>
                    <div className='pl-12 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-10.jpeg' width={370} />
                        <h1 className='text-center text-[#64748b] '>Entertainment Center</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$39.99</h2>
                    </div>
                    <div className='gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-11.jpeg' width={470} />
                        <h1 className='text-center text-[#64748b] '>Albany Section</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$10.99</h2>
                    </div>
                    <div className='pr-20 gap-4'>
                        <img style={{ border: '2px solid white', borderRadius: '10px' }} src='/assets/product-12.jpeg' width={350} />
                        <h1 className='text-center text-[#64748b] '>Leather Sofa</h1>
                        <h2 className='text-center text-[#334155] font-medium '>$9.99</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products