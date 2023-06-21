const http = require("node:http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end("Here is the response!");
// });


const server = http.createServer((req, res) => {
    const person = {
        name: "Ammar",
        age: 23
    }

    res.writeHead(200, { "Content-Type": "application/json"});
    res.end(JSON.stringify(person));
})


server.listen(3000, () => {
    console.log("Server listening on port 3000");
})