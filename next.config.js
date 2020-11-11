const withImages = require('next-images');

const prod = process.env.NODE_ENV === 'production';

module.exports = withImages({
  basePath: prod ? '/game-app-nextjs' : '',
  assetPrefix: prod ? '/game-app-nextjs/' : '',
});
