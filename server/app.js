const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const connection = require("./db.js")

const PORT = process.env.PORT || 3000;
connection()

app.use("/", (req, res) => {
    res.send("Hello World From Express Js")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
