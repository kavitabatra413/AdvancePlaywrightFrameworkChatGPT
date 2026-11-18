import { Page, Locator, expect } from '@playwright/test';
import { createLogger } from '../utils/logger';

export class DashboardPage {
  private logger = createLogger('DashboardPage');
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly dashboardHeading:Locator

  constructor(page:Page)
   {
         this.page = page;
         this.dashboardHeading = page.getByRole("heading",{name:"Dashboard"})
         this.pimMenu = page.getByRole('link',{name:"PIM"})
         //this.addEmployeeMenu =page.getByRole('link',{name:"Add Employee"})
   }

   //Verify Dashboard page is opened
    async VerifyDashBoard()
   {
     await this.dashboardHeading.waitFor({state:'visible'})
   }

   //Open PIM page
  async openPIM(): Promise<void> {
    this.logger.info('Clicking PIM menu');
    await this.pimMenu.click();
    await expect(this.page).toHaveURL(/pim/);
    this.logger.info('PIM page opened successfully');
    await expect(this.page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  }
}
