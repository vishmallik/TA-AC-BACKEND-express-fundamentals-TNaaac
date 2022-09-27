const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

app.use("/admin", (req, res, next) => {
  next("Unauthorised Access");
});
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger("common"));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("username", "vish");
  console.log(req.cookies);
  next();
});

app.get("/", (req, res) => {
  res.send(`<h2>Welcome to express</h2>`);
});

app.get("/about", (req, res) => {
  res.send("My name is qwerty");
});

app.get("/users/:username", (req, res) => {
  let user = req.params.username;
  res.send(`<h1>${user}</h1>`);
});

app.post("/form", (req, res) => {
  let formData = req.body;
  res.json(formData);
});

app.post("/json", (req, res) => {
  let jsonData = req.body;
  res.json(jsonData);
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
  next();
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});
app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
