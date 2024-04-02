import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  function SubmitHandler() {
    axios({
      url: "http://localhost:8000/forgotpassword",
      method: "POST",
      data: { email: email },
    })
      .then((res) => {
        if (res.data.status) {
          console.log(res.data.message);
          alert("check your email for reset password link");
          navigate(`/login`);
        }
        console.log(res.data);
      })
      .catch((err) => {
        alert("Error");
      });
  }
  return (
    <div>
      <div>
        <label htmlFor="email">Email : </label>
        <input id="email" onChange={(e) => setemail(e.target.value)}></input>
      </div>
      <div>
        <button onClick={SubmitHandler}>Reset</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
