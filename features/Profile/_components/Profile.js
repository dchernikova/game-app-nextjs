import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import profile from '../../../public/assets/profile-placeholder.svg';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';
import LogoutButton from '../../../components/Actions/LogoutButton';

import Badges from './Badges';

const Profile = ({ user, categories }) => {
  const { name, email } = user;

  return (
    <Grid
      container
      spacing={4}
    >
      <Grid item xs={12} sm={4}>
        <Image
          src={profile}
          alt={name}
          aspectRatio={[1, 1]}
        />

        <Box marginTop={5}>
          <LogoutButton />
        </Box>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Typography
          variant="h5"
          color="secondary"
          marginBottom={1}
        >
          {name}
        </Typography>

        <Typography>
          {email}
        </Typography>

        <Typography
          variant="body2"
          marginY={4}
        >
          No information given.
        </Typography>

        <Badges categories={categories} />
      </Grid>
    </Grid>
  )
};

export default Profile
