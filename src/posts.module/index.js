const postsRouter = require("./posts.router");

module.exports = {
  posts: postsRouter.routes()
};
