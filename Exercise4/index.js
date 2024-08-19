const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const data={
    "Course":"Full stack development",
    "Mode":"FUll time",
    "Duration":"45 hrs",
    "Embedded":"Yes",
    "Core paper":"No"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("datarender.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});