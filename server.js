const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function allGet(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
/* eslint-disable no-console  */
app.listen(port, 'localhost', function startListening(err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost: ' + port);
  /* eslint-enable no-console  */
});
