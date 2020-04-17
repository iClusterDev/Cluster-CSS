const template = document.createElement("template");
template.innerHTML = `
  <style lang="scss">
    .container,
    .wrapper {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 100%;
      padding: $container__padding;
      max-width: $container__max-width;
    
      &.fill-height {
        height: 100%;
      }
    
      &.fill-width {
        margin: 0;
        max-width: 100%;
      }
    
      &.fill-space {
        margin: 0;
        max-width: 100%;
        height: 100%;
      }
    }
  </style>

  <div class="container">
    <slot></slot>
  </div>
`;

class Container extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-container", Container);
