import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Skeleton from '../../../components/Skeleton';
import Typography from '../../../components/Typography';

const SkeletonBadges = () => (
  <Grid
    container
    spacing={2}
  >
    {[...Array(4).keys()].map((item) => (
      <Grid key={item} item xs={6} sm={3}>
        <Box>
          <Typography
            variant="h5"
            component="p"
            color="secondary"
            center
          >
            <Skeleton />
          </Typography>

          <Typography>
            <Skeleton />
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default SkeletonBadges
