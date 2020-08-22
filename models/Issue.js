const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostIssue = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ISSUE = mongoose.model("issue", PostIssue);
