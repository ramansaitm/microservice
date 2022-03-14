const express = require('express')
const app = express()

app.get('/utility-list',(req,res) => {
    res.send('this is our utility page api');
})

app.listen(3005,(req,res) => {
    console.log('server is running');
})