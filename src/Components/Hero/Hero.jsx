import React from 'react';
import hero_image from './hero.png';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className='hero p-10 bg-gradient-to-tr from-green-400 to-green-100'>
            <div className="flex flex-row content-around items-center">
                <div className="basis-1/2 ml-20 p-10">
                    <h1 className='text-5xl font-bold text-fuchsia-950 mb-4'>Meal-Mate</h1>
                    <p className='text-green-900'>It provides you a convenient way to start your healthy lifestyle by making available of healthy choices of food. So hurry up and start from right here... </p>
                    <Link to="/menu_plan"> <button className="btn bg-fuchsia-950 text-white hover:text-fuchsia-950 px-8 font-bold mt-5">Find Your won Plan</button> </Link>
                </div>
                <div className="basis-1/2 p-5">
                    <img style={{width: "100%"}} src={hero_image} className="shadow-2xl rounded-md" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;