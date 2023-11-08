const fs = require("fs")


// fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
//     if (err) throw error;
//     console.log("file is saved!")
// })

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw error;
    console.log(data)
})