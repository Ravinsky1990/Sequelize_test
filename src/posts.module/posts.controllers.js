//CRUD for posts
const models = require("../../database/models");

exports.getAllPosts = async ctx => {
  try {
    const allPosts = await models.Post.findAll({
      include: [
        {
          model: models.Comment,
          as: "comments",
          include: [
            {
              model: models.User,
              as: "author"
            }
          ]
        },
        {
          model: models.User,
          as: "author"
        }
      ]
    });
    ctx.body = allPosts;
  } catch (err) {
    console.log(err);
  }
};

exports.createPost = async ctx => {
  const postData = ctx.request.body;
  try {
    models.Post.create(postData);
    ctx.status = 201;
    ctx.body = postData;
  } catch (err) {
    console.log(err);
  }
};

exports.updatePost = async ctx => {
  const { postId } = ctx.params;
  const postData = ctx.request.body;
  try {
    const [updated] = await models.Post.update(postData, {
      where: {
        id: postId
      }
    });
    if (updated) {
      const updatedPost = await models.Post.findOne({
        where: {
          id: postId
        }
      });
      ctx.body = updatedPost;
    }
  } catch (err) {}
};

exports.deletePost = async ctx => {
  const { postId } = ctx.params;
  try {
    const deleted = models.Post.destroy({
      where: {
        id: postId
      }
    });
    if (deleted) {
      ctx.status = 204;
    }
  } catch (err) {}
};
