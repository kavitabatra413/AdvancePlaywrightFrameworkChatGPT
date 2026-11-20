import { Page, Locator, expect } from '@playwright/test';
import { createLogger } from '../utils/logger';

export class ViewEmployeeListPage {
  private logger = createLogger('ViewEmployeeListPage');
  readonly page: Page;
  readonly employeeHeading: Locator;
  readonly addEmployeeTab: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeId: Locator;
  readonly uploadImage: Locator;
  readonly saveButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.employeeHeading = page.getByRole('heading', { name: 'Add Employee' });
    this.addEmployeeTab = page.getByRole('link', { name: 'Add Employee' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.middleNameInput = page.getByPlaceholder('Middle Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeId = page.locator('input.oxd-input').nth(3);
    this.uploadImage = page.locator('input[type="file"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  //Open Add Employee tab
  async openAddEmployee(): Promise<void> {
    this.logger.info('Clicking Add Employee tab');
    await this.addEmployeeTab.click();
    this.logger.info('Add Employee page opened');
    await expect(this.employeeHeading).toBeVisible();
  }

  //Upload Image File
   async uploadImageFile(filePath: string): Promise<void> {
    await this.uploadImage.setInputFiles(filePath);
  }

//Add Employee and click save button
  async addEmployee(firstName: string, lastName: string, middleName = ''): Promise<void> {
    this.logger.info(`Adding employee: ${firstName} ${lastName}`);
    await this.firstNameInput.fill(firstName);
    if (middleName) {
      await this.middleNameInput.fill(middleName);
    }
    await this.lastNameInput.fill(lastName);
    this.logger.info('Clicking Save button');
    await this.saveButton.click();
   //await expect(this.page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
    this.logger.info('Employee added successfully');
  }
  
}
