const express = require('express')
const app = express()

app.get('/sports-list',(req,res) => {
    res.send('this is our sports page api');
})

app.listen(3003,(req,res) => {
    console.log('server is running');
})