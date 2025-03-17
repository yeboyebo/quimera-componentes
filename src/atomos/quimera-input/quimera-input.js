const template = ({
  label,
  placeholder,
  nombre,
  valor,
  deshabilitado,
  "texto-validacion": textoValidacion,
}) => `
<style>
  quimera-input {
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

      input {
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
      input {
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
      input {
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
      input {
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

      input {
        background-color: var(--color-deshabilitado);
        color: var(--negro);
        border-color: var(--negro);
      }

      cursor: inherit;
      pointer-events: none;
    }

    &[condensado] {
      .etiqueta {
        font-size: var(--tamaño-letra-s);
        
        .etiqueta-opcional {
          font-size: var(--tamaño-letra-xxs);
        }
      }
      
      input {
        padding: var(--espaciado-xs);
      }
      
      .texto-validacion {
        font-size: var(--tamaño-letra-xs);
      }
    }
  }
</style>
<label>
    <span class="etiqueta">
        ${label}
        <span class="etiqueta-opcional">(opcional)</span>
    </span>
    <input type="text"
      name="${nombre}"
      placeholder="${placeholder ?? ""}"
      value="${valor ?? ""}"
      ${deshabilitado !== undefined ? "disabled" : ""} />
    <span class="texto-validacion">${textoValidacion ?? ""}</span>
</label>`;

customElements.get("quimera-input") ||
  customElements.define(
    "quimera-input",
    class extends HTMLElement {
      static observedAttributes = [
        "nombre",
        "label",
        "placeholder",
        "valor",
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
