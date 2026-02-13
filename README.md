# @pycolors/eslint-config

> ⚠️ Read-only mirror
> Source of truth lives in the PyColors monorepo.

👉 https://github.com/pycolors-io/pycolors/tree/main/packages/eslint-config

---

Shared ESLint flat-config presets used across the PyColors ecosystem (monorepo + public mirrors).

---

## Install

```bash
pnpm add -D @pycolors/eslint-config eslint
```

Then install the required peer dependencies (recommended):

```bash
pnpm add -D @eslint/js eslint-config-prettier typescript-eslint globals
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
pnpm add -D eslint-plugin-turbo eslint-plugin-only-warn
pnpm add -D @next/eslint-plugin-next
```

---

## Usage (Next.js)

Create `eslint.config.mjs`:

```js
import { nextJsConfig } from "@pycolors/eslint-config/next-js";

export default nextJsConfig;
```

---

## Usage (React libraries)

```js
import { config as reactInternal } from "@pycolors/eslint-config/react-internal";

export default reactInternal;
```

---

## Usage (Base)

```js
import { config as base } from "@pycolors/eslint-config/base";

export default base;
```

---

## Notes

* This package exports **flat config presets** (ESLint v9+).
* If you are migrating from `.eslintrc.*`, remove it and use `eslint.config.*` instead.

---

## License

MIT
