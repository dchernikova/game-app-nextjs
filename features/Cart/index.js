import React, { useEffect, useMemo } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Wrapper from '../../components/Wrapper';
import Typography from '../../components/Typography';
import Link from '../../components/Link';

import Product from './_components/Product';
import SkeletonCart from './_components/SkeletonCart';

import { useCart } from '../../contexts/Cart';

const Cart = () => {
  const { cart, fetchCart, remove, removeAll } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemoveItem = (id) => remove(id);
  const handleRemoveAllItems = () => removeAll();

  const estimatedTotal = useMemo(() => (
    !cart ? 0 : (cart.map((item) => +item.price.replace(/^\D+/g, '')).reduce((a, b) => a + b, 0).toFixed(2))
  ), [cart]);

  return (
    <Wrapper withVerticalPadding>
      {cart ? (
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              component="h1"
              marginBottom={4}
            >
              Your Shopping Cart
            </Typography>

            {cart.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleRemoveItem={() => handleRemoveItem(product.id)}
              />
            ))}

            <Box
              display="flex"
              marginY={4}
            >
              <Typography
                bold
                marginRight="auto"
              >
                Estimated total
              </Typography>

              <Typography>
                ${estimatedTotal}
              </Typography>
            </Box>

            {cart.length !== 0 && (
              <Box
                align="right"
                marginY={4}
              >
                <Button
                  href="/"
                  size="large"
                  color="secondary"
                  variant="contained"
                  component={Link}
                >
                  Purchase
                </Button>
              </Box>
            )}

            <Grid
              container
              justify="space-between"
            >
              <Box marginY={1}>
                <Button
                  href="/"
                  size="large"
                  variant="contained"
                  component={Link}
                >
                  Continue Shopping
                </Button>
              </Box>

              {cart.length !== 0 && (
                <Box marginY={1}>
                  <Button
                    size="large"
                    color="secondary"
                    variant="outlined"
                    onClick={handleRemoveAllItems}
                  >
                    Remove all items
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <SkeletonCart />
      )}
    </Wrapper>
  )
};

export default Cart
