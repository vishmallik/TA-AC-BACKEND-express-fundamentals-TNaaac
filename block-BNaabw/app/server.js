const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("Hello", "Cookie");
  next();
});

//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/error.html", (req, res) => {
  res.sendFile(__dirname + "/error.html");
});

app.get("/pricing.html", (req, res) => {
  res.sendFile(__dirname + "/pricing.html");
});

app.get("/services.html", (req, res) => {
  res.sendFile(__dirname + "/services.html");
});

app.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

//error handling middlewares
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/error.html");
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(4000, () => console.log(`server listening on port 4000`));
