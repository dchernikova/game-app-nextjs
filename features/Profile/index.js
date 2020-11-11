import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import Wrapper from '../../components/Wrapper';

import ProfileComponent from './_components/Profile';
import SkeletonProfile from './_components/SkeletonProfile';

import FavoriteProducts from '../FavoriteProducts';

import { useAuthentication } from '../../contexts/Authentication';

const Profile = ({ categories, favoriteProducts }) => {
  const { user, fetchUser } = useAuthentication();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Wrapper withVerticalPadding>
      <Grid
        container
        spacing={4}
      >
        <Grid item xs={12} md={7}>
          {user ? (
            <ProfileComponent
              user={user}
              categories={categories}
            />
          ) : (
            <SkeletonProfile />
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <FavoriteProducts products={favoriteProducts} />
        </Grid>
      </Grid>
    </Wrapper>
  )
};

export default Profile
