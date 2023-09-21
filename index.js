const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! from raju')
})
app.get('/hello', (req, res) => {
    res.send('Hello World! from')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})