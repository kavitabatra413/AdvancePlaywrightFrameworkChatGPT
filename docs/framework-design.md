# Framework design

- **Page Object Model:** one page class per application page.
- **Fixtures:** `src/fixtures/testFixtures.ts` provides page objects to tests.
- **Test data:** employee data is generated with a unique suffix per run.
- **Configuration:** `playwright.config.ts` and `src/config/env.ts`.
- **Artifacts:** HTML report, trace, screenshot and video are configured for test runs.
