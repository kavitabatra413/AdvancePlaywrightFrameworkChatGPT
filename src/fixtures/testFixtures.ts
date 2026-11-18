import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ViewEmployeeListPage } from '../pages/ViewEmployeeListPage';

type FrameworkFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  employeePage: ViewEmployeeListPage;
};

//fixture creates an object of the LoginPage class so that you can access its methods in your test spec file.
export const test = base.extend<FrameworkFixtures>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  dashboardPage: async ({ page }, use) => use(new DashboardPage(page)),
  employeePage: async ({ page }, use) => use(new ViewEmployeeListPage(page))
});

export { expect } from '@playwright/test';

/*This statement imports Playwright's built-in test function
and gives it another name: base.
loginPage: Object of LoginPage class
in custom fixture framework, we commonly write:
import { test as base } from '@playwright/test';
base is the Original Playwright test
test is the Custom test with fixtures
base.extend tells Playwright and TypeScript:
"My extended test will have these three additional fixtures, and these are their respective types."
You don't need to import all three Page Object Model (POM) TypeScript files directly into your spec file because you have already imported them into testFixtures.ts
*/
/*
fixtures manage the creation, sharing, setup, and cleanup of objects for your test cases.
Instead of creating objects in every test, you define fixtures once in testFixtures.ts.
const loginPage = new LoginPage(page); -> no need
*/
