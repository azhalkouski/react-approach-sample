import validate from "./validate.js";

describe("validate", () => {
  let email;
  let password;
  let isValid;

  beforeEach(() => {
    isValid = validate(email, password);
  });

  describe(`when email is valid`, () => {
    beforeAll(() => {
      email = "test@localhost.com";
    });

    describe("when password is valid", () => {
      beforeAll(() => {
        password = "tajsdfjHj24";
      });

      it("should return true", () => {
        expect(isValid).toBe(true);
      });
    });

    describe("when password is invalid", () => {
      beforeAll(() => {
        password = "t";
      });

      it("should return false", () => {
        expect(isValid).toBe(false);
      });
    });
  });

  describe(`when email is invalid`, () => {
    beforeAll(() => {
      email = "test@localho";
    });

    describe("when password is valid", () => {
      beforeAll(() => {
        password = "tajsdfjHj24";
      });

      it("should return false", () => {
        expect(isValid).toBe(false);
      });
    });

    describe("when password is invalid", () => {
      beforeAll(() => {
        password = "t";
      });

      it("should return false", () => {
        expect(isValid).toBe(false);
      });
    });
  });
});
