const express = require("express");
const app = express();
const morgan = require("morgan");
const dbConnection = require("./config/db");
const userModel = require("./models/user");

const port = 5488;
const connection = dbConnection.connectDb();

// Third party middleware
app.use(morgan("dev"));
app.set("view engine", "ejs");
// buit in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// Three Types of middleware
// 1: Custom Middleware
// 2: Built in Middleware
// 3: Third Party Middleware

// Custom Middleware
app.use((req, res, next) => {
  console.log("This is middlerware");
  return next();
});

// middleware for specific route
app.get(
  "/",
  //   (req, res, next) => {
  //     console.log("This is a middleware for specific route");
  //     return next();
  //   },
  (req, res) => {
    res.render("index");
  }
);
// middleware for specific route
app.get(
  "/about",
  //   (req, res, next) => {
  //     console.log("This is a middleware for about route");
  //     return next();
  //   },
  (req, res) => {
    res.send("about");
  }
);

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Form Data Received");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
