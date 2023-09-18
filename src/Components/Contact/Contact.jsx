import React from 'react';
import nutritionist from './pexels-beyzahzah-15391542.jpg';
import './contact.css';

const Contact = () => {
    return (
            <section className="contact bg-gradient-to-b from-fuchsia-100 to-white p-20">
                <h1 className="text-3xl font-semibold text-fuchsia-950 mb-20 text-center"> We Would Love To Hear From You</h1>

                <div className="flex flex-row justify-around justify-content-center items-center gap-10">
                    <div className="basis-3/6">
                        <form className="p-5 bg-gradient-to-tr from-green-400 to-green-200 rounded-xl shadow-2xl"> 
                        {/* onSubmit={handleSubmit} */}
                            <input className="form-control mb-3 py-4" type="text" name="name" placeholder="Your Name" />
                            <input className="form-control mb-3 py-4" type="email" name="email" placeholder="Email" />
                            <textarea className="form-control mb-3" name="message" placeholder="Message" rows="5"></textarea>
                            <input className="form-control btn rounded-md bg-fuchsia-950 text-white hover:text-fuchsia-950 px-8 font-bold" type="submit" value="Send" />
                        </form>
                    </div>

                    <div className='basis-3/6'>
                    <div className="card h-80 lg:card-side shadow-2xl bg-gradient-to-tr from-green-400 to-green-200">
                        <figure className='p-5 h-full basis-9/12'><img className='rounded-full h-full' src={nutritionist} alt="Album"/></figure>
                        <div className="card-body basis-8/12">
                            <h2 className="card-title">Arifa Akhtar Jemi</h2>
                            <p>Nutritinist</p>
                            <div className="card-actions justify-end">
                                <button className="rounded-md btn bg-emerald-900 text-white hover:text-emerald-900 hover:bg-white px-8 font-bold w-full">Mail for appoinment</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    );
};

export default Contact;