const Router = require("koa-router");

const ctrls = require("./posts.controllers");

const router = new Router({ prefix: "/posts" });

router.get("/", ctrls.getAllPosts);
router.post("/", ctrls.createPost);
router.put("/:postId", ctrls.updatePost);
router.delete("/:postId", ctrls.deletePost);

module.exports = router;
