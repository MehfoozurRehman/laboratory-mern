const router = require("express").Router();
const userModel = require("../models/user.js");

router.post("/register", (req, res) => {
  const { orgnization, name, email, password } = req.body;
  userModel({
    orgnization: orgnization,
    name: name,
    email: email,
    password: password,
  });
});

router.post("/login", (req, res) => {});

module.exports = router;
