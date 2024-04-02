const express = require("express");
const app = express();
const cors = require("cors");
var cookieParser = require("cookie-parser");
const connectToMongo = require("./connectdb");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

const UserRouter = require("./Routes/User");

//using routes as a middleware
app.use("/", UserRouter);
//middleware

//Routes

//Database connection
connectToMongo();

//how to we start listening to the server
app.listen(8000);
