const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()
const port = 4000

hbs.registerPartials(path.join(__dirname, "../partials"))

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