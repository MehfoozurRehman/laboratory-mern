const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  orgnization: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("report", reportSchema);
