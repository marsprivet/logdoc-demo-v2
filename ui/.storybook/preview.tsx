import type { Preview } from "@storybook/react-vite";
import "../src/tokens.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "logdoc",
      values: [{ name: "logdoc", value: "#16151a" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    // Figma embed (@storybook/addon-designs): set per-story, see
    // src/ui/*.stories.tsx — swap FIGMA_FRAME for the real frame URL
    // ("Copy link to selection" on a frame in the LogDoc UI Kit file).
  },
  initialGlobals: {
    backgrounds: { value: "logdoc" },
  },
};
export default preview;
