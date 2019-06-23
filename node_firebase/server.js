const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

//app.use(bodyParser.urlencoded({ extend: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/createEst', function (req, res) {
  console.log(req.body)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
