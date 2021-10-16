import Component from "./Component.js";
import PokemonCard from "./PokemonCard.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "app", "div");

    this.generateHTML();
  }

  generateHTML() {
    const html = ` <header class="main-header">
          <h1 class="main-header__title">PokyMón</h1>
        </header>
        <div class="container">
          <div class="list">
            <ul class="list-unstyled">
              
            </ul>
          </div>
        </div>`;
    this.element.innerHTML = html;
    const ulTag = this.element.querySelector("ul.list-unstyled");

    const createCard = new PokemonCard(ulTag);
  }
}

export default Page;
