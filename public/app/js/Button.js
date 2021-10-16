import Component from "./Component.js";

class Button extends Component {
  text;
  action;

  constructor(parentElement, className, tag = "button", text, actionOnClick) {
    super(parentElement, className, tag);
    this.actionOnClick = actionOnClick;
    this.element.textContent = this.text;
    this.event();
  }

  event() {
    this.element.addEventListener("click", this.action);
  }
  generateHTML() {
    this.element.textContent = this.text;
  }
}
