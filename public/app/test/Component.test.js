import Component from "../js/Component.js";

describe("When given a Component constructor", () => {
  describe("when recieves a parentElement 'div', a className 'class' and a 'p' tag", () => {
    test("then it should render a 'p' element with a class named'class'", () => {
      const parentElement = document.createElement("div");
      const tag = "p";
      const className = "class";

      const callToFunction = new Component(parentElement, className, tag);
      const functionAnswer = parentElement.querySelector("p.class");

      expect(functionAnswer).not.toBeNull();
    });
  });
});
