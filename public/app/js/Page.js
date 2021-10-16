import Component from "./Component.js";

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
              <li class="list-pokemon">
                <i class="list-pokemon__icon"></i>
                <img class="list-pokemon__image" src="" alt="foto de ejemplo" />
                <h2 class="list-pokemon__name">Pokemon de ejemplo</h2>
                <span class="list-pokemon__type"></span>
              </li>
            </ul>
          </div>
        </div>`;
    this.element.innerHTML = html;
  }
}

export default Page;
