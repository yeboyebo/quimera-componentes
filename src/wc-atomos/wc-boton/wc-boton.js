import "./wc-boton.css";

customElements.get("wc-boton") ||
  customElements.define(
    "wc-boton",
    class extends HTMLElement {
      constructor() {
        super();

        this.boton = document.querySelector("button");
      }
    }
  );
