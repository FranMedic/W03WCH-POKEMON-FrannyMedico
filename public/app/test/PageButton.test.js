import PageButton from "../js/Button.js";

describe("When given a PageButton constructor", () => {
  describe("when it recieves a function to next page, and the user clicks the button", () => {
    test("then the function next should being called", () => {
      const parentElement = document.createElement("div");
      const className = "patata";
      const textButton = "patata";
      const nextFunction = jest.fn();

      const button = new PageButton(
        parentElement,
        className,
        textButton,
        nextFunction
      );

      button.element.dispatchEvent(new Event("click"));

      expect(nextFunction).toHaveBeenCalled();
    });
  });
});
