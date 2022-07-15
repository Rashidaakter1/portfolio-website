import React from 'react';

const Contacts = () => {
    const emailSender = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const describe = e.target.describe.value
        const name = e.target.name.value

        const data = {
            service_id: 'service_w3szx63',
            template_id: 'template_8ew0jbp',
            user_id: 'eNHtSLnT51LqtIrIZ',

            template_params: {
                'name': name,
                'email': email,
                'describe': describe
            }
        };
        console.log(data);


        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        e.target.reset()

    }
    return (
        <div className='lg:flex lg:items-center'>   
          
             
                 <img className=' mt-3 zoom shadow-2xl w-1/2 m-4 ' src="https://i.ibb.co/mcg46f0/miles-burke-idhx-MOCDSk-unsplash.jpg" alt="" />
           
           
            <div className=' mx-auto mt-10 hover:scale-110 transition delay-400'>
                <div className=''>

                    <div className="card w-full bg-teal-100 shadow-xl mt-4 mb-5">
                        <div className="card-body mb-8">
                            <form className=' mx-auto' onSubmit={emailSender} action="">

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-slate-900 font-bold">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-slate-900 font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control p-4 mb-3">
                                    <label className='mb-4  text-slate-900 font-bold' >Give Your Valueable Reviews
                                    </label>
                                    <textarea className='text-black' name="describe" id="" cols="30" rows="10"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-stone-700" type="submit" value='Contact' />

                                </div>

                            </form>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Contacts;