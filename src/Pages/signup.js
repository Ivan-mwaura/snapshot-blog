import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();

 const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();

    const form = document.getElementById("signinForm");
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      //Create user
     await createUserWithEmailAndPassword(auth, email, password);
    
     
      navigate("/");

    } catch (err) {
      setErr(err)
      setLoading(false)
      }
    };

  return (
    <div className="formContainer">
       <div className="formWrapper">
        <span className="logo">Welcome to SnapShot </span>
        <span className="title">Please register to proceed </span>

        <form onSubmit={handleSignUp} id="signinForm">
            <input required type="email" name="email" placeholder="email" />
            <input required type="password" name="password" placeholder="password" />
            <button type="submit" onClick={handleSignUp}>Register</button>
           {err && <p className="error--message">That email is already registered to another account,
           <br/> please proceed to <Link to={'/login'}>Login</Link></p>}
           
           {loading && <p className="loading">Creating your account... Youre being <br/>redirected to the main page in a few</p> }
      </form>
     

        <p>developer: Evan Mwaura</p>
      </div>

     
    </div>
  );
};

export default SignUp;
