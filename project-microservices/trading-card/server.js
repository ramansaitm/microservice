const express = require('express')
const app = express()

app.get('/trading-card-list',(req,res) => {
    res.send('this is our trading-card page api');
})

app.listen(3004,(req,res) => {
    console.log('server is running');
})