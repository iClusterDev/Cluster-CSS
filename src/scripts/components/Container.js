const template = document.createElement("template");
template.innerHTML = `
  <style>
    h3 { color: red; }
  </style>

  <div class="card">
    <img/>
    <div>
      <h3 class="name"></h3>
      <div class="info">
        <p><slot name="email"></slot></p>
        <p><slot name="phone"></slot></p>
      </div>
      <button id="toggle">Hide Info</button>
    </div>
  </div>
`;

class Container extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector(".info");
    const toggle = this.shadowRoot.querySelector("#toggle");

    if (this.showInfo) {
      info.style.display = "block";
      toggle.innerText = "Hide Info";
    } else {
      info.style.display = "none";
      toggle.innerText = "Show Info";
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#toggle").addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle").removeEventListener();
  }
}

window.customElements.define("app-container", Container);
