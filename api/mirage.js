import { createServer } from 'miragejs'

import productsAPI from './index';

import { categories } from '../data/profileCategories';

const makeServer = ({ environment } = {}) => {
  return createServer({
    environment,

    routes() {
      this.passthrough('/game-app-nextjs/**');
      this.passthrough('/_next/static/development/_devPagesManifest.json');

      this.timing = 1000;
      this.namespace = 'api';

      this.get('/profile-categories', () => categories);

      this.get('/product/:id', (schema, request) => {
        const id = request.params.id;
        const product = productsAPI.fetchProduct(id);

        if (product) {
          return product
        } else {
          return new Response(404);
        }
      });

      this.get('/top-products', () => productsAPI.fetchProducts());
      this.get('/special-products', () => productsAPI.fetchProducts());
      this.get('/favorite-products', () => productsAPI.fetchProducts().slice(0, 3));
      this.get('/discount-products', () => productsAPI.fetchProducts());
      this.get('/featured-products', () => productsAPI.fetchProducts());
    },
  })
};

export default makeServer
