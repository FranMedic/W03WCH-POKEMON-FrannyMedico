import Component from "./Component.js";
import PokemonServices from "./PokemonServices.js";

class PokemonCard extends Component {
  urlAPI;
  pokemon;
  name;
  img;
  number;
  type1;
  type2;
  cololes = {
    steel: "rgb(90, 142, 162, 0.4)",
    water: "rgb(80, 137, 196)",
    bug: "rgb(146, 193, 42)",
    dragon: "rgb(3, 109, 195)",
    electric: "rgb(244, 211, 57)",
    ghost: "rgb(81, 105, 174)",
    fire: "rgb(254, 157, 83)",
    fairy: "rgb(236, 144, 231)",
    ice: "rgb(116, 207, 192)",
    fighting: "rgb(206, 62, 106)",
    normal: "rgb(146, 154, 162)",
    grass: "rgb(98, 188, 90)",
    psychic: "rgb(249, 114, 121)",
    rock: "rgb(198, 184, 140)",
    dark: "rgb(90, 82, 101)",
    ground: "rgb(217, 121, 66)",
    poison: "rgb(170, 106, 201)",
    flying: "rgb(143, 170, 223)",
  };
  constructor(parentElement, url) {
    super(parentElement, "list-pokemon", "li");
    this.urlAPI = url;
    this.getPokemons();
  }
  async getPokemons() {
    const pokemonInstance = new PokemonServices(this.urlAPI);
    const responsePokemon = await pokemonInstance.getResponse();
    this.pokemon = responsePokemon;
    this.name = responsePokemon.name;
    this.img = responsePokemon.sprites.other.dream_world.front_default;
    this.number = responsePokemon.id;
    this.type1 = responsePokemon.types[0].type.name;
    this.element.style.background = this.cololes[this.type1];

    if (responsePokemon.types[1] !== undefined) {
      this.type2 = responsePokemon.types[1].type.name;
    } else {
      this.type2 = "";
    }
    this.generateHTML();
  }
  generateHTML() {
    const html = `
                <div class="list-pokemon__info">
                <h2 class="list-pokemon__name">${this.name}</h2>
                <p class="list-pokemon__number">Nº: ${this.number} </p>
                <span class="list-pokemon__type">${this.type1}</span>
                <span class="list-pokemon__type">${this.type2}</span>
                </div>
                <div class="divimagen">
                <i class="list-pokemon__icon-favorito"></i>
                <img class="list-pokemon__image" src="${this.img}" alt="foto de ejemplo" />
               </div>`;
    this.element.innerHTML = html;
  }
}
export default PokemonCard;
