import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Átomos/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Nombre",
    placeholder: "Introduce tu nombre",
    textoValidacion: "Mínimo 8 caracteres",
  },
};

export const Validaciones: Story = {
  args: {
    label: "Nombre",
    placeholder: "Introduce tu nombre",
  },
  render: (args) => (
    <>
      <Input {...args} erroneo textoValidacion="Este campo es requerido." />
      <Input
        {...args}
        advertido
        valor="Joze Baría"
        textoValidacion="Vamos, puedes hacerlo mejor."
      />
      <Input
        {...args}
        valido
        valor="Jose María"
        textoValidacion="Bien! Nombre correcto"
      />
    </>
  ),
};

export const Opcional: Story = {
  args: {
    label: "Nombre",
    placeholder: "Introduce tu nombre",
    textoValidacion: "Mínimo 8 caracteres",
    opcional: true,
  },
};

export const Deshabilitado: Story = {
  args: {
    label: "Nombre",
    placeholder: "Introduce tu nombre",
    textoValidacion: "Mínimo 8 caracteres",
    deshabilitado: true,
  },
};
