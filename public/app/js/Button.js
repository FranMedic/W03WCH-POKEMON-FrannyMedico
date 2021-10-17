import Component from "./Component.js";

class PageButton extends Component {
  text;
  actionOnClick;

  constructor(parentElement, className, text, actionOnClick) {
    super(parentElement, className, "button");
    this.actionOnClick = actionOnClick;
    this.text = text;

    this.element.textContent = this.text;
    this.event();
  }

  event() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default PageButton;
