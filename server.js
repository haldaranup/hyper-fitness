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


const port=process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Application is Listening to port ${port}`);
});
