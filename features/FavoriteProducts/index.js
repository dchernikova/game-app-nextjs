import React from 'react';
import T from 'prop-types';

import Skeleton from '../../components/Skeleton';
import Typography from '../../components/Typography';

import Product from './_components/Product';
import SkeletonProduct from './_components/Skeleton';

const FavoriteProducts = ({ products }) => (
  <>
    <Typography
      variant="h5"
      color="secondary"
      marginBottom={3}
    >
      {products && products.length !== 0 ? (
        'Favorite Games'
      ) : (
        <Skeleton />
      )}
    </Typography>

    {products && products.length !== 0 ? (
      <>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </>
    ) : (
      <>
        {[...Array(3)].map((item, i) => (
          <SkeletonProduct key={i} />
        ))}
      </>
    )}
  </>
);

FavoriteProducts.propTypes = {
  products: T.array,
};

export default FavoriteProducts
