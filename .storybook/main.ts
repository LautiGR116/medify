import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      esbuildOptions: {
        loader: {
          ".js": "jsx", // Indica a Vite que cargue archivos `.js` como JSX
        },
      },
    };
    return config;
  },
};

export default config;
