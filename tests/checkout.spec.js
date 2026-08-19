const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('User can complete checkout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await productPage.addBackpackToCart();

    await checkoutPage.openCart();

    await expect(checkoutPage.cartItem)
        .toHaveText('Sauce Labs Backpack');

    await checkoutPage.completeCheckout(
        'Thrish',
        'Kumar',
        '600001'
    );

    await expect(checkoutPage.successMessage)
        .toHaveText('Thank you for your order!');
});