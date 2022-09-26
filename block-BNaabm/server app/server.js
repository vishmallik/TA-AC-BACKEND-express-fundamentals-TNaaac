const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(4000, () => {
  console.log("server started on port 4000");
});
