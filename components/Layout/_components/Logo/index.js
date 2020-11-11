import React from 'react';

import Link from '../../../Link';
import Typography from '../../../Typography';

const Logo = () => (
  <Link href="/">
    <Typography
      variant="h5"
      component="span"
      color="secondary"
      uppercase
    >
      Games Search
    </Typography>
  </Link>
);

export default Logo
