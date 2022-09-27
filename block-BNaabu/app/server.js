const express = require("express");

const app = express();
app.get("/admin", (req, res, next) => {
  next("Unauthorized access");
});

app.get("/", (req, res) => {
  res.send("Welcome to express server");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.use((req, res, next) => {
  res.send("Page Not found");
  next();
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4444, () => {
  console.log(`server listening on port 4444`);
});
