import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/s2wDCzV/bannerp.png" alt='' className="max-w-md rounded zoom shadow-2xl p-5" />
                <div className='text-orange-200'>
                    <h1 className="text-5xl font-bold hover:scale-125 transition duration-700 cursor-context-menu hover:text-rose-900 italic font-mono mb-5">HI,I AM 
                    </h1>
                    <h2 className="text-4xl font-bold hover:scale-125 transition duration-700 cursor-context-menu hover:text-orange-700 italic font-mono mr-3"> RASHIDA AKTER</h2>
                    <p className="py-6 text-2xl font-bold uppercase zoom hover:text-orange-900 font-mono"> front-end developer </p>
                    <a target="_blank" href='https://drive.google.com/file/d/1GOKgz1azymOhg0Sw2oh9btMe09sRKaVW/view?usp=sharing' className="btn hover:scale-125 transition delay-600 ease-in-out  cursor-progress hover:text-red-900 hover:bg-stone-900" download>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;