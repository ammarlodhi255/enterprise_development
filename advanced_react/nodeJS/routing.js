const path = require("node:path");
const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("HELLO WORLD!")
    } else if (req.url === "/index") {
        res.writeHead(200, {"Content-Type": "text/html"});
        const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
        res.end(html);
    } else {
        res.writeHead(404);
        res.end("PAGE NOT FOUND!");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})