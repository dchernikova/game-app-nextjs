import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import Wrapper from '../../components/Wrapper';

import Product from './_components/Product';
import SkeletonProduct from './_components/SkeletonProduct';
import Typography from '../../components/Typography';

const ProductDetails = ({ product }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    if (product && product._bodyInit === 404) {
      setError('The requested product is not found.');
    }
  }, [product]);

  return (
    <Wrapper withVerticalPadding>
      {!error ? (
        <>
          {(product && product.id) ? (
            <Product product={product} />
          ) : (
            <SkeletonProduct />
          )}
        </>
      ) : (
        <Typography variant="h4">
          {error}
        </Typography>
      )}
    </Wrapper>
  )
};

Product.propTypes = {
  product: T.object,
};

export default ProductDetails
