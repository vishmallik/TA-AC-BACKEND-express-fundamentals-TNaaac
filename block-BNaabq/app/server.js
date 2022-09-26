const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.get("/about", (req, res) => {
  res.cookie("username", "vish");
  res.end();
});
app.listen("4000", () => {
  console.log(`server listening on port 4k`);
});
