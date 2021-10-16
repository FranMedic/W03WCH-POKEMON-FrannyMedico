import Page from "../js/Page.js";

describe("When recieved a Page constructor", () => {
  describe("when it recieves a parent element 'main'", () => {
    test("it should return a 'div' element with an 'app' class", () => {
      const parentElement = document.createElement("main");

      const functionCall = new Page(parentElement);

      const functionAnswer = parentElement.querySelector("div.app");
      console.log(functionAnswer);

      expect(functionAnswer).not.toBeNull();
    });
  });
});
