import Page from "./Page.js";

const mainHtmlTag = document.querySelector("main");

// eslint-disable-next-line no-unused-vars
const webPage = new Page(
  mainHtmlTag,
  "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
);

// new PokemonServices("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
