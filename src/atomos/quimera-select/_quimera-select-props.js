const template = ({
  label,
  placeholder,
  nombre,
  valor,
  opciones,
  deshabilitado,
  "texto-validacion": textoValidacion,
}) => `
<style>
quimera-select {
  label {
    display: flex;
    flex-direction: column;
    color: var(--color-texto-secundario);

    .etiqueta {
      margin-bottom: var(--espaciado-xxs);
      font-size: var(--tamaño-letra-m);

      .etiqueta-opcional {
        color: var(--color-texto-deshabilitado);
        font-size: var(--tamaño-letra-xs);
        display: none;
      }
    }

    select {
      --color-borde: var(--color-texto-secundario);

      outline: 0;
      color: var(--color-texto-primario);
      border: var(--tamaño-borde-s) solid var(--color-borde);
      border-radius: var(--redondeo-borde-s);
      padding: var(--espaciado-m);
      font-size: var(--tamaño-letra-m);
      background-color: transparent;

      &:focus {
        box-shadow: inset 0 0 0 var(--tamaño-borde-m) var(--color-borde);
      }

      &::placeholder {
        color: var(--color-texto-deshabilitado);
      }
    }

    .texto-validacion {
      margin-top: var(--espaciado-xxs);
      color: var(--color-texto-deshabilitado);
      font-size: var(--tamaño-letra-s);

      &::before {
        content: "";
        margin-right: var(--espaciado-xxs);
      }
    }
  }

  &[erroneo] {
    select {
      --color-borde: var(--color-error);
    }

    & .texto-validacion {
      color: var(--color-error);

      &::before {
        content: "❌";
      }
    }
  }

  &[advertido] {
    select {
      --color-borde: var(--color-advertencia);
    }

    & .texto-validacion {
      color: var(--color-advertencia);

      &::before {
        content: "⚠️";
      }
    }
  }

  &[valido] {
    select {
      --color-borde: var(--color-exito);
    }

    & .texto-validacion {
      color: var(--color-exito);

      &::before {
        content: "✅";
      }
    }
  }

  &[opcional] label .etiqueta .etiqueta-opcional {
    display: inline;
  }

  &[deshabilitado] {
    span {
      color: var(--color-texto-deshabilitado);
    }

    select {
      background-color: var(--color-deshabilitado);
      color: var(--negro);
      border-color: var(--negro);
    }

    cursor: inherit;
    pointer-events: none;
  }
}
</style>
<label>
    <span class="etiqueta">
        ${label}
        <span class="etiqueta-opcional">(opcional)</span>
    </span>
    <select
        name="${nombre}"
        ${deshabilitado !== undefined ? "disabled" : ""}>
            <option selected hidden value="">-${
              placeholder ?? "Elige una opción"
            }-</option>
            ${JSON.parse(opciones)
              .map(
                ({ label, valor: valorOpcion }) =>
                  `<option value="${valorOpcion}" ${
                    valorOpcion === valor ? "selected" : ""
                  }>${label}</option>`
              )
              .join("")}
    </select>
    <span class="texto-validacion">${textoValidacion ?? ""}</span>
</label>`;

customElements.get("quimera-select") ||
  customElements.define(
    "quimera-select",
    class extends HTMLElement {
      static observedAttributes = [
        "nombre",
        "label",
        "placeholder",
        "valor",
        "opciones",
        "texto-validacion",
        "deshabilitado",
      ];

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
