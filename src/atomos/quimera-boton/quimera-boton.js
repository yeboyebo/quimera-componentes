const template = ({ tipo, contenido }) => `
<style>
  quimera-boton {
    box-sizing: border-box;

    &[destructivo] {
      --color-primario: var(--color-error);
      --color-primario-claro: var(--color-error-claro);
      --color-primario-oscuro: var(--color-error-oscuro);
    }

    &[deshabilitado] {
      --color-primario: var(--color-texto-deshabilitado);

      button {
        cursor: inherit;
        pointer-events: none;
      }
    }

    &[variante="texto"] button {
      background-color: transparent;
      color: var(--color-primario);
    }

    &[variante="borde"] button {
      color: var(--color-primario);
      background-color: transparent;
      border: var(--tamaño-borde-m) solid var(--color-primario);
    }

    &[tamaño="pequeño"] button {
      padding: var(--espaciado-xs) var(--espaciado-s);
      font-size: var(--tamaño-letra-xs);
    }

    &[tamaño="grande"] button {
      padding: var(--espaciado-l);
      font-size: var(--tamaño-letra-l);
    }

    button {
      display: inline-block;
      cursor: pointer;

      font-weight: var(--grosor-letra-7);
      font-size: var(--tamaño-letra-m);
      line-height: var(--tamaño-letra-m);
      font-family: var(--font-system-ui);

      background-color: var(--color-primario);
      color: var(--blanco);

      border: 0;
      border-radius: var(--redondeo-borde-xs);

      padding: var(--espaciado-m);

      transition-property: background-color, color, border-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;

      &:hover {
        border-color: transparent;
        background-color: var(--color-primario-claro);
        color: var(--color-primario-oscuro);
      }
    }
  }
</style>
<button type="${tipo || "button"}">
  ${contenido}
</button>
`;

customElements.get("quimera-boton") ||
  customElements.define(
    "quimera-boton",
    class extends HTMLElement {
      static observedAttributes = ["tipo"];

      rendered = false;

      connectedCallback() {
        this.contenido = this.innerHTML;
        this.render();
        this.rendered = true;
      }

      attributeChangedCallback(attr, viejo, nuevo) {
        if (!this.rendered) return;
        if (viejo === nuevo) return;

        this.render();
      }

      disconnectedCallback() {
        this.rendered = false;
      }

      render() {
        const attrs = Object.fromEntries(
          [...this.attributes].map((a) => [a.name, a.value])
        );

        this.innerHTML = template({ ...attrs, contenido: this.contenido });
      }
    }
  );
