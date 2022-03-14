const express = require('express')
const app = express()

app.get('/game-list',(req,res) => {
    res.send('this is our game page api');
})

app.listen(3001,(req,res) => {
    console.log('server is running');
})