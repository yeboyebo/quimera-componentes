import "./wc-input-auto.css";

customElements.get("wc-input-auto") ||
  customElements.define(
    "wc-input-auto",
    class extends HTMLElement {
      static observedAttributes = [
        "label",
        "placeholder",
        "valor",
        "texto-validacion",
        "deshabilitado",
      ];

      connectedCallback() {
        this.render();
      }

      attributeChangedCallback(attr, viejo, nuevo) {
        if (viejo === nuevo) return;

        this.render();
      }

      render() {
        const {
          label,
          placeholder,
          valor,
          deshabilitado,
          "texto-validacion": textoValidacion,
        } = Object.fromEntries(
          [...this.attributes].map((a) => [a.name, a.value])
        );

        this.innerHTML = `
        <label>
            <span class="etiqueta">
                ${label}
                <span class="etiqueta-opcional">(opcional)</span>
            </span>
            <input type="text"
              placeholder="${placeholder ?? ""}"
              value="${valor ?? ""}"
              ${deshabilitado !== undefined ? "disabled" : ""} />
            <span class="texto-validacion">${textoValidacion ?? ""}</span>
        </label>`;
      }
    }
  );
