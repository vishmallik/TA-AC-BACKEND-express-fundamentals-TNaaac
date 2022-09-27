const express = require("express");
const fs = require("fs");

const app = express();

//middleware like morgan
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toLocaleTimeString());
  next();
});

//middleware like express.json()
app.use((req, res, next) => {
  let store = "";
  let acc = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    req.body = store;
  });
  next();
});

//middleware like express.static()
app.use("/", (req, res, next) => {
  fs.readFile(__dirname + "/public" + req.url, (err, content) => {
    if (content) {
      res.end(content);
    } else {
      next();
    }
  });
});

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/users", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(req.body);
});

app.listen(5000, () => console.log(`server listening on port 5000`));
