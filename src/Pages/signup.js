import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { auth } from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

  //states section
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);


  //asynchronus function to create new user with email and password through firebase
  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();


    //form dat handling
    const form = document.getElementById("signinForm");
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      //Create new user
     await createUserWithEmailAndPassword(auth, email, password); 
      navigate("*");

    } catch (err) {
      setErr(err)
      setLoading(false)
      }
    };


    //Enter key event
    function  handleKey(event){
      if(event.key === 'Enter'){
        event.preventDefault()
        handleSignUp(event)
      }
     
    }

    //check if user is logged in and keep user always logged in

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate('/');
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, [navigate]);

  return (
    <div className="formContainer">

       <div className="formWrapper">

        <span className="logo">Welcome to SnapShot </span>

        <span className="title">Please register to proceed </span>

        <form onSubmit={handleSignUp} id="signinForm">
            <input required type="email" name="email" placeholder="email" />

            <input required type="password" name="password" placeholder="password" />

            <button type="submit" onClick={handleSignUp} onKeyPress={handleKey}>Register</button>

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
