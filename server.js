const express = require("express");
const db = require("./configs/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

db.once("open", () => {
  console.log("Connected to DB");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening to port 5000");
});
