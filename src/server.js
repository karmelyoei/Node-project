const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public"))); // get all the urls inside the html inside the public

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.post("/", (req, res) => {
  const name = req.body.inputValue;
  console.log(name);
  res.sendFile(path.join(__dirname, "..", "public", "index.html"), {
    name: name
  });
});

// create a 404 middleware sending the '404.html' file
app.use((req, res) => {
  res.send("404 page Not found");
});

// create a 500 middleware sending the '500.html' file
app.use((err, req, res, next) => {
  if (err) res.send("500 there is error in the code");
});

app.listen(3000, () => {
  console.log("the server is working");
});
