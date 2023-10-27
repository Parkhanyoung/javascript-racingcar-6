import { validateIsString } from "../utils/validators.js";

class CarNamesParser {
  #carNames = [];

  static parse(value) {
    CarNamesParser.#validate(value);
    const names = CarNamesParser.#splitByComma(value);
    const trimmedNames = names.map((name) => name.trim());
    return trimmedNames;
  }

  static #validate(value) {
    validateIsString(value);
  }

  static #splitByComma(string) {
    return string.split(",");
  }
}

export default CarNamesParser;