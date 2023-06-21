const fs = require("node:fs");
const path = require("node:path");

const readableStream = fs.createReadStream(
    path.join(__dirname, "txt_files", "some_text.txt"),
    { encoding: "utf-8", highWaterMark: 64 },
)

const writableStream = fs.createWriteStream(path.join(__dirname, "txt_files", "copy_some_text.txt"));

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});



