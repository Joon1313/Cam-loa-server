const AuthService = require("../../services/auth");

describe("Auth Service", () => {
  test("verify", () => {
    const result = AuthService.verify(process.env.TEST_JWT);
    expect(result).toBe(true);
  });
});
