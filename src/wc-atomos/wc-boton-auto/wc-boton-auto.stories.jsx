import "./wc-boton-auto.js";

const meta = {
  title: "WebComponents/Átomos/wc-boton-auto",
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
  render: (args) => <wc-boton-auto {...args}>Botón Base</wc-boton-auto>,
};

export const Variantes = {
  render: (args) => (
    <>
      <wc-boton-auto {...args} variante="solido">
        Sólido
      </wc-boton-auto>
      <wc-boton-auto {...args} variante="borde">
        Borde
      </wc-boton-auto>
      <wc-boton-auto {...args} variante="texto">
        Texto
      </wc-boton-auto>
    </>
  ),
};

export const Destructivo = {
  render: (args) => (
    <>
      <wc-boton-auto {...args} destructivo variante="solido">
        Sólido
      </wc-boton-auto>
      <wc-boton-auto {...args} destructivo variante="borde">
        Borde
      </wc-boton-auto>
      <wc-boton-auto {...args} destructivo variante="texto">
        Texto
      </wc-boton-auto>
    </>
  ),
};

export const Deshabilitado = {
  render: (args) => (
    <>
      <wc-boton-auto {...args} deshabilitado variante="solido">
        Sólido
      </wc-boton-auto>
      <wc-boton-auto {...args} deshabilitado variante="borde">
        Borde
      </wc-boton-auto>
      <wc-boton-auto {...args} deshabilitado variante="texto">
        Texto
      </wc-boton-auto>
    </>
  ),
};

export const Tamaños = {
  render: (args) => (
    <>
      <wc-boton-auto {...args} tamaño="pequeño">
        Pequeño
      </wc-boton-auto>
      <wc-boton-auto {...args} tamaño="mediano">
        Mediano
      </wc-boton-auto>
      <wc-boton-auto {...args} tamaño="grande">
        Grande
      </wc-boton-auto>
    </>
  ),
};
