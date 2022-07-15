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
            <h1 className=" text-5xl text-center font-bold mb-16 hover:scale-110 transition delay-400 cursor-context-menu hover:text-purple-900">Contact Now ! </h1>
           
            <div className=" min-h-screen mb-32 ">
                <div className="flex justify-center ">
                    <div className="text-center lg:text-left">
                        
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-fuchsia-200 zoom">
                        <form onSubmit={emailSender} action="">

                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black ">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-black ">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                                </div>
                                <div className="form-control py-6">

                                    <label className='mb-4 text-black '>Give Your Valueable Reviews
                
                                    </label>
                                    <textarea className='text-black p-2' name="describe" id="" cols="30" rows="10"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn  bg-purple-800 hover:bg-purple-900 hover:scale-110 transition delay-400 " type="submit" value='Contact' />

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