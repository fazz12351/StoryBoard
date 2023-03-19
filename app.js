//jshint esversion:6
let allMessages = [];
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


let message1 = {
  "MessageTitle": "Welcome",
  Message: "This is an area for you to express  your emotions, i promise to keep it all a secret. Guess What? I also have secrets where i need to write them down. Why not try it? :)"
}

const app = express();

allMessages.push(message1)
allMessages.push(message1)


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



app.get("/", function (req, res) {
  res.redirect("/Home")
 
})




app.get("/about", function (req, res) {
  res.render("about", {
    allMessages: allMessages

  })
})

app.get("/contact", function (req, res) {
  res.render("contact", {
    allMessages: allMessages

  })
})


app.get("/compose", function (req, res) {
  res.render("compose", {

  })
})

app.post("/ComposeMessage", function (req, res) {
  allMessages.push(req.body)
  res.redirect("/")
})



app.listen(3000, function () {
  console.log("Server started on port 3000");
});

function checkMessages() {
  if (allMessages.length > 1) {
    allMessages.splice(0, 1)
  }
}
app.get("/Home", function (req, res) {
  // checkMessages();
  res.render("home", {
    allMessages: allMessages

  })
})

console.log(allMessages)
