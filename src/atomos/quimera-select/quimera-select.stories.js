import {
  argsToAttrs,
  render,
  renderMany,
} from "../../utiles/render-webcomp.js";
import "../../utiles/tema.css";
import "./quimera-select.js";

const paises = [
  { valor: "es", label: "España" },
  { valor: "fr", label: "Francia" },
  { valor: "it", label: "Italia" },
  { valor: "pt", label: "Portugal" },
  { valor: "mx", label: "México" },
];

const opciones = (_default = "") =>
  paises
    .map(
      ({ label, valor }) =>
        `<option value="${valor}" ${
          _default === valor ? "selected" : ""
        }>${label}</option>`
    )
    .join("\n  ");

const meta = {
  title: "Átomos/quimera-select",
  args: {
    nombre: "codpais",
    label: "País",
    placeholder: "Elige un país de destino",
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
<quimera-select ${attrs} texto-validacion="Se recomienda un país europeo">
  ${opciones()}
</quimera-select>`;

  return render(html);
};

export const Validaciones = (args) => {
  const attrs = argsToAttrs(args);

  const erroneo = `
<quimera-select ${attrs} texto-validacion="Debes elegir un país" erroneo>
  ${opciones()}
</quimera-select>`;

  const advertido = `
<quimera-select ${attrs} texto-validacion="Se recomienda un país europeo" advertido>
  ${opciones("mx")}
</quimera-select>`;

  const valido = `
<quimera-select ${attrs} texto-validacion="Bien! Buen sitio" valido>
  ${opciones("it")}
</quimera-select>`;

  return renderMany([erroneo, advertido, valido]);
};

export const Opcional = (args) => {
  const attrs = argsToAttrs(args);

  const html = `
<quimera-select ${attrs} opcional texto-validacion="Se recomienda un país europeo">
  ${opciones()}
</quimera-select>`;

  return render(html);
};

export const Deshabilitado = (args) => {
  const attrs = argsToAttrs(args);

  const html = `
<quimera-select ${attrs} deshabilitado texto-validacion="Se recomienda un país europeo">
  ${opciones()}
</quimera-select>`;

  return render(html);
};
