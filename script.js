const express = require("express");
const app = express();

/* 
<---Code for Dynamic routing--->
app.get("/profile", (req, res) => {
  res.send("Hello shahid");
});
app.get("/profile/:username", (req, res) => {
  res.send(`hello my name is ${req.params.username}`);
});
*/

/*
This is dynamic routing
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { age: 21 });
});
*/

app.listen(3000);
