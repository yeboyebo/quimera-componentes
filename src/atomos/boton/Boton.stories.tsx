import type { Meta, StoryObj } from "@storybook/react";

import { Boton } from "./Boton";

const meta = {
  title: "Átomos/Botón",
  component: Boton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Boton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Botón Base",
  },
};

export const Variantes: Story = {
  render: (args) => (
    <>
      <Boton {...args} variante="solido">
        Sólido
      </Boton>
      <Boton {...args} variante="borde">
        Borde
      </Boton>
      <Boton {...args} variante="texto">
        Texto
      </Boton>
    </>
  ),
};

export const Destructivo: Story = {
  render: (args) => (
    <>
      <Boton {...args} destructivo variante="solido">
        Sólido
      </Boton>
      <Boton {...args} destructivo variante="borde">
        Borde
      </Boton>
      <Boton {...args} destructivo variante="texto">
        Texto
      </Boton>
    </>
  ),
};

export const Deshabilitado: Story = {
  render: (args) => (
    <>
      <Boton {...args} deshabilitado variante="solido">
        Sólido
      </Boton>
      <Boton {...args} deshabilitado variante="borde">
        Borde
      </Boton>
      <Boton {...args} deshabilitado variante="texto">
        Texto
      </Boton>
    </>
  ),
};

export const Tamaños: Story = {
  render: (args) => (
    <>
      <Boton {...args} tamaño="pequeño">
        Pequeño
      </Boton>
      <Boton {...args} tamaño="mediano">
        Mediano
      </Boton>
      <Boton {...args} tamaño="grande">
        Grande
      </Boton>
    </>
  ),
};
