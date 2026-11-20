import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
  ['list'],

  [
    'html',
    {
      outputFolder: 'playwright-report',
      open: 'never',
    },
  ],  
  [
    'allure-playwright',
    {
      resultsDir: 'allure-results',
    },
  ],
  ['./src/utils/CustomReporter.ts'],
  ],
  timeout: 60_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: !!process.env.CI,
    ...devices['Desktop Chrome']
    
  },
  projects: [
    { name: 'chromium',
      use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false
} }
  ]
});

/*
headless line means
Local execution: browser visible.
CI/CD execution: browser runs in the background.
CI is an environment variable commonly set by CI/CD platforms such as GitHub Actions, Jenkins and Azure DevOps.
!! converts the value into a Boolean (true or false).
*/