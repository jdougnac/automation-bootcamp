

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
  const user2 = await deleteUser.json();

  console.log(user.id); // **Este es el id del usuario encontrado por email**

  // **Tarea:**
  // Desarrollen la lógica restante:
  // - Usen request.delete para eliminar el usuario utilizando su id.
  // - Implementen la limpieza de datos después del test.
});

test('debería mostrar un alert luego de registrar', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goTo();
  await registerPage.fillName('tommy');
  await registerPage.fillLastName('McPhillips');
  await registerPage.fillEmail(testEmail);
  await registerPage.fillPassword('password123');
  await registerPage.clickRegisterButton();

  const resultedDialogMessage = await registerPage.waitForAlertAfterSubmit();
  const expectedDialogMessage = "Registration successful! Redirecting to login...";
  expect(resultedDialogMessage).toBe(expectedDialogMessage);
});
