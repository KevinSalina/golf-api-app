const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())


app.get('/', (req, res) => {

})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})