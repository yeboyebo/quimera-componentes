import type { Preview } from "@storybook/react";
import React from "react";
import "./storybook.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "1rem" }}>
        <Story />
      </div>
    ),
    (Story, context) => {
      const selectedTheme = context.globals.theme || "Claro";
      context.userGlobals.backgrounds.value =
        selectedTheme === "Claro" ? "#fff" : "#333";
      return (
        <div
          style={{
            colorScheme: selectedTheme === "Claro" ? "light" : "dark",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Tema global",
      toolbar: {
        title: "Cambiar tema",
        icon: "contrast",
        items: ["Claro", "Oscuro"],
      },
    },
  },
  initialGlobals: {
    theme: "Claro",
  },
};

export default preview;
