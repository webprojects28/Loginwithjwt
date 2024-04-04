import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assessts/bg-image.png'
import axios from "axios";
import Navbar from './Navbar';
function Dashboard() {
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    
    useEffect(()=>{
      axios({
        url: "http://localhost:8000/verify",
        method: "GET",
      })
        .then(res=>{
            if(res.data.status){

            }
            else{
                navigate('/login')
            }
        })
    },[])

  return (
    <div>
      <Navbar/>
      <div className="main">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Dashboard