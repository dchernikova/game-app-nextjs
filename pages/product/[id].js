import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProductDetails from '../../features/ProductDetails';

const ProductPage = () => {
  const [product, setProduct] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/product/${id}`)
        .then((res) => res.json())
        .then((res) => setProduct(res));
    }
  }, [id]);

  return <ProductDetails product={product} />
};

export default ProductPage
