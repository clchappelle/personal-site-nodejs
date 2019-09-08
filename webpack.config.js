const path = require('path');

module.exports = {
  entry: './src/scripts.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'scripts.bundle.js'
  },
  mode: 'production'
};
