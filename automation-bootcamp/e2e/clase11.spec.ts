import {test, expect} from '@playwright/test'
import { RegisterPage } from '../home.page';

test('e2e', async ({page}) => {
    const homePage = new RegisterPage(page);
    await homePage.goTo();
    await homePage.clickKeepMeUpdatedModalCloseButton();
    await homePage.clickProfileIcon();
    await page.pause();
});