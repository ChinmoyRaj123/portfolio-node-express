const express = require("express")
const hbs = require("hbs")
const path = require("path")
const app = express()
const port = 4000

//to register partilas
hbs.registerPartials(path.join(__dirname, "../partials"))

//setting view engine to access view folder
app.set("view engine", "hbs")

//to access static folder i.e public
app.use(express.static(path.join(__dirname, "../public")))



app.get('/', (req, res) => {
  res.render("index", { name: "Chinmoy", age: 28, title: "My Portfolio" })
})

app.get('/about', (req, res) => {
  res.render("about", { sex: "Male", height: "5.10", title: "My Portfolio" })
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})