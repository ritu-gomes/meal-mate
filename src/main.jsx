import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Main from './Components/Main/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Contact from './Components/Contact/Contact.jsx';
import CalorieCalculator from './Components/CalorieCalculator/CalorieCalculator.jsx';
import Signup from './Components/Signup/Signup.jsx';
import MenuPlan from './Components/MenuPlan/MenuPlan.jsx';
import MenuDetails from './Components/MenuDetails/MenuDetails.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import AddMeal from './Components/AddMeal/AddMeal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home> 

      },
      {
        path: '/contact',
        element: <Contact></Contact> 

      },
      {
        path: '/caloriecalculator',
        element: <CalorieCalculator></CalorieCalculator> 

      },
      {
        path: '/sign_up',
        element: <Signup></Signup> 

      },
      {
        path: '/menu_plan',
        element: <MenuPlan></MenuPlan> 

      },
      {
        path: '/details/:id',
        element: <MenuDetails></MenuDetails>,
        // loader: ({params}) => fetch(`/public/fakedata.json/${params.id}`) 

      },
      {
        path: '/addMeal',
        element: <AddMeal></AddMeal>
        // loader: ({params}) => fetch(`/public/fakedata.json/${params.id}`) 

      },
      {
        path: '/login',
        element: <Login></Login> 

      }
     
]
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='text-lg mx-28'>
   <React.StrictMode>
       <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
 </div>
)
