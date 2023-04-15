//imports
const express = require("express");
const db = require("./config/mongoose");
const sassMiddleware = require("node-sass-middleware");

const PORT = 4000;

const app = express();
//setting up sass middleware
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: false,
    outputStyle: "extended",
    prefix: "/css",
  })
);

//setting up view engines and views
app.set("view engine", "ejs");
app.set("views", "./views");

//using middleware for static assests and reading information
app.use(express.urlencoded());
app.use(express.static("assets"));

//setting up routes
app.use("/", require("./routes"));

//staring the server
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error in seeting up the server${err}`);
  }
  console.log(`Server is up and running on the port ${PORT}`);
});
