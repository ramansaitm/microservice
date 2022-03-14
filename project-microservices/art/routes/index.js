const express = require("express");
const upload = require("../middleware");
const router = express.Router();
const {getPosts,createPost}=require('../controller/index')
router.get("/get", getPosts);
router.put("/upload", upload.single("avatar"), createPost);
module.exports = router;