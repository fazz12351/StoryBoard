//jshint esversion:6
let posts = [];
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//create a express app
const app = express();

//we allow ejs files to be executed
app.set('view engine', 'ejs');

//we allow our bodyparser backage get user data
app.use(bodyParser.urlencoded({
  extended: true
}));
//we allow express to use our static pages found in public
app.use(express.static("public"))



//this is the inital data sent to the array which displays all messages called posts and push the message in that
let message1 = {
  "MessageTitle": "Welcome",
  Message: "This is an area for you to express  your emotions, i promise to keep it all a secret. Guess What? I also have secrets where i need to write them down. Why not try it? :)"
}
posts.push(message1)


;


//Initial page
app.get("/", function (req, res) {
  checkMessages();
  res.render("home", {
    allMessages: posts

  })

})



//about page
app.get("/about", function (req, res) {
  res.render("about", {
    allMessages: posts

  })
})

//contact page
app.get("/contact", function (req, res) {
  res.render("contact", {
    allMessages: posts

  })
})

//compose page
app.get("/compose", function (req, res) {
  res.render("compose", {

  })
})

//compose directory. When we submit data from the form, data is passes and retrieved here and we store in into and object which is then pushed into an array
app.post("/ComposeMessage", function (req, res) {
  let data = {
    MessageTitle: req.body.MessageTitle,
    Message: req.body.Message

  }
  posts.push(data)
  res.redirect("/")
})

app.get("/posts/:postName", function (req, res) {
  let paramsToLower = req.params.postName.toLowerCase()


  for (let i = 0; i < posts.length; i++) {
    let titleToLower = posts[i].MessageTitle.toLowerCase();
    console.log(titleToLower)
    if (req.params.postName == posts[i].MessageTitle) {
      res.render("dynamic",{
        Person:req.params.postName
      })
    }

  }


})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});


///////////////////////////////////////////////-----------------------------------------------------/////////////////////////////
function checkMessages() {
  if (posts.length > 1) {
    posts.splice(0, 1)
  }
}

