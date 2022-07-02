import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/rZWYWg2/In-Shot-20220624-225654435.jpg" alt='' class="max-w-sm rounded-lg rounded shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">HELLO!</h1>
                    <p class="py-6 ">From Rashida , a junior frontend developer </p>
                    <a target="_blank" href='https://drive.google.com/file/d/1EAGSKk3vt9k6SDVGOI-emiy--15MgoCK/view?usp=sharing' class="btn" download>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;