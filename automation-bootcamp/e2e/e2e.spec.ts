

import { test, expect } from '@playwright/test';
import { RegisterPage } from '../home.page';

const testEmail = 't.mcphillips@outlook.cl';
const authToken = 'mi-token-super-secreto';

test.afterEach(async ({ request }) => {
  // **Consultar el usuario por email:**
  // Aquí se hace el GET, similar a lo que hacíamos en Insomnia.
  const response = await request.get(`https://automation-portal-bootcamp.vercel.app/api/user?email=${testEmail}`);
  const user = await response.json();

  const deleteUser = await request.delete(`https://automation-portal-bootcamp.vercel.app/api/user?email=${testEmail}`);
  //const user2 = await deleteUser.json();

  console.log(user.id); // **Este es el id del usuario encontrado por email**

});


test('debería mostrar un alert luego de registrar', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goToRoot();
  await registerPage.clickKeepMeUpdateModalCloseButton();
  await registerPage.clickProfileIcon();
  await registerPage.goToCreateAccount();


  await registerPage.fillName('tommy');
  await registerPage.fillLastName('McPhillips');
  await registerPage.fillEmail(testEmail);
  await registerPage.fillPassword('password123');
  await registerPage.clickRegisterButton();

  const resultedDialogMessage = await registerPage.waitForAlertAfterSubmit();
  const expectedDialogMessage = "Registration successful! Redirecting to login...";
  expect(resultedDialogMessage).toBe(expectedDialogMessage);
  page.on('dialog', dialog => dialog.accept());
  await page.getByRole('button').click();

  await registerPage.fillLoginEmail(testEmail);
  await registerPage.fillLoginPassword('password123');
  await registerPage.clickLogInButton();
  await registerPage.clickLogo();
  await registerPage.clickKeepMeUpdateModalCloseButton();
  await registerPage.goToFirstProduct();
  await registerPage.pickColor();
  await registerPage.pickSize(); 
  await registerPage.fillAmount("12");
  await registerPage.clickAddToCart();

});
