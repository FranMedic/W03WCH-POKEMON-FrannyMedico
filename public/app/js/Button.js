import Component from "./Component.js";

class PageButton extends Component {
  text;
  actionOnClick;

  constructor(parentElement, className, text, actionOnClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;
    this.text = text;

    this.element.textContent = this.text;
    this.events();
  }

  events() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default PageButton;