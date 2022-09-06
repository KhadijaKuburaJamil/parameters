const router=require("express").Router;
const { getPost, updatePost, getPosts, deletePost, createPost } = require("../controllers/post.controller");



const postRouter = router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:postId")
           .get(getPost)
           .patch(updatePost)
           .delete(deletePost)
 module.exports = postRouter;