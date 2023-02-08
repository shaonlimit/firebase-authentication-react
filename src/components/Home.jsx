import React, { useEffect, useState } from 'react';

import { auth } from '../config/firebase';

const Home = () => {
  const [loggedUser, setLoggedUser] = useState();
  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      setLoggedUser(user.email);
    } else {
      setLoggedUser('you are not logged in');
    }
  }, [user]);

  return (
    <section>
      <h1>User details</h1>
      <h1>{loggedUser}</h1>
    </section>
  );
};

export default Home;
