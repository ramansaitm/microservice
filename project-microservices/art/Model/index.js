//we create here a Schema for uploading data in mongoose database
const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  External_link: {
    type: String,
  },
  Description: {
    type: String,
    minLength: 10,
  },
  status: {
    default: false,
  },
  Collection: {
    type: String,
  },
  type: {
    default: false,
  },

  add_tag: {
    type: String,
  },
});

module.exports = mongoose.model("Project", PostSchema);
