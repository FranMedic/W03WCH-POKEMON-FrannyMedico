import PokemonCard from "../js/PokemonCard.js";

describe("When recieved a Page constructor", () => {
  describe("when it recieves a parent element ", () => {
    test("it should return a 'li' element with an 'list-pokemon' class", () => {
      const parentElement = document.createElement("div");

      const functionCall = new PokemonCard(parentElement);

      const functionAnswer = parentElement.querySelector("li.list-pokemon");

      expect(functionAnswer).not.toBeNull();
    });
  });
});
