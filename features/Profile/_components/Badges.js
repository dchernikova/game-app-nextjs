import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from '../../../components/Typography';

const Badges = ({ categories = [] }) => (
  <Grid
    container
    spacing={2}
  >
    {categories.map(({ name, number }) => (
      <Grid key={name} item xs={6} sm={3}>
        <Box display="inline-block">
          <Typography
            variant="h5"
            component="p"
            color="secondary"
            center
          >
            {number}
          </Typography>

          <Typography>
            {name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Badges
