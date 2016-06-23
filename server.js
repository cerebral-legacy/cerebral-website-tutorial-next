const express = require('express')
const webpackMiddleware = require('webpack-dev-middleware')
const app = express()
const webpackConfig = require('./webpack.config')
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 8080
const bodyParser = require('body-parser')

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackMiddleware(webpackConfig))
}
app.use(bodyParser.json())

const items = []

app.get('/items', function (req, res) {
  res.send(items)
})

app.post('/items', function (req, res) {
  const shouldFail = Math.random() > 0.5

  if (shouldFail) {
    res.status(500)
  } else {
    const item = {
      id: String(items.length),
      title: req.body.title
    }
    items.unshift(item)
    res.send(item)
  }
})

app.listen(port, function () {
  console.log('Running server on port ' + port)
})
