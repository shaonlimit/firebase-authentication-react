import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div>
      <h1>Firebase Authentication in React</h1>
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
        <button onClick={onSubmit} type='submit'>
          Sign up
        </button>
      </form>
      <p>Already have an account</p>
      <NavLink to='/login'>Sign in</NavLink>
    </div>
  );
};

export default Signup;
