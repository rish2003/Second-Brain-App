const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("Hello World From Express Js")
})

const port = 3000;
app.listen(port);