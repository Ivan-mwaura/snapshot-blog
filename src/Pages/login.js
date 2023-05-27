import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

import { Link } from 'react-router-dom';

const LogIn = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = document.getElementById('loginForm');
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('*');
     
    } catch (err) {
      setErr(err);
      setLoading(false)

    }
  };

  function handleKey(event){
      if(event.key === 'Enter'){
        event.preventDefault();
        handleLogin(event)
      }
  }

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
        <span className="logo">Welcome to SnapShot</span>
        <span className="title">Please Login to proceed</span>

        <form onSubmit={handleLogin} id="loginForm">
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit" onKeyPress={handleKey}>Log in</button>
            {err && <p className='invalid--login'>Invalid username... try again</p>}
        { !err && loading && <p className='loading'>loading... Youre being redirected to the <br/>main page in a few</p> }
        

        </form>

        <p>
          You don't have an account? <Link to="/signup">Register</Link>
        </p>
        <p>developer: Evan Mwaura</p>
      </div>
    </div>
  );
};

export default LogIn;
