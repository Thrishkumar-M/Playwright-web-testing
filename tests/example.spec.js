const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Verify successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
});