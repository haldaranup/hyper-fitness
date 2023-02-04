const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.error("error: ", error.message);
  });

const db = mongoose.connection;

module.exports = db;
