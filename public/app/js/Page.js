import Component from "./Component.js";
import PokemonCard from "./PokemonCard.js";
import PokemonServices from "./PokemonServices.js";
import PageButton from "./Button.js";

class Page extends Component {
  urlAPI;
  pokemonsList;
  page = 0;
  urlPage;

  constructor(parentElement, url) {
    super(parentElement, "app", "div");
    this.urlAPI = url;
    this.urlPage = url;
    this.goToAnotherPage();
    this.generateHTML(this.urlPage);
  }
  goToAnotherPage = () => {
    const offset = this.page * 9;
    const urlToGoAnotherPage = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;
    this.urlPage = urlToGoAnotherPage;
  };

  previousPage = () => {
    if (this.page > 0) {
      this.page--;
      this.goToAnotherPage();
      this.generateHTML(this.urlPage);
    }
  };
  nextPage = () => {
    this.page++;
    this.goToAnotherPage();
    this.generateHTML(this.urlPage);
  };

  generateHTML(urlPages) {
    const html = ` <header class="main-header">
          <a href="index.html" class="dashboard"><img src="images/pokeball-icon.png" alt="Inicio" ></a>
          <h1 class="main-header__title"><img src="images/logo-pokemon.png" alt="logopokemon"/></h1>
          <img src ="images/pokedexicon.png" alt="My Pokemons" class="button-pokedex"/>
        </header>
        <div class="container">
          <div class="list">
            <ul class="list-unstyled">
              
            </ul>
          </div>
          <div class="buttons"></div>
        </div>`;
    this.element.innerHTML = html;

    (async () => {
      const pokemonInstance = new PokemonServices(urlPages);
      const responsePokemons = await pokemonInstance.getResponse();
      this.pokemonsList = responsePokemons.results;
      const ulTag = this.element.querySelector("ul.list-unstyled");
      this.pokemonsList.map((pokemon) => new PokemonCard(ulTag, pokemon.url));
    })();

    const buttonParent = document.querySelector("div.container");
    // eslint-disable-next-line no-new
    new PageButton(buttonParent, "button__previous", "<", this.previousPage);
    // eslint-disable-next-line no-new
    new PageButton(buttonParent, "button__next", ">", this.nextPage);
  }
}

export default Page;
