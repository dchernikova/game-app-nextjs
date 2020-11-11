import React from 'react';
import T from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

const Product = ({ product, handleRemoveItem }) => {
  const { name, price, images } = product;

  return (
    <Grid
      container
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} sm={3}>
        <Image
          src={images.main}
          alt={name}
        />
      </Grid>

      <Grid item xs={6}>
        <Typography bold>
          {name}
        </Typography>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Box align="right">
          <Typography
            right
            marginBottom={1}
          >
            {price}
          </Typography>

          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={handleRemoveItem}
          >
            Remove
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
};

Product.propTypes = {
  product: T.shape({
    name: T.string,
    price: T.string,
    images: T.shape({
      main: T.string,
      preview: T.string,
    }),
  }),
  handleRemoveItem: T.func,
};

export default Product
