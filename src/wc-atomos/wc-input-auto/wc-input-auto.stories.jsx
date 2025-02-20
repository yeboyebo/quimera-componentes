import "./wc-input-auto.js";

const meta = {
  title: "WebComponents/Átomos/wc-input-auto",
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  args: {
    label: "Nombre",
    placeholder: "Introduce tu nombre",
    "texto-validacion": "Mínimo 8 caracteres",
  },
  argTypes: {
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

export const Base = {
  render: (args) => <wc-input-auto {...args}></wc-input-auto>,
};

export const Validaciones = {
  render: (args) => (
    <>
      <wc-input-auto
        {...args}
        erroneo
        texto-validacion="Este campo es requerido."
      ></wc-input-auto>
      <wc-input-auto
        {...args}
        advertido
        valor="Joze Baría"
        texto-validacion="Vamos, puedes hacerlo mejor."
      ></wc-input-auto>
      <wc-input-auto
        {...args}
        valido
        valor="Jose María"
        texto-validacion="Bien! Nombre correcto"
      ></wc-input-auto>
    </>
  ),
};

export const Opcional = {
  render: (args) => <wc-input-auto {...args} opcional></wc-input-auto>,
};

export const Deshabilitado = {
  render: (args) => <wc-input-auto {...args} deshabilitado></wc-input-auto>,
};
