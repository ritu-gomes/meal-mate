import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [signUpError, setSignUpError] =useState("");
    const [createdUserEmail, setcreatedUserEmail] = useState("");
    // const [createdUserEmail, setcreatedUserEmail] = useState("");
    const { createUser , updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleSignUp = (data)=>{
        

        setSignUpError("");
        createUser(data.email,data.password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            toast("User Created successfully")
            
            const userInfo = {
                displayName: data.name,
              };

              updateUser(userInfo)
              .then(()=>{
            saveUser(data.name,data.email);
            toast("User Created successfully")
            navigate("/login")
        })
        .catch((err) => console.log(err));
        })
        .catch((error) => {
            console.error(error);
            setSignUpError(error.message);
          });
    }

    const saveUser = (name, email)=>{
        const user ={ name, email};
             fetch("http://localhost:5000/users",{
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                         },
                        body: JSON.stringify(user),
                })
                .then((res)=> res.json())
                .then((data)=>{
                 setcreatedUserEmail(data.email);
        });


};
    return (
            <div className="flex h-screen bg-gradient-to-tr from-fuchsia-100 to-white items-center justify-center">
                <div className="bg-gradient-to-tr from-green-400 to-green-200 p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium mb-2">Username</label>
                        <input
                         {...register('name')}
                        type="text"
                        className="w-full p-2 border rounded-md focus:ring focus:ring-lightgreen"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-2">Email</label>
                        <input
                         {...register('email')}
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded-md focus:ring focus:ring-lightgreen"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">Password</label>
                        <input
                         {...register('password')}
                        type="password"
                        id="password"
                        className="w-full p-2 border rounded-md focus:ring focus:ring-lightgreen"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md btn bg-fuchsia-950 text-white hover:text-fuchsia-950 px-8 font-bold"
                    >
                        Sign Up
                    </button>
                    </form>
                </div>
            </div> 
    );
};

export default Signup;