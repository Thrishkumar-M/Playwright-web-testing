const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');

test('User should be able to logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);

    await productPage.logout();

    await expect(page.locator('#login-button')).toBeVisible();
});