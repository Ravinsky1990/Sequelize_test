const request = require("supertest");
const server = require("../../app");

describe("Test post endpoints", () => {
  test("Should get all all posts", async () => {
    const res = await request(server).get("/test-api/posts");
    expect(res.status).toEqual(200);
  });

  test("Should create a new post", async () => {
    const res = await request(server)
      .post("/test-api/posts")
      .send({
        title: "test title",
        content: "test content",
        userId: 6
      });

    expect(res.status).toEqual(201);
    expect(res.body).toMatchObject({
      title: "test title",
      content: "test content",
      userId: 6
    });
  });
});
