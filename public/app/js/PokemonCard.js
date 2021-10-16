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

    if (responsePokemon.types[1] !== undefined) {
      this.type2 = responsePokemon.types[1].type.name;
    } else {
      this.type2 = "";
    }
    this.generateHTML();
  }
  generateHTML() {
    const html = `<i class="list-pokemon__icon-favorito"></i>
                <img class="list-pokemon__image" src="${this.img}" alt="foto de ejemplo" />
                <h2 class="list-pokemon__name">Nombre: ${this.name}</h2>
                <p class="list-pokemon__number">Numero: ${this.number} </p>
                <span class="list-pokemon__type">${this.type1}</span>
                <span class="list-pokemon__type">${this.type2}</span>`;
    this.element.innerHTML = html;
  }
}
export default PokemonCard;
