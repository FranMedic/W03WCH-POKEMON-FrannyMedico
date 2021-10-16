import Component from "./Component.js";

class PokemonCard extends Component {
  constructor(parentElement) {
    super(parentElement, "list-pokemon", "li");
    this.generateHTML();
  }
  generateHTML() {
    const html = `<i class="list-pokemon__icon"></i>
                <img class="list-pokemon__image" src="" alt="foto de ejemplo" />
                <h2 class="list-pokemon__name">Pokemon de ejemplo</h2>
                <span class="list-pokemon__type"></span>`;
    this.element.innerHTML = html;
  }
}
export default PokemonCard;
