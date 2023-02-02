const express = require("express")
const path = require("path")
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'))
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})