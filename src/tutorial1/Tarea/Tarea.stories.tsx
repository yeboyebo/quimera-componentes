import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";

import Tarea, { EstadoTarea } from "./Tarea.jsx";

export const DataAcciones = {
  onCompletar: fn(),
  onFijar: fn(),
};

const meta = {
  component: Tarea,
  title: "Tutorial1/Tarea",
  tags: ["autodocs"],
  excludeStories: /^Data.*/,
  args: {
    ...DataAcciones,
  },
} satisfies Meta<typeof Tarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PorDefecto: Story = {
  args: {
    tarea: {
      id: "1",
      titulo: "Tarea prueba 1",
      estado: EstadoTarea.Pendiente,
    },
  },
};

export const Completada: Story = {
  args: {
    tarea: {
      ...PorDefecto.args.tarea,
      estado: EstadoTarea.Completada,
    },
  },
};

export const Fijada: Story = {
  args: {
    tarea: {
      ...PorDefecto.args.tarea,
      estado: EstadoTarea.Fijada,
    },
  },
};
