import type { Meta, StoryObj } from "@storybook/react";
import { PorDefecto as ListaPorDefecto } from "../ListaTareas/ListaTareas.stories.tsx";
import Home from "./Home.tsx";

import { fireEvent, waitFor, within } from "@storybook/test";

const meta = {
  component: Home,
  title: "Tutorial1/Páginas/Home",
  tags: ["autodocs"],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PorDefecto: Story = {
  args: {
    error: false,
    initialData: ListaPorDefecto.args.tareas,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await waitForElementToBeRemoved(await canvas.findByTestId("cargando"));
    await waitFor(() => canvas.getByTestId("tareas"));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText("fijarTarea-4"));
      await fireEvent.click(canvas.getByLabelText("fijarTarea-6"));
      await fireEvent.click(canvas.getByLabelText("completarTarea-2"));
    });
  },
};

export const Error: Story = {
  args: {
    error: true,
    initialData: [],
  },
};
