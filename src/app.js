const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs');
app.set('views', viewPath)

app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render("Index")
})

app.listen(port, () => {
    console.log("Server is up on port : " + port)
})