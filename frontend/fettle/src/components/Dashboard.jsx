import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
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
                navigate('/')
            }
            console.log(res," is the res")
        })
    },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard