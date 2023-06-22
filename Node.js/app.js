const path = require("node:path")
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

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
    res.render('index')
})

// app.post("/index", (req, res) => {
//     console.log(req.body)
// })

app.listen(3005, () => {
    console.log('server listening on 3005');
})