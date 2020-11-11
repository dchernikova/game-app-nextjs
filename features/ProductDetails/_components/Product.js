import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Tag from './Tag';
import Gallery from './Gallery';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

import { useCart } from '../../../contexts/Cart';

const StyledBox = styled(Box)`
  margin-bottom: 8px;
`;

const Product = ({ product }) => {
  const { id, name, description, images } = product;

  const router = useRouter();
  const { add, fetchProduct } = useCart();

  const handleAddToCart = () => {
    add(id);
    router.push('/cart');
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        marginBottom={4}
      >
        {name}
      </Typography>

      <Grid
        container
        spacing={4}
      >
        <Grid item xs={12} sm={7}>
          <Gallery images={images.gamePreview} />

          <Typography marginBottom={4}>
            {description}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Image
            src={images.main}
            alt={name}
          />

          <Box marginY={4}>
            <StyledBox display="flex">
              <Typography
                color="secondary"
                marginRight={1}
                uppercase
              >
                Release date
              </Typography>

              <Typography>
                Feb 25, 2014
              </Typography>
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Developers
              </Typography>

              <Tag label="Eidos Montreal" />
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Publishers
              </Typography>

              <Tag label="Square Enix" />
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Genres
              </Typography>

              <Tag label="Action" />
              <Tag label="Adventure" />
            </StyledBox>
          </Box>
        </Grid>
      </Grid>

      <Grid align="right">
        {fetchProduct(id) ? (
          <Button
            href="/cart"
            size="large"
            color="secondary"
            variant="contained"
          >
            In Cart
          </Button>
        ) : (
          <Button
            size="large"
            color="secondary"
            variant="contained"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </Grid>
    </>
  )
};

Product.propTypes = {
  product: T.shape({
    id: T.number,
    name: T.string,
    description: T.string,
    images: T.shape({
      main: T.string,
      preview: T.arrayOf(T.string),
    }),
  }),
};

export default Product
