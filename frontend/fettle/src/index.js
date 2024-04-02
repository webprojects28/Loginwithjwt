import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Userpage from "./components/Userpage";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import ResetPassword from "./components/ResetPassword";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
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
    element: <ResetPassword />,
  },
  {
    path: "/user/:name",
    element: <Userpage />,
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
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
