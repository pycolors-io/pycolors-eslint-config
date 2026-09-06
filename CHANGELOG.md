# @pycolors/eslint-config

## 1.0.6

### Patch Changes

- 58ec969: Update the shared ESLint configuration's Next.js plugin dependency to 16.3.3.

## 1.0.5

### Patch Changes

- 755c0d8: Update the TypeScript build-tool dependency to 6.0.3.
- be02051: Refresh the React Hooks lint dependency for the supported ESLint toolchain.

## 1.0.4

### Patch Changes

- 5da2fc9: Update the published ESLint configuration to use globals 17.9.0.
- 8a1e80e: Update the published ESLint configuration to use eslint-plugin-turbo 2.10.8.

## 1.0.3

### Patch Changes

- 9e0656b: Update ESLint dependency metadata for the publishable packages.

## 1.0.2

### Patch Changes

- eeabe18: Update the Globals dependency to 17.8.0.

## 1.0.1

### Patch Changes

- fix: ship runtime deps so config works in consumers (vercel build fix)

## 1.0.0

### Major Changes

- c051cd9: Introduce the first stable release of @pycolors/eslint-config.

  This package provides production-ready ESLint flat configurations for modern TypeScript, React, and Next.js applications.

  Highlights:
  - Flat config compatible with ESLint v9+
  - Shared base rules for monorepos
  - Next.js Core Web Vitals support
  - React + Hooks best practices
  - Prettier compatibility
  - Turbo-aware linting

  This release marks the beginning of the public PyColors tooling ecosystem.

### Minor Changes

- 5cda90b: Publish @pycolors/eslint-config (flat config presets)
  - Adds shared flat-config presets for Next.js, React libs and base JS/TS.
  - Designed for monorepo + public mirror repos (marketing, tokens, templates).
  - Prevents config drift and keeps lint rules consistent across the ecosystem.

## 0.1.0

### Minor Changes

- Initial public release of the shared ESLint config package.
  - Flat config (ESLint v9)
  - Presets: base, next-js, react-internal
  - Turbo + Prettier alignment
