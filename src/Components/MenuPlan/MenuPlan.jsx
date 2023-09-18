import React, { useEffect, useState } from 'react';
import menu_data from '../../fakedata.json';
import MenuCard from '../MenuCard/MenuCard';
import { Link } from 'react-router-dom';
// import MenuDetails from '../MenuDetails/MenuDetails';

const MenuPlan = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meals')
            .then(res => res.json())
            .then(data => {
                setMeals(data);
            })
    }, []);
    console.log(meals);
    
    return (
        <div className='grid grid-cols-3 grid-flow-row gap-14 p-20 bg-gradient-to-tr from-green-400 to-green-100 justify-items-center'>
            
            {

                menu_data.map((value) => <MenuCard key={value.id} values={value}></MenuCard> )

            }

            <Link to="/addMeal" className='w-full'>
                <div className="card grid h-full bg-base-100 transform transition duration-500 hover:scale-95 p-4 border rounded-lg shadow-lg cursor-pointer content-center">
                    <div className="flex justify-center items-center h-24">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                        </svg>
                    </div>
                    <p className="text-center text-gray-700">Add Item</p>
                </div>
            </Link>

                    
            

        </div>
    );
};

export default MenuPlan;