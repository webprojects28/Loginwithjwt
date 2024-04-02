import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function ResetPassword() {
  const [password, setpassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  function SubmitHandler() {
    axios

      .post("http://localhost:8000/resetpassword/" + token, {
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        alert("Success");
        navigate(`/login`);
      })
      .catch((err) => {
        console.log(err);
        alert("User does not Exists");
      });
  }
  return (
    <div>
      <div>
        <label htmlFor="password">New Password : </label>
        <input
          id="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={SubmitHandler}>Reset Password</button>
      </div>
    </div>
  );
}

export default ResetPassword;
