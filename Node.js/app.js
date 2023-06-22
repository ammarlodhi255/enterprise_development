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
    res.render('index', {platform: "Node.js"})
})

app.get("/products", (req, res) => {
    products = [
        { name: "Macbook Pro M2", price: "600000" },
        { name: "Macbook Air M2", price: "480000" },
        { name: "Macbook Air M1", price: "280000" },
    ]
    res.render("products", { products })
})

app.get('*', (req, res) => {
    res.render('not-found')
})
// app.post("/index", (req, res) => {
//     console.log(req.body)
// })

app.listen(3005, () => {
    console.log('server listening on 3005');
})