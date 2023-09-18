import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({values}) => {
    const { id, name, description, breakfast, snacks1, lunch, snacks2, dinner, totalCalories, image } = values;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl transform transition duration-500 hover:scale-95">
                <figure className="px-8 pt-8">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <h4>{description}</h4>
                    <div className="card-actions mt-3 w-full" >
                    {/* className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors w-full" */}
                        <Link to= {`/details/${id}`}><button className="rounded-md btn bg-fuchsia-950 text-white hover:text-fuchsia-950 px-8 font-bold">View Detaills</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;