const express = require:any("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world mosmit");
});

app.listen(5000);
