import type { Meta, StoryObj } from "@storybook/react";

import ListaTareas from "./ListaTareas.tsx";

import * as TareaStories from "../Tarea/Tarea.stories.tsx";
import { EstadoTarea } from "../Tarea/Tarea.tsx";

const meta = {
  component: ListaTareas,
  title: "Tutorial1/ListaTareas",
  decorators: [(story) => <div style={{ margin: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  args: {
    ...TareaStories.DataAcciones,
  },
} satisfies Meta<typeof ListaTareas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PorDefecto: Story = {
  args: {
    tareas: [
      { ...TareaStories.PorDefecto.args.tarea, id: "1", titulo: "Tarea 1" },
      { ...TareaStories.PorDefecto.args.tarea, id: "2", titulo: "Tarea 2" },
      { ...TareaStories.PorDefecto.args.tarea, id: "3", titulo: "Tarea 3" },
      { ...TareaStories.PorDefecto.args.tarea, id: "4", titulo: "Tarea 4" },
      { ...TareaStories.PorDefecto.args.tarea, id: "5", titulo: "Tarea 5" },
      { ...TareaStories.PorDefecto.args.tarea, id: "6", titulo: "Tarea 6" },
    ],
  },
};

export const ConTareasFijadas: Story = {
  args: {
    tareas: [
      ...PorDefecto.args.tareas.slice(0, 5),
      { id: "6", titulo: "Tarea 6 (fijada)", estado: EstadoTarea.Fijada },
    ],
  },
};

export const Cargando: Story = {
  args: {
    tareas: [],
    cargando: true,
  },
};

export const Vacio: Story = {
  args: {
    ...Cargando.args,
    cargando: false,
  },
};
