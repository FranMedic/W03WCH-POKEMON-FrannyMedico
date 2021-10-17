class Component {
  element;
  parentElement;
  constructor(parentElement, className, tag) {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.parentElement = parentElement;

    this.parentElement.append(this.element);
  }
}

export default Component;
