import { expect, test } from '@playwright/test';
test("register user", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const title = await page.title();
    await expect(title).toBe("Automation Exercise");
    await page.locator(".product-image-wrapper").first().hover();
    await page.locator(".productinfo .add-to-cart").first().click();
    await page.locator(".btn-success.close-modal").click();
    await page.locator("a[href='/view_cart']").first().click();
    await expect(page).toHaveTitle("Automation Exercise - Checkout");
    await page.locator("//i[@class='fa fa-times']").click();
    await page.locator("//b[normalize-space()='Cart is empty!']").isVisible();
});