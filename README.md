# AdvancePlaywrightFramework

A TypeScript + Playwright Page Object Model framework for the OrangeHRM demo application.

## Prerequisites

- Node.js 20 or later
- npm
- VS Code

## Setup on Windows

Open this folder in VS Code, then run these commands in the terminal:

```bash
npm install
npx playwright install chromium
```

Copy `.env.example` to `.env` (or run `copy .env.example .env` in Command Prompt). The demo credentials are already provided as defaults in `src/config/env.ts`; you can override them in `.env`.

## Run tests

```bash
npm test
npm run test:headed
npm run test:ui
npm run report
npm run typecheck
```

## Test flow

1. Open the OrangeHRM login page.
2. Log in as the demo Admin user.
3. Select **PIM** from the left navigation.
4. Select **Add Employee**.
5. Enter a generated employee name and save.
6. Verify that the Personal Details page appears.

## Project structure

```text
AdvancePlaywrightFramework/
├── src/
│   ├── api/
│   ├── config/
│   ├── fixtures/
│   ├── pages/
│   ├── testdata/
│   ├── tests/
│   └── utils/
├── docs/
├── rules/
├── .github/workflows/
├── .env.example
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

Note: OrangeHRM is a public demo site. Its availability, UI, and demo data can change. The test creates a new employee record each time it runs.
