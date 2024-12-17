import { config, configs } from "@gurgelio/eslint-config";

export default config(configs.node, {
  rules: {
    "n/no-unsupported-features/node-builtins": [
      "error",
      {
        version: ">=23.0.0",
        ignores: [],
      },
    ],
  },
});
