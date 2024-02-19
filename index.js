require('dotenv').config()
const express = require('express')

const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login' , (req, res) => {
    res.send('<h1> please login at vimal.com</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})