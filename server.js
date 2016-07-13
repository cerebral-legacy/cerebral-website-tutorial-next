const express = require('express')
const app = express()
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3001
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const items = []

app.get('/api/items', function (req, res) {
  res.send(items)
})

var failCount = 0
app.post('/api/items', function (req, res) {
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
