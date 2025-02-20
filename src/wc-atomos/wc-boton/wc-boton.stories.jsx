import "./wc-boton.js";

const meta = {
  title: "WebComponents/Átomos/wc-boton",
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
  render: (args) => {
    return (
      <wc-boton {...args}>
        <button>Botón Base</button>
      </wc-boton>
    );
  },
};

export const Variantes = {
  render: (args) => (
    <>
      <wc-boton {...args} variante="solido">
        <button>Sólido</button>
      </wc-boton>
      <wc-boton {...args} variante="borde">
        <button>Borde</button>
      </wc-boton>
      <wc-boton {...args} variante="texto">
        <button>Texto</button>
      </wc-boton>
    </>
  ),
};

export const Destructivo = {
  render: (args) => (
    <>
      <wc-boton {...args} destructivo variante="solido">
        <button>Sólido</button>
      </wc-boton>
      <wc-boton {...args} destructivo variante="borde">
        <button>Borde</button>
      </wc-boton>
      <wc-boton {...args} destructivo variante="texto">
        <button>Texto</button>
      </wc-boton>
    </>
  ),
};

export const Deshabilitado = {
  render: (args) => (
    <>
      <wc-boton {...args} deshabilitado variante="solido">
        <button>Sólido</button>
      </wc-boton>
      <wc-boton {...args} deshabilitado variante="borde">
        <button>Borde</button>
      </wc-boton>
      <wc-boton {...args} deshabilitado variante="texto">
        <button>Texto</button>
      </wc-boton>
    </>
  ),
};

export const Tamaños = {
  render: (args) => (
    <>
      <wc-boton {...args} tamaño="pequeño">
        <button>Pequeño</button>
      </wc-boton>
      <wc-boton {...args} tamaño="mediano">
        <button>Mediano</button>
      </wc-boton>
      <wc-boton {...args} tamaño="grande">
        <button>Grande</button>
      </wc-boton>
    </>
  ),
};
