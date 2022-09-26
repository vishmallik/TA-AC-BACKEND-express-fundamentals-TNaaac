const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post("/json", (req, res) => {
  console.log(req.body);
  res.send("request received");
});
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("form received");
});

app.use(express.static(__dirname + "/public"));

app.listen(5000, () => {
  console.log(`server listening on port 5k`);
});
