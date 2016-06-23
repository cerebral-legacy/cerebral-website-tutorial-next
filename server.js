const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const app = express()
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8080
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware)
}
app.use(bodyParser.json())

const items = []

app.get('/items', function (req, res) {
  res.send(items)
})

var failCount = 0
app.post('/items', function (req, res) {
  failCount++
  var shouldFail = false
  if (failCount === 3) {
    shouldFail = true
    failCount = 0
  }

  setTimeout(function () {
    if (shouldFail) {
      res.sendStatus(500)
    } else {
      const item = {
        id: String(items.length),
        title: req.body.title
      }
      items.unshift(item)
      res.send(item)
    }
  }, 1000)
})

app.listen(port, function () {
  console.log('Running server on port ' + port)
})
