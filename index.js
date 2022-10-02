const express = require("express");
const app = express();
const data = require("./data.json");

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("This is an API");
});

app.get("/worker", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening server on http://localhost:${port}`);
});
