const dotenv = require("dotenv");
const AuthService = require("../../services/auth");
dotenv.config();
const { TEST_JWT } = process.env;

describe("Auth Service", () => {
  test("verify", () => {
    const result = AuthService.verify(TEST_JWT);
    expect(result).toBe(true);
  });
});
