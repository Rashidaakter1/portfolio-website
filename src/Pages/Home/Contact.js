import React from 'react';

const Contact = () => {
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
                'name':name,
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
        <div className=''>
            <h1 class=" text-5xl text-center font-bold mb-16">Contact Now ! </h1>
            <div class=" min-h-screen mb-40">
                <div class="flex justify-center ">
                    <div class="text-center lg:text-left">
                        
                        {/* <img className='card flex-shrink-0 max-w-sm shadow-2xl bg-base-100'style={{height: '650px'}} src="https://i.ibb.co/RTPYjd1/michal-biernat-h0x-EUQXz-U38-unsplash.jpg" alt="" /> */}
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-100">
                        <form onSubmit={emailSender} action="">

                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" class="input input-bordered" />
                                </div>
                                <div class="form-control py-6">

                                    <label className='mb-4'>Give Your Valueable Reviews
                
                                    </label>
                                    <textarea className='text-black p-2' name="describe" id="" cols="30" rows="10"></textarea>

                                </div>
                                <div class="form-control mt-6">
                                    <input class="btn btn-primary" type="submit" value='Contact' />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;