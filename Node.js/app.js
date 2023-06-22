const path = require("node:path")
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/obj', (req, res) => {
    res.json({
        name: "Ammar",
        age: 23,
        occupation: "R&D"
    });
})

app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(3005, () => {
    console.log('server listening on 3005');
})