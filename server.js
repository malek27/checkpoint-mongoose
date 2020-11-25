const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRoute = require("./middelware/user");
require("dotenv/config");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("hello you're Home");
});

app.use("/Users", usersRoute);

//connecting to data base

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to DB!");
  }
);


//creating a server
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("Server is runnig..")
);
