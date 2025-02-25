import "../../utiles/tema.css";
import "./quimera-boton.js";

const meta = {
  title: "Átomos/quimera-boton",
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  argTypes: {
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

export const Base = {
  render: (args) => <quimera-boton {...args}>Botón Base</quimera-boton>,
};

export const Variantes = {
  render: (args) => (
    <>
      <quimera-boton {...args} variante="solido">
        Sólido
      </quimera-boton>
      <quimera-boton {...args} variante="borde">
        Borde
      </quimera-boton>
      <quimera-boton {...args} variante="texto">
        Texto
      </quimera-boton>
    </>
  ),
};

export const Destructivo = {
  render: (args) => (
    <>
      <quimera-boton {...args} destructivo variante="solido">
        Sólido
      </quimera-boton>
      <quimera-boton {...args} destructivo variante="borde">
        Borde
      </quimera-boton>
      <quimera-boton {...args} destructivo variante="texto">
        Texto
      </quimera-boton>
    </>
  ),
};

export const Deshabilitado = {
  render: (args) => (
    <>
      <quimera-boton {...args} deshabilitado variante="solido">
        Sólido
      </quimera-boton>
      <quimera-boton {...args} deshabilitado variante="borde">
        Borde
      </quimera-boton>
      <quimera-boton {...args} deshabilitado variante="texto">
        Texto
      </quimera-boton>
    </>
  ),
};

export const Tamaños = {
  render: (args) => (
    <>
      <quimera-boton {...args} tamaño="pequeño">
        Pequeño
      </quimera-boton>
      <quimera-boton {...args} tamaño="mediano">
        Mediano
      </quimera-boton>
      <quimera-boton {...args} tamaño="grande">
        Grande
      </quimera-boton>
    </>
  ),
};
