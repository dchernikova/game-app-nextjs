const presets = ['next/babel'];
const plugins = [
  ['babel-plugin-styled-components', { 'ssr': true, 'displayName': false, 'preprocess': false }],
];

module.exports = { presets, plugins };
