const express = require("express")
const path = require("path")
const app = express()
const port = 4000

app.set("view engine", "hbs")

app.get('/', (req, res) => {
  res.render("index", { name: "Chinmoy", age: 28 })
})

app.get('/about', (req, res) => {
  res.render("about", { sex: "Male", height: "5.10" })
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})