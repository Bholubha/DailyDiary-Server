
const express =  require("express")
const router = express.Router();
const {getPost,createPost} = require('../Controller/memoryController')


router.route("/upload").post(createPost)

router.route("/show").post(getPost);

module.exports = router;
