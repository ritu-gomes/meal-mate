import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import fakeData from '../../fakedata.json';
import image from './pexels-antoni-shkraba-5852326.jpg';

const MenuDetails = () => {
    const {id} = useParams();
    const menuDetails = fakeData.find(menu => menu.id === id);
    const { name, description, breakfast, snacks1, snacks2, lunch, dinner, totalCalories, weeklyPrice, monthlyPrice} = menuDetails;
        // const menuDetals = useLoaderData();
        console.log(image);
        // const {id, name} = menuDetals;
    return (
        <div className='bg-gradient-to-tr from-green-400 to-green-100 py-20'>
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden p-5">
                <img
                    src={image}
                    alt="image"
                    className="w-full h-60 object-cover object-center rounded-2xl"
                />
                <div className="p-4">
                    <h2 className="text-2xl font-semibold text-green-900 mb-2">{name}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Meal Plan:</h3>
                    <ul className="list-disc pl-5">
                        <li>Breakfast: {breakfast}</li>
                        <li>Snack1: {snacks1}</li>
                        <li>Lunch: {lunch}</li>
                        <li>Snack2: {snacks2}</li>
                        <li>Dinner: {dinner}</li>
                    </ul>
                    <p className="text-gray-600 mb-2 mt-2">Total Calories: <span className='text-green-900 font-semibold'>{totalCalories}</span> <small>kcal/day</small></p>
                    </div>
                    <div className="flex justify-between items-end flex-wrap">
                        <div className='basis-5/12'>
                            <Link to="/" className='w-full rounded-md btn bg-fuchsia-950 text-white hover:text-fuchsia-950 px-8 font-bold'>Mail for subscription</Link>
                        </div>
                        <div className='basis-6/12'>
                            <p className="text-green-600">Weekly subscription: {weeklyPrice} tk</p>
                            <p className="text-green-600 font-semibold">Monthly subscription: {monthlyPrice} tk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default MenuDetails;