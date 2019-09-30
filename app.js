const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body");
const cors = require("@koa/cors");
//Modules
const postsModule = require("./src/posts.module");

const app = new Koa();
app.use(cors({ credentials: true }));

const apiRouter = new Router({ prefix: "/test-api" });

apiRouter.use(bodyParser({ multipart: true }));
apiRouter.use(postsModule.posts);
app.use(apiRouter.routes());

app.listen(8080, () => {
  console.log("server running on port 8080");
});
