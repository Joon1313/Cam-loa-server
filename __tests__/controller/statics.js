const request = require("supertest");
const { mongooseInit, mongooseClose } = require("../../api/loaders/mongoose");
const app = require("../../app.local");

describe("비로그인 상태에서 Static Page 접근", () => {
  beforeAll(async () => {
    try {
      await mongooseInit();
    } catch (error) {
      console.error(error);
    }
  });
  test("GET Notfound Page", async () => {
    const res = await request(app).get("/99999");
    expect(res.status).toBe(404);
  });
  test("GET HomePage ", async () => {
    const res = await request(app).get("/todo");
    expect(res.status).toBe(200);
  });
  test("GET engrave Page", async () => {
    const res = await request(app).get("/engrave");
    expect(res.status).toBe(200);
  });
  test("GET set Page", async () => {
    const res = await request(app).get("/set");
    expect(res.status).toBe(200);
  });
  test("GET raid Page", async () => {
    const res = await request(app).get("/raid");
    expect(res.status).toBe(200);
  });
  test("GET comment Page", async () => {
    const res = await request(app).get("/comment");
    expect(res.status).toBe(200);
  });
  test("GET login Page", async () => {
    const res = await request(app).get("/login");
    expect(res.status).toBe(200);
  });
  test("GET signup Page", async () => {
    const res = await request(app).get("/signup");
    expect(res.status).toBe(200);
  });
  test("GET member-todo Page", async () => {
    const res = await request(app).get("/member-todo");
    expect(res.status).toBe(302);
  });
  test("GET profile Page", async () => {
    const res = await request(app).get("/profile");
    expect(res.status).toBe(302);
  });
});
