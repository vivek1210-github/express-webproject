const path = require('path')
const express = require('express')
const { static } = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, "public")
const template = path.join(__dirname, "templates", "views")
const partials = path.join(__dirname, "templates", "partials")


app.use(express.static(staticPath))

app.set('view engine', 'hbs')
app.set('views', template)

hbs.registerPartials(partials)

//app.use('/about', express.static(staticPath+"/about.html"))

// app.get('', (req, res) => {
//   res.render(index)
// })

app.get('/about', (req, res) => {
   res.render('about')
})

app.get('/weather', (req, res) => {
  res.send('Welcome to weather thapa technical')
})

app.get('*', (req, res) => {
  res.send('404 Page Not Found')
})

app.listen(port, () => {
  console.log(`listening to port no ${port}`)
})