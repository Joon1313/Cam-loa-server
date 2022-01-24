const UserService = require("../../services/user");
jest.mock("../../services/user");
UserService.login.mockReturnValue({ test: true });

describe("User Service", () => {
  test("login", async () => {
    const result = await UserService.login({ id: "wkdrud13", password: "vnehf12" });
    expect(result.test).toBe(true);
  });
});
