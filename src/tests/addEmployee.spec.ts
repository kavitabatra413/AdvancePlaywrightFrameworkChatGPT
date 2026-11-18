import { test, expect } from '../fixtures/testFixtures'; //fixture
import { employeeData } from '../testdata/employeeData'; //test data
import { createLogger } from '../utils/logger'; //logger
const logger = createLogger('AddEmployeeTest');
import path from 'path';

test('Admin can add an employee from PIM with image', async ({
  page,
  loginPage,
  dashboardPage,
  employeePage
}) => {
  logger.info('========== TEST STARTED ==========');
  const imagePath = path.resolve(
    process.cwd(),
    'src',
    'testdata',
    'Mypic.jpg');

  //loginPage is a fixture that gives you access to the LoginPage class object, and open() is a method defined inside that class.
  await loginPage.open(); 
  await loginPage.login(); 

  await dashboardPage.openPIM();
  await employeePage.openAddEmployee();
  await employeePage.addEmployee(
    employeeData.firstName,
    employeeData.lastName,
    employeeData.middleName
  );

  /*
  This is a Playwright assertion that verifies whether the newly added employee's
  name is displayed as a heading on the webpage above image
  getByRole() is a Playwright locator method.
  */
await expect(
  page.getByRole('heading', {
    name: `${employeeData.firstName} ${employeeData.lastName}`,
    exact: true
  })
).toBeVisible();

logger.info('Employee creation test passed');
logger.info('========== TEST COMPLETED ==========');
});

/*
npx playwright test addEmployee.spec.ts --headed
View the reports
Reports:
HTML: npx playwright show-report   http://localhost:9323/
Allure:
allure generate allure-results --clean -o allure-report
allure open allure-report  http://127.0.0.1:56278/
Custom: Check the output path configured in CustomReporter.ts
'AddEmployeeTest' is the name or identifier given to the logger.
There is no class by name AddEmployeeTest ???
logger is the logger object returned by that function.
process.cwd() returns the current working directory from which your Node.js process is running.
path.resolve() is a Node.js function that combines multiple path segments and returns an absolute path.
*/