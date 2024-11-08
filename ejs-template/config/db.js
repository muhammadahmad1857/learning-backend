require("dotenv").config();

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");
    // console.log(connection);
    return connection;
  } catch (e) {
    console.error("Error connecting to MongoDB:", e.message);
    process.exit(1);
  }
};
module.exports.connectDb = connectDb;
