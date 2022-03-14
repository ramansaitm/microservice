const Project = require("../Model/index");
const fs = require("fs");

exports.getPosts = (req, res) => {
  const posts = Project.find()
    .then((posts) => {
      res.json({ total: posts.length, posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Project({
    name: req.body.name,
    avatar: req.file.path,
    price: req.body.price,
    External_link: req.body.external_link,
    Description: req.body.description,
    Collection:req.body.collection,
    add_tag:req.body.add_tag
  });
  console.log("Creating Post: ", post);
  post.save().then((result) => {
    res.json({
      post: result,
    });
  });
};
