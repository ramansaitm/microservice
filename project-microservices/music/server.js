const express = require('express')
const app = express()

app.get('/music-list',(req,res) => {
    res.send('this is our music page api');
})

app.listen(3002,(req,res) => {
    console.log('server is running');
})