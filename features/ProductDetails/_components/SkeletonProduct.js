import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Skeleton from '../../../components/Skeleton';
import SkeletonImage from '../../../components/SkeletonImage';
import Typography from '../../../components/Typography';

import SkeletonGallery from './SkeletonGallery';

const SkeletonProduct = () => (
  <>
    <Typography
      variant="h4"
      component="h1"
      marginBottom={4}
    >
      <Skeleton />
    </Typography>

    <Grid
      container
      spacing={4}
    >
      <Grid item xs={12} sm={7}>
        <SkeletonGallery />

        <Typography marginBottom={4}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Typography>
      </Grid>

      <Grid item xs={12} sm={5}>
        <SkeletonImage />

        <Box marginY={4}>
          <Typography marginBottom={1}>
            <Skeleton />
          </Typography>

          <Typography marginBottom={1}>
            <Skeleton />
            <Skeleton />
          </Typography>

          <Typography marginBottom={1}>
            <Skeleton />
            <Skeleton />
          </Typography>

          <Typography>
            <Skeleton />
            <Skeleton />
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </>
);

export default SkeletonProduct
