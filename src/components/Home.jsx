import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const Home = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState();
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      setLoggedUser(user.email);
    } else {
      setLoggedUser('you are not logged in');
    }
  }, [user]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <section>
      <h1>User details</h1>
      <h1>{loggedUser}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </section>
  );
};

export default Home;
