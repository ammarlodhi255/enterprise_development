const path = require("node:path")
const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const Product = require('./models/Product')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017", {dbName: "StudentDB", useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected")
    })
    .catch((err) => {
        console.log(err)
    });

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.json())

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get("/index", (req, res) => {
    res.render('index', {platform: "Node.js"})
})

app.get('/obj', (req, res) => {
    res.json({
        name: "Ammar",
        age: 23,
        occupation: "R&D"
    });
})

app.post("/product/save", async (req, res) => {
    const product = await Product.create(req.body);
    if (!product || err)
        return res.redirect('/product/new')
    res.redirect('/products')
})

app.get("/product/new", (req, res) => {
    res.render("new-product");
})

app.get("/products", async (req, res) => {
    // const products = [
    //     { name: 'Macbook Pro M2 14"', price: "605000" },
    //     { name: 'Macbook Pro M2 16"', price: "669000" },
    //     { name: "Macbook Air M2", price: "480000" },
    //     { name: "Macbook Air M1", price: "280000" },
    // ]
    const products = await Product.find()
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