/*
?not using express here --purple
!const http = require("http"); this uses http from node modules
//const fs = require("fs");
//const index = fs.readFileSync("index.html");
!const server = http.createServer((req --requested url , res --the response) => {
!  console.log(req.url); prints all things after back slash in the url
!  res.end(index); prints this on screen 
!});
!server.listen(3000);  --no change on this line
*/
const path = require("path"); //?used for giving absolute path to the program in all platforms
const express = require("express"); //?using express in the js
const app = express(); //!calls the express app
const ejs = require("ejs"); //calls ejs
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_database", { useNewParser: true });
app.set("view engine", "ejs"); //!this sets the default rendering files for ejs files to ejs
app.use(express.static("public")); //!defines the folder for all the attachment files
//?uses public folder to search files
app.listen(1234, () => {
  console.log("the app is on port 1234");
});
app.get("/api", (req, res) => {
  res.json({
    api: "arnavgupta.net",
  });
});
app.get("/", (req, res) => {
  /*//  res.sendFile(path.resolve(__dirname, "index.html"));*/
  //? it sends the file index.html along as resolved and absolute path --used in case of no rendering engine
  res.render("index");
});
