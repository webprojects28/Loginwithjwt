"use config";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env.DATABASE_URL;
const connectToMongo = async () => {
  try {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;