const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});

app.get("/users/:user", (req, res) => {
  res.send(req.params.user);
});

app.post("/new", (req, res) => {
  res.write(`<h1>${req.body.name}</h1>`);
  res.write(`<h2>${req.body.age}</h2>`);
  res.end(`<h2>${req.body.email}</h2>`);
});
app.listen(4444, () => {
  console.log(`server listening on port 4444`);
});
