import React, { useContext, useEffect, useState } from 'react';

import storage from '../storage';

const AuthenticationContext = React.createContext({});

const AuthenticationProvider = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState(storage.getItem('user') || {});
  }, []);

  return (
    <AuthenticationContext.Provider value={[state, setState]}>
      {props.children}
    </AuthenticationContext.Provider>
  )
};

const useAuthentication = () => {
  const [state, setState] = useContext(AuthenticationContext);

  const fetchUser = () => setState(storage.getItem('user'));

  const user = state;

  const setUser = (user) => {
    storage.setItem('user', user);
    fetchUser();
  };

  const removeUser = () => {
    storage.removeItem('user');
    fetchUser();
  };

  const isLogged = user && Object.keys(user).length !== 0;

  return ({
    user,
    setUser,
    removeUser,
    fetchUser,
    isLogged,
  })
};

export { AuthenticationProvider, useAuthentication }
