const express = require("express");
const app = express();
const port = 5488;
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
