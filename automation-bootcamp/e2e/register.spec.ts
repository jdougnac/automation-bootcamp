import { test, expect } from '@playwright/test';
import { RegisterPage } from '../home.page';


test('registro de usuario', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goTo();
    await registerPage.fillName('Fedro');
    await registerPage.fillLastName('Is the Fest');
    await registerPage.fillEmail('FestFedro@FedroFest.ff');
    await registerPage.fillPassword('FeeFaaFoFoooom');
    // completa los otros pasos usando tu page object...
  });