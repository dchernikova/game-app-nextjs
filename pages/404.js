import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Link from '../components/Link';
import Wrapper from '../components/Wrapper';
import Typography from '../components/Typography';

const NotFoundPage = () => (
  <Wrapper withVerticalPadding>
    <Typography
      marginBottom={2}
      variant="h1"
      center
      bold
    >
      404
    </Typography>

    <Typography
      marginBottom={2}
      variant="h4"
      center
    >
      Whoops...!
    </Typography>

    <Typography
      marginBottom={2}
      center
    >
      Sorry, we are not able to find what you were looking for
    </Typography>

    <Grid align="center">
      <Button
        href="/"
        size="large"
        color="secondary"
        variant="contained"
        component={Link}
      >
        Back to home
      </Button>
    </Grid>
  </Wrapper>
);

export default NotFoundPage
