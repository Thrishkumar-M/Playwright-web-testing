const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');

test('User can add backpack to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);

    await expect(productPage.pageTitle)
        .toHaveText('Products');

    await productPage.addBackpackToCart();

    await expect(productPage.cartBadge)
        .toHaveText('1');
});