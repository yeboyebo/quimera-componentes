import type { Preview } from "@storybook/html";

const Fondos = {
  Claro: "#f8f9fa",
  Oscuro: "#343a40",
};

const preview: Preview = {
  decorators: [
    (story, context) => {
      const background = context.globals.backgrounds?.value || Fondos.Claro;
      const body = document.body;

      if (background === Fondos.Claro) {
        body.style.colorScheme = "light";
      }

      if (background === Fondos.Oscuro) {
        body.style.colorScheme = "dark";
      }

      return story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "Claro", value: Fondos.Claro },
        { name: "Oscuro", value: Fondos.Oscuro },
      ],
      default: "Claro",
    },
    layout: "centered",
    docs: {
      source: {
        excludeDecorators: true,
        language: "html",
        format: "html",
      },
    },
  },
};

export default preview;
