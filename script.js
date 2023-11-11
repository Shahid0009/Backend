const express = require('express');
const app = express();


app.get('/', (req, res) => {
res.send('Hello world')
})
app.get('/profile', (req, res) => {
    res.send('Hello shahid')
    })
app.get('/profile/:username', (req, res) => {
res.send(`hello my name is ${req.params.username}`)
})

app.listen(3000);