require("dotenv").config();

const env = {
  port: process.env.PORT || 5000,
  mongoUrl: process.env.MONGO_URI,
};

module.exports = env;