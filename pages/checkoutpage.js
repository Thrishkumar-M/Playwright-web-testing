class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartItem = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('[data-test="checkout"]');

        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');

        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');

        this.successMessage = page.locator('.complete-header');
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async completeCheckout(firstName, lastName, postalCode) {
        await this.checkoutButton.click();

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);

        await this.continueButton.click();
        await this.finishButton.click();
    }
}

module.exports = { CheckoutPage };