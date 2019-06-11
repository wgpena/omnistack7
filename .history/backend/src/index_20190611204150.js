const express = require('express')
const mongoose = require('mongoose')

const app = express()

const conn = mongoose.connect('mongodb+srv://wgpena:wg0134@cluster0-qilrv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.listen(3000)



