// os, path
// const os = require("os");
// const {totalmem, freemem} = require("os");
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.freemem());

// path
// console.log(__dirname);
// console.log(__filename);
const path = require("path");
// console.log(path);
// const extensionName = path.extname("index.html");
// console.log(extensionName);
const joinName = path.join(__dirname + "/views");
console.log(joinName);