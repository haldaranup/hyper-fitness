const mongoose = require("mongoose");
const env = require("./env");
require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose
  .connect(env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.error("error: ", error.message);
  });

const db = mongoose.connection;

module.exports = db;
