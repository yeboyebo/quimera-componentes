import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Story />
      </div>
    ),
    (Story, context) => {
      const selectedTheme = context.globals.theme || "Claro";

      if (!context.userGlobals.backgrounds) {
        context.userGlobals.backgrounds = { value: "#f8f9fa" };
      }

      context.userGlobals.backgrounds.value =
        selectedTheme === "Claro" ? "#f8f9fa" : "#343a40";

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
        icon: "sun",
        items: ["Claro", "Oscuro"],
      },
    },
  },
  initialGlobals: {
    theme: "Claro",
  },
};

export default preview;
