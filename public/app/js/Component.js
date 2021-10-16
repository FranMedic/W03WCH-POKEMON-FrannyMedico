class Component {
  element;
  parentElement;
  constructor(parentElement, className, tag) {
    this.parentElement = parentElement;
    this.element = document.createElement(tag);
    this.element.className = className;

    this.parentElement.append(this.element);
  }
}

export default Component;
