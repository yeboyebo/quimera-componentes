import {
  argsToAttrs,
  render,
  renderMany,
} from "../../utiles/render-webcomp.js";
import "../../utiles/tema.css";
import "./quimera-input.js";

const meta = {
  title: "Átomos/quimera-input",
  args: {
    nombre: "nombre",
    label: "Nombre",
    placeholder: "Introduce tu nombre",
  },
  argTypes: {
    nombre: {
      control: "text",
    },
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    valor: {
      control: "text",
    },
    erroneo: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    advertido: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    valido: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    opcional: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    deshabilitado: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    "texto-validacion": {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Base = (args) => {
  const attrs = argsToAttrs(args);

  const html = `
<quimera-input
  ${attrs}
  texto-validacion="Mínimo 8 caracteres">
</quimera-input>`;

  return render(html);
};

export const Validaciones = (args) => {
  const attrs = argsToAttrs(args);

  const erroneo = `
<quimera-input
  ${attrs}
  texto-validacion="Este campo es requerido" erroneo>
</quimera-input>`;

  const advertido = `
<quimera-input
  ${attrs}
  valor="Joze Baría" texto-validacion="Vamos, puedes hacerlo mejor" advertido>
</quimera-input>`;

  const valido = `
<quimera-input
  ${attrs}
  valor="Jose María" texto-validacion="Bien! Nombre correcto" valido>
</quimera-input>`;

  return renderMany([erroneo, advertido, valido]);
};

export const Opcional = (args) => {
  const attrs = argsToAttrs(args);

  const html = `
<quimera-input
  ${attrs}
  opcional texto-validacion="Mínimo 8 caracteres">
</quimera-input>`;

  return render(html);
};

export const Deshabilitado = (args) => {
  const attrs = argsToAttrs(args);

  const html = `
<quimera-input
  ${attrs}
  deshabilitado texto-validacion="Mínimo 8 caracteres">
</quimera-input>`;

  return render(html);
};
