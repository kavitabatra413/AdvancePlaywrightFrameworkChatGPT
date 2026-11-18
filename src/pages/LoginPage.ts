import { Page, Locator, expect } from '@playwright/test';
import { env } from '../config/env';
import { createLogger } from '../utils/logger';

export class LoginPage {
  private logger = createLogger('LoginPage');
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Open the login page
  async open(): Promise<void> {
    this.logger.info('Opening OrangeHRM login page');
    await this.page.goto('/web/index.php/auth/login');
  }

  // Perform login with provided credentials
  async login(username = env.username, password = env.password): Promise<void> {
    this.logger.info('Entering login credentials');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    this.logger.info('Clicking Login button');
    await this.loginButton.click();
    await expect(this.page).toHaveURL(/dashboard/);
    this.logger.info('Login successful');
  }
}

/*Code	Meaning
this	Refers to the current class object (LoginPage).
this.page	Refers to the Playwright Page object representing the browser tab.
.goto()	Playwright method used to navigate to a URL.
'/web/index.php/auth/login'	The relative URL of the OrangeHRM login page.
await	Waits until the navigation promise completes before executing the next statement.
*/