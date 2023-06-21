const path = require("node:path");

console.log(path.basename(__filename))
console.log(path.basename(__dirname))
console.log(path.isAbsolute(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.join("//folder1", "//folder2", "index"))
console.log(path.resolve("//folder1", "folder2", "index"))