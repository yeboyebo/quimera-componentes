import "../../utiles/tema.css";
import "./quimera-input.js";

const meta = {
  title: "Átomos/quimera-input",
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  args: {
    nombre: "nombre",
    label: "Nombre",
    placeholder: "Introduce tu nombre",
    "texto-validacion": "Mínimo 8 caracteres",
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

export const Base = {
  render: (args) => <quimera-input {...args}></quimera-input>,
};

export const Validaciones = {
  render: (args) => (
    <>
      <quimera-input
        {...args}
        erroneo
        texto-validacion="Este campo es requerido."
      ></quimera-input>
      <quimera-input
        {...args}
        advertido
        valor="Joze Baría"
        texto-validacion="Vamos, puedes hacerlo mejor."
      ></quimera-input>
      <quimera-input
        {...args}
        valido
        valor="Jose María"
        texto-validacion="Bien! Nombre correcto"
      ></quimera-input>
    </>
  ),
};

export const Opcional = {
  render: (args) => <quimera-input {...args} opcional></quimera-input>,
};

export const Deshabilitado = {
  render: (args) => <quimera-input {...args} deshabilitado></quimera-input>,
};
