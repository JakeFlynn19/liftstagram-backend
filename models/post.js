const mongoose = require("mongoose");
const posts = require("../controllers/posts");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    uid: String,
    exercise: String,
    sets: String,
    reps: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);