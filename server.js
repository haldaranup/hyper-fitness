const express = require("express");
const db = require("./configs/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user.route");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoute);

db.once("open", () => {
  console.log("Connected to DB");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening to port 5000");
});
