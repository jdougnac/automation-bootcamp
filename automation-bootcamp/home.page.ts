import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  // agrega más locators para los otros campos...

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#register-form > div:nth-child(1) > input'); 
    this.lastNameInput = page.locator('#register-form > div:nth-child(2) > input'); 
    this.emailInput = page.locator('#register-form > div:nth-child(3) > input'); 
    this.passwordInput = page.locator('#register-form > div.tf-field.style-1.mb_30 > input'); 
  }

  async goTo() {
    await this.page.goto('https://automation-portal-bootcamp.vercel.app/register');
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }
  
  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }
  
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  
}
