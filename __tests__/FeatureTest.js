import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import CarNamesParser from "../src/parser/CarNamesParser.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("세부 기능 테스트", () => {
  describe("자동차 이름 입력 기능에 대한 테스트", () => {
    test("6자 이상의 이름에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차, 멋있는자동차"];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test("이름 입력 시 ','를 기준으로 분리하는가", async () => {
      const input = "자동차1, 자동차2, 자동차3, 자동차4";

      expect(CarNamesParser.parse(input)).toHaveLength(4);
    });
  });

  describe("자동차 등록 기능에 대한 테스트", () => {
    test("등록하는 자동차가 2대 미만일 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const correctInputs = ["자동차1, 자동차2", 2];
      mockQuestions(correctInputs);
      await expect(app.play()).resolves.not.toThrowError();

      const wrongInputs = ["자동차1", 2];
      mockQuestions(wrongInputs);
      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });

  describe("시도 횟수 입력 기능에 대한 테스트", () => {
    test("입력 값이 숫자가 아닌 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차1, 자동차2", "문자"];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 입력 값이 1미만인 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차1, 자동차2", 0];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 입력 값이 1000을 초과할 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차1, 자동차2", 1001];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });
});
