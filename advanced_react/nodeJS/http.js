const http = require("node:http");

// SEND A PLAIN TEXT RESPONSE
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end("Here is the response!");
// });

// SEND A JSON RESPONSE
// const server = http.createServer((req, res) => {
//     const person = {
//         name: "Ammar",
//         age: 23
//     }

//     res.writeHead(200, { "Content-Type": "application/json"});
//     res.end(JSON.stringify(person));
// })

// SEND A HTML RESPONSE
const path = require("node:path");
const fs = require("node:fs")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
    res.end(html);
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
})