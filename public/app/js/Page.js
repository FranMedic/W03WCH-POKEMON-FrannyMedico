import Component from "./Component.js";
import PokemonCard from "./PokemonCard.js";
import PokemonServices from "./PokemonServices.js";

class Page extends Component {
  urlAPI;
  pokemonsList;
  constructor(parentElement, url) {
    super(parentElement, "app", "div");
    this.urlAPI = url;
    this.generateHTML();

    (async () => {
      const pokemonInstance = new PokemonServices(this.urlAPI);
      const responsePokemons = await pokemonInstance.getResponse();
      this.pokemonsList = responsePokemons.results;
      const ulTag = this.element.querySelector("ul.list-unstyled");
      this.pokemonsList.map((pokemon) => new PokemonCard(ulTag, pokemon.url));
    })();
  }

  generateHTML() {
    const html = ` <header class="main-header">
          <button class="dashboard"><img src="" /></button>
          <h1 class="main-header__title">PokyMón</h1>
          <button class="button pokedex">My Pokydéx</button>
        </header>
        <div class="container">
          <div class="list">
            <ul class="list-unstyled">
              
            </ul>
          </div>
          <div class="buttons"></div>
          <button class="button button__next">Prev</button>
         <button class="button button__previous">Next</button>
        </div>`;
    this.element.innerHTML = html;
    const buttonParent = document.querySelector("div.container");
    new Button(buttonParent, "button", "", "Prev", before);
    new Button(buttonParent, "button", "", "Next", next);
  }
}

export default Page;
