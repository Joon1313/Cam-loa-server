const request = require("supertest");
const { mongooseInit, mongooseClose } = require("../../api/loaders/mongoose");
const app = require("../../app.local");

describe("Imgs Api", () => {
  beforeAll(async () => {
    try {
      await mongooseInit();
    } catch (error) {
      console.error(error);
    }
  });
  test("GET /imgs -> array imgs", async () => {
    const res = await request(app).get("/api/imgs");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: expect.any(String),
          name: expect.any(String),
          src: expect.any(String),
        }),
      ])
    );
  });
});
