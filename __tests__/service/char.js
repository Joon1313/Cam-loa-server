const CharService = require("../../services/char");

describe("Char Service", () => {
  let result;
  beforeAll(async () => {
    result = await CharService.search("조프리");
  });
  test("직업 확인", async () => {
    expect(result.job).toBe("건슬링어");
  });
  test("레벨 확인", async () => {
    expect(result.level).toBe("1,465");
  });
});
