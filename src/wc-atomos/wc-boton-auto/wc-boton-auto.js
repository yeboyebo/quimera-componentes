import "./wc-boton-auto.css";

customElements.get("wc-boton-auto") ||
  customElements.define(
    "wc-boton-auto",
    class extends HTMLElement {
      connectedCallback() {
        this.render();
      }

      render() {
        this.innerHTML = `<button>${this.innerHTML}</button>`;
      }
    }
  );
