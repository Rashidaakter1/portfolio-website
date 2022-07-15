import React from 'react';

const About = () => {
    return (
        <div >
            
            <div className="card w-100 ">
                <figure className='zoom'><img style={{"marginTop":'30px', 'height':'500px'}} src="https://i.ibb.co/kGLBsK0/5116410.jpg" alt="about" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl m-4 hover:text-amber-900 hover:rotate-3 transition duration-700 uppercase">who am i</h2>
                    <p>I am Rashida Akter. I graduated from Bangladesh University in Applied Mathematics. I have some curiosity about coding and websites. How do those things work, and how can we use some text code editor to build a website? It is fascinating for me. So I started learning from some sources like youtube. Also, I recently finished a course in web development where I learned many things to get to know about modern technologies. This is my journey from noncse to web development. </p>
                    <p>I am a positive, enthusiastic, and competent learner and also have a vast knowledge of web development. I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms.  I take my work as a Web Developer seriously, which means I always ensure my skills are kept up to date within this rapidly changing industry.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;