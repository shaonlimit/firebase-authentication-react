import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/home');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <form action=''>
        <div className='signup-email'>
          <label htmlFor='email-address'>Email adress:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='email'
            id='email-address'
            placeholder='Email address'
          />
        </div>
        <div className='signup-password'>
          <label htmlFor='password'>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <button onClick={onLogin} type='submit'>
          Log in
        </button>
      </form>
      <p>Don't have an account?</p>
      <NavLink to='/signup'>Sign up</NavLink>
    </div>
  );
};

export default Login;
