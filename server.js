const express = require("express");
const app = express();
//const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3000;

app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));
