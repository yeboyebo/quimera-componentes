import {
  argsToAttrs,
  render,
  renderMany,
} from "../../utiles/render-webcomp.js";
import "../../utiles/tema.css";
import "./quimera-boton.js";

const meta = {
  title: "Átomos/quimera-boton",
  argTypes: {
    tipo: {
      control: "text",
    },
    variante: {
      options: ["solido", "borde", "texto"],
      control: "radio",
      table: { defaultValue: { summary: "solido" } },
    },
    tamaño: {
      options: ["pequeño", "mediano", "grande"],
      control: "radio",
      table: { defaultValue: { summary: "mediano" } },
    },
    destructivo: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    deshabilitado: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Base = (args) => {
  const attrs = argsToAttrs(args);

  const html = `
<quimera-boton ${attrs}>Botón 
  Base
</quimera-boton>`;

  return render(html);
};

export const Variantes = (args) => {
  const attrs = argsToAttrs(args);

  const solido = `
<quimera-boton ${attrs} variante="solido">
  Sólido
</quimera-boton>`;

  const borde = `
<quimera-boton ${attrs} variante="borde">
  Borde
</quimera-boton>`;

  const texto = `
<quimera-boton ${attrs} variante="texto">
  Texto
</quimera-boton>`;

  return renderMany([solido, borde, texto]);
};

export const Destructivo = (args) => {
  const attrs = argsToAttrs(args);

  const solido = `
<quimera-boton ${attrs} destructivo variante="solido">
  Sólido
</quimera-boton>`;

  const borde = `
<quimera-boton ${attrs} destructivo variante="borde">
  Borde
</quimera-boton>`;

  const texto = `
<quimera-boton ${attrs} destructivo variante="texto">
  Texto
</quimera-boton>`;

  return renderMany([solido, borde, texto]);
};

export const Deshabilitado = (args) => {
  const attrs = argsToAttrs(args);

  const solido = `
<quimera-boton ${attrs} deshabilitado variante="solido">
  Sólido
</quimera-boton>`;

  const borde = `
<quimera-boton ${attrs} deshabilitado variante="borde">
  Borde
</quimera-boton>`;

  const texto = `
<quimera-boton ${attrs} deshabilitado variante="texto">
  Texto
</quimera-boton>`;

  return renderMany([solido, borde, texto]);
};

export const Tamaños = (args) => {
  const attrs = argsToAttrs(args);

  const pequeño = `
<quimera-boton ${attrs} tamaño="pequeño">
  Pequeño
</quimera-boton>`;

  const mediano = `
<quimera-boton ${attrs} tamaño="mediano">
  Mediano
</quimera-boton>`;

  const grande = `
<quimera-boton ${attrs} tamaño="grande">
  Grande
</quimera-boton>`;

  return renderMany([pequeño, mediano, grande]);
};
