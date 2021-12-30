const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  orgnization: {
    type: String,
    required: true,
  },
  id: { type: Number, required: true },
  name: { type: String, required: true },
  relative: {
    type: String,
    required: true,
  },
  marital_status: {
    type: String,
    required: false,
  },
  cnic: {
    type: String,
    required: false,
  },
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
});

module.exports = new mongoose.model("user", userSchema);
