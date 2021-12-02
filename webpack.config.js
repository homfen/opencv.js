module.exports = {
  entry: {
    index: './src/opencv.js'
  },
  output: {
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.json', '.ts', '.tsx'],
    fallback: {
      fs: false,
      path: false,
      crypto: false
    }
  }
};
