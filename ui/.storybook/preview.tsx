import type { Preview } from "@storybook/react-vite";
import { Controls, Description, Primary, Stories, Subtitle, Title } from "@storybook/addon-docs/blocks";
import { NuqsAdapter } from "nuqs/adapters/react";
import { themes } from "storybook/theming";
import "../src/ds/docs/storybook/preview.css";
import { LinkGuardDecorator } from "../src/ds/docs/storybook/linkGuard";
import { ModeDecorator } from "../src/ds/docs/storybook/modeDecorator";

// Motion is a global (not a parameter) so the toolbar drives it for every
// story at once; ModeDecorator applies it, and the LogDoc theme (dark,
// data-theme="logdoc"), to <html>/<body>.
export const globalTypes: Preview["globalTypes"] = {
  motion: {
    description: "Park every animation on its last frame (Still) or watch transitions (Live).",
    toolbar: {
      title: "Motion",
      icon: "play",
      items: [
        { value: "still", title: "Still" },
        { value: "live", title: "Live" },
      ],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  initialGlobals: { theme: "dark", palette: "logdoc", motion: "live" },
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    options: {
      storySort: {
        order: ["Intro", "Design System", "Primitive Components", "Composed Components", "Old Components"],
      },
    },
    backgrounds: { disable: true },
    a11y: { test: "todo" },
    docs: {
      theme: themes.dark,
      canvas: { withToolbar: false },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} title="Examples" />
        </>
      ),
    },
    // Figma embed (@storybook/addon-designs): set `design` per story.
  },
  decorators: [
    (Story) => (
      <NuqsAdapter>
        <Story />
      </NuqsAdapter>
    ),
    ModeDecorator,
    LinkGuardDecorator,
  ],
  tags: ["autodocs"],
};
export default preview;
