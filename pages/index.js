import React, { useState, useEffect } from 'react';

import Section from '../components/Section';
import Skeleton from '../components/Skeleton';

import SliderMain from '../features/SliderMain';
import SliderProducts from '../features/SliderProducts';

const HomePage = () => {
  const [topProducts, setTopProducts] = useState();
  const [specialProducts, setSpecialProducts] = useState();
  const [discountProducts, setDiscountProducts] = useState();
  const [featuredProducts, setFeaturedProducts] = useState();

  useEffect(() => {
    fetch('/api/top-products')
      .then((res) => res.json())
      .then((res) => setTopProducts(res.slice(0, 4)));

    fetch('/api/special-products')
      .then((res) => res.json())
      .then((res) => setSpecialProducts(res));

    fetch('/api/discount-products')
      .then((res) => res.json())
      .then((res) => setDiscountProducts(res));

    fetch('/api/featured-products')
      .then((res) => res.json())
      .then((res) => setFeaturedProducts(res));
  }, []);

  return (
    <>
      <SliderMain slides={topProducts} />

      <Section title="Featured & Recommended">
        {featuredProducts && (<SliderProducts slides={featuredProducts} />)}
      </Section>

      <Section title="Special Offers">
        {specialProducts && (<SliderProducts slides={specialProducts} />)}
      </Section>

      <Section title="Under $10 USD">
        {discountProducts && (<SliderProducts slides={discountProducts} />)}
      </Section>
    </>
  )
};

export default HomePage
