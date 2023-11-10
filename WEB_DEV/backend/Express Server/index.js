import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>Hello World</h1><p>Aspiring Web and mobile developer</p>")
})
app.get("/contact", (req, res) => {
    res.send("<h1>Hello World</h1><p>Contact No. +63 997 208 8423</p>")
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})