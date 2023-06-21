const fs = require("node:fs");
const path = require("node:path");

const filePath = 'D:\\University Files\\Assignments\\8th Semester\\Enterprise Development\\advanced_react\\nodeJS\\txt_files\\some_text.txt';
const fileContentsSync = fs.readFileSync(filePath, "utf-8");
console.log(fileContentsSync);

const fileContentsAsync = fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

fs.writeFileSync(path.join(__dirname, "txt_files", "greetUser.txt"), "Hello User!");

fs.writeFile(
    path.join(__dirname, "txt_files", "greetUser.txt"),
    " Welcome to Learning NodeJS",
    { flag: "a" },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File has been written successfully!")
        }
    }
)