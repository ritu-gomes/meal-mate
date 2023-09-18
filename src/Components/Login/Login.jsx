import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider'
import toast from 'react-hot-toast';

const Login = () => {
    const [loginError, setLoginError] = useState("");
    const [loginUserEmail, setLoginUserEmail] = useState("");
    // const [loggedIn,setLoggedIn] = useState(false);
    const { signIn }= useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const handleLogin =(data)=>{

        // setLoggedIn(true);

        console.log(data);

        localStorage.setItem('logged', true);

        signIn(data.email, data.password)
            .then(result => {

                const loggedUser = result;
                console.log(loggedUser);
                toast("User login successfull")
                navigate('/');

            })
    }
    return (
        <div className="flex h-screen bg-gradient-to-tr from-green-500 to-green-100 items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Email</label>
                    <input
                     {...register('email')}
                    type="email"
                    id="email"
                    className="w-full p-2 rounded-md focus:ring focus:ring-lightgreen border-solid border-emerald-900 border-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-2">Password</label>
                    <input
                     {...register('password')}
                    type="password"
                    id="password"
                    className="w-full p-2 rounded-md focus:ring focus:ring-lightgreen border-solid border-emerald-900 border-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full btn bg-emerald-900 text-white hover:text-emerald-900 hover:bg-white
                     px-8 font-bold rounded-md transition-colors"
                >
                    Login
                </button>
                <small className='text-emerald-900 mt-3'>Do not have any account? <Link to='/sign_up' className='underline'>SignUp here</Link></small>
                <div className="mt-4">
                    <hr className='mb-5'/>
                    <button className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors w-full">
                    <FaFacebook className="mr-2" />
                    Login with Facebook
                    </button> <br />
                    <button className="flex items-center justify-center border-red-600 border-solid border-2 bg-slate- text-slate-900 p-2 rounded-md hover:bg-red-600 transition-colors w-full">
                    <FcGoogle className="mr-2" />
                    Login with Google
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;