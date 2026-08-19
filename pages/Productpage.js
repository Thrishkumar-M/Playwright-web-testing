class ProductPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');

        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
}
}

module.exports = { ProductPage };