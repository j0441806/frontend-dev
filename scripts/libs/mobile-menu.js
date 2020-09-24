class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this.__getEventType();
    this.__addEvent();
  }

  __getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }

  __toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  __addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this.__toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this.__toggle.bind(this));
  }
}
