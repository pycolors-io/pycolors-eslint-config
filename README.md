![npm](https://img.shields.io/npm/v/@pycolors/eslint-config)
![license](https://img.shields.io/npm/l/@pycolors/eslint-config)

# @pycolors/eslint-config

> ⚠️ **Read-only mirror**
>
> This repository is automatically synced from the **PyColors
> monorepo**.\
> **Source of truth:**
> https://github.com/pycolors-io/pycolors/tree/main/packages/eslint-config
>
> 👉 Please open issues and pull requests here --- they are synced
> upstream.

Production-ready ESLint configurations for modern TypeScript and React
applications.

Designed to enforce **consistent code quality**, **predictable
patterns**, and **scalable architecture** across the PyColors ecosystem.

------------------------------------------------------------------------

## Why this exists

Most teams waste time reinventing lint rules.

PyColors provides a **battle-tested baseline** so you can focus on
shipping product --- not debating formatting rules.

This config is optimized for:

-   Next.js apps
-   React libraries
-   Turborepo monorepos
-   TypeScript-first codebases

------------------------------------------------------------------------

## Install

``` bash
pnpm add -D @pycolors/eslint-config eslint
# or
npm install -D @pycolors/eslint-config eslint
```

------------------------------------------------------------------------

## Usage

### Next.js

Create an `eslint.config.mjs`:

``` js
import { nextJsConfig } from "@pycolors/eslint-config/next-js";

export default nextJsConfig;
```

### React library

``` js
import { config } from "@pycolors/eslint-config/react-internal";

export default config;
```

### Base config

``` js
import { config } from "@pycolors/eslint-config/base";

export default config;
```

------------------------------------------------------------------------

## What's inside

This package bundles a curated set of rules:

-   ESLint recommended
-   TypeScript ESLint
-   React + Hooks
-   Next.js Core Web Vitals
-   Prettier compatibility
-   Turbo rules for monorepos
-   Only-warn plugin to reduce CI friction

The goal is simple:

👉 strict enough to prevent bugs\
👉 practical enough to keep velocity high

------------------------------------------------------------------------

## Design philosophy

PyColors tools are built around one principle:

**Consistency scales.**

When every project shares the same lint foundation:

-   onboarding becomes faster
-   reviews become simpler
-   architecture becomes predictable

------------------------------------------------------------------------

## Versioning

This package follows **Semantic Versioning**.

-   **1.x** → stable baseline
-   rule additions → minor
-   breaking rule changes → major

------------------------------------------------------------------------

## Roadmap

Planned improvements:

-   stricter TypeScript presets
-   security-focused rules
-   performance linting
-   optional formatting layer

------------------------------------------------------------------------

## License

MIT

------------------------------------------------------------------------

## Links

-   PyColors → https://pycolors.io
-   PyColors Docs→ https://pycolors.io/docs
-   UI → https://github.com/pycolors-io/pycolors-ui
-   Tokens → https://github.com/pycolors-io/pycolors-tokens
