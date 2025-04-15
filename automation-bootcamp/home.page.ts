import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;
  readonly keepMeUpdatedModalCloseButton: Locator;
  readonly profile: Locator;
  readonly createAccount: Locator;
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly logInButton: Locator;
  readonly logo: Locator;
  readonly firstProduct: Locator;
  readonly productColor: Locator;
  readonly productSize: Locator;
  readonly productAmount: Locator;
  readonly addToCart: Locator;
  readonly loggingOut: Locator;

  // agrega más locators para los otros campos...

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#register-form > div:nth-child(1) > input'); 
    this.lastNameInput = page.locator('#register-form > div:nth-child(2) > input'); 
    this.emailInput = page.locator('#register-form > div:nth-child(3) > input'); 
    this.passwordInput = page.locator('#register-form > div.tf-field.style-1.mb_30 > input'); 
    this.registerButton = page.locator('#register-form > div.mb_20 > button');
    this.keepMeUpdatedModalCloseButton = page.locator('#newsletterPopup > div > div > div.modal-top > span');
    this.profile = page.locator('#header > div > div > div.col-xxl-5.col-md-4.col-3 > ul > li.nav-account > a > i');
    this.createAccount = page.locator('#login > div > div > div.tf-login-form > form > div.bottom > div:nth-child(2) > button');
    this.loginEmail = page.locator('#loginEmail');
    this.loginPassword = page.locator('#loginPassword');
    this.logInButton = page.locator('#login > div > form > div:nth-child(4) > button');
    this.logo = page.locator('#header > div > div > div.col-xl-3.col-md-4.col-6 > a > img');
    this.firstProduct = page.locator('#wrapper > div > section:nth-child(6) > div.tf-grid-layout.tf-col-2.md-col-3.gap-0.home-pckaleball-page > div:nth-child(1) > div.card-product-wrapper > a > img.lazyload.img-hover')
    this.productColor = page.locator('#wrapper > section:nth-child(3) > div.tf-main-product.section-image-zoom > div > div > div:nth-child(2) > div > div.tf-product-info-list.other-image-zoom > div.tf-product-info-variant-picker > div:nth-child(1) > form > label:nth-child(6) > span.btn-checkbox.bg-color-blue')
    this.productSize = page.locator('#wrapper > section:nth-child(3) > div.tf-main-product.section-image-zoom > div > div > div:nth-child(2) > div > div.tf-product-info-list.other-image-zoom > div.tf-product-info-variant-picker > div:nth-child(2) > form > label:nth-child(8) > p')
    this.productAmount = page.locator('#wrapper > section:nth-child(3) > div.tf-main-product.section-image-zoom > div > div > div:nth-child(2) > div > div.tf-product-info-list.other-image-zoom > div.tf-product-info-quantity > div.wg-quantity > input[type=text]')
    this.addToCart = page.locator('#wrapper > section:nth-child(3) > div.tf-main-product.section-image-zoom > div > div > div:nth-child(2) > div > div.tf-product-info-list.other-image-zoom > div.tf-product-info-buy-button > form > a.tf-btn.btn-fill.justify-content-center.fw-6.fs-16.flex-grow-1.animate-hover-btn')
    this.loggingOut = page.locator('#wrapper > section > div > div > div.col-lg-3 > ul > li:nth-child(6) > a')
  }

  async goTo() {
    await this.page.goto('https://automation-portal-bootcamp.vercel.app/register');
  }

  async goToRoot() {
    await this.page.goto('https://automation-portal-bootcamp.vercel.app/');
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

  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async waitForAlertAfterSubmit(): Promise<string> {
    const dialogUserRegistered = await this.page.waitForEvent('dialog');
    const message = dialogUserRegistered.message();
    await dialogUserRegistered.accept();
    return message;
  }

  async clickKeepMeUpdatedModalCloseButton() {
    await expect(this.keepMeUpdatedModalCloseButton).toBeVisible();
    await this.keepMeUpdatedModalCloseButton.click();
  }  
  
  async clickProfileIcon() {
    await this.profile.click();
  }    

  async goToCreateAccount() {
    await this.createAccount.click();
  }    

  async fillLoginEmail(email: string) {
    await this.loginEmail.fill(email);
  }
  
  async fillLoginPassword(password: string) {
    await this.loginPassword.fill(password);
  }  

  async clickLogInButton() {
    await this.logInButton.click();
  }  

  async clickLogo() {
    await this.logo.click();
  }  

  async goToFirstProduct() {
    await this.firstProduct.click();
  }    

  async pickColor() {
    await this.productColor.click();
  }    

  async pickSize() {
    await this.productSize.click();
  }     

  async fillAmount(amount: string) {
    await this.productAmount.fill(amount);
  }

  async clickAddToCart() {
    await this.addToCart.click();
  }    

  async logOut() {
    await this.page.goto('https://automation-portal-bootcamp.vercel.app/my-account');
    await this.loggingOut.click()
  }    
  
}
