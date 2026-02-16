import { config as base } from "./base.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  {
    ignores: ["dist/**"],
  },
];
