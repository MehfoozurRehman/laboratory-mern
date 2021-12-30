const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth.js");

// api config
const app = express();
const port = 9000;

// middleware
app.use(express.json());
app.use(cors());

// db config
const connection_url =
  "mongodb+srv://admin:admin123@cluster0.a5jx7.mongodb.net/labData?retryWrites=true&w=majority";
mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db connected");
  }
);

// api endpoints
app.get("/", (req, res) => {
  res.json({
    message: "app working hello",
  });
});

app.use("/auth", authRouter);

// api listen
app.listen(port, () => {
  console.log("api working");
});
