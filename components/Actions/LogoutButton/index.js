import React from 'react';
import { useRouter } from 'next/router';

import { GoogleLogout } from 'react-google-login';

import Button from '@material-ui/core/Button';

import { useAuthentication } from '../../../contexts/Authentication';

const LogoutButton = () => {
  const router = useRouter();
  const { removeUser } = useAuthentication();

  const handleLogout = () => {
    removeUser();
    router.push('/');
  };

  return (
    <GoogleLogout
      clientId="153231177102-ogdiu0sjtjhrul8e1nst0jkl3jhnterb.apps.googleusercontent.com"
      onLogoutSuccess={handleLogout}
      render={renderProps => (
        <Button
          fullWidth
          size="large"
          color="secondary"
          variant="contained"
          onClick={renderProps.onClick}
        >
          Log out
        </Button>
      )}
    />
  )
};

export default LogoutButton
