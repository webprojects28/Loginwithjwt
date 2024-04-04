import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Userpage from "./components/Userpage";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import ResetPassword from "./components/ResetPassword";
import CalorieCalculator from './components/CalorieCalculator';
import DietPlanner from './components/DietPlanner';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Navbar from "./components/Navbar";
import RecipeDetail from "./components/RecipeDetail";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Navigate to="/dashboard" /> ,
  },
  {
    path: "/login",
    element:  <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword/:token",
    element:<ResetPassword /> ,
  },
  {
    path: "/user/:name",
    element: <><Navbar/> <Userpage /></>,
  },
  {
    path:'/dashboard',
    element:<><Navbar/> <Dashboard/></>,
  },
  {
    path:'/caloriecalculator',  
    element:<><Navbar/> <CalorieCalculator/></>,
  },
  {
    path:'/dietplanner',  
    element:<><Navbar/> <DietPlanner/></>,
  },
  {
    path:"/recipe/:id",
    element : <><Navbar/> <RecipeDetail/></> ,
  },
  {
    path:'/aboutus',  
    element:<><Navbar/> <AboutUs/></>,
  },
  {
    path:'/contactus',
    element:<><Navbar/> <ContactUs/></>,
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
