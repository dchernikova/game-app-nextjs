import React, { useEffect, useState } from 'react';

import Profile from '../features/Profile';

const ProfilePage = () => {
  const [categories, setCategories] = useState();
  const [favoriteProducts, setFavoriteProducts] = useState();

  useEffect(() => {
    fetch('/api/profile-categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));

    fetch('/api/favorite-products')
      .then((res) => res.json())
      .then((res) => setFavoriteProducts(res));
  }, []);

  return (
    <Profile
      categories={categories}
      favoriteProducts={favoriteProducts}
    />
  )
};

export default ProfilePage
