const express = require('express')
const app = express()
const port = 3000
const memeList = require("./memeResources")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/meme', (req, res) => {
    const list = [...memeList];
    const randomIndex = Math.floor(Math.random() * list.length);
    res.send(`<img src="${list[randomIndex]}">`)
});

app.listen(port, () => {
    console.log("Running on port 3000");
})