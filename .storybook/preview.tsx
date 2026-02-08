import type { Preview } from "@storybook/react-vite";
import { css, Global } from "storybook/theming";
import { AWESOME_DEVICE_VIEWPORTS } from "storybook-device-viewports";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: AWESOME_DEVICE_VIEWPORTS,
    },
    a11y: {
      context: "body",
      config: {},

      options: {
        runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"],
      },

      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (storyFn) => (
      <>
        <Global
          styles={css`
            .sb-show-main.sb-main-padded {
              padding: 0;
              margin: 0;
            }

            #storybook-root {
              display: flex;
              flex-direction: column;
              gap: 0;
              min-block-size: 100svb;
            }
        `}
        />
        {storyFn()}
      </>
    ),
  ],
};

export default preview;
