import { test, expect } from '@playwright/test';

test('add product with quantity to cart', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const homepage = await page.title();
    console.log(homepage);
    await expect(homepage).toEqual("Automation Exercise");
    await page.locator("//a[normalize-space()='View Product']").first().click();
    await expect(page).toHaveURL(/.*product_details.*/);
    await page.locator("#quantity").clear();
    await page.locator("#quantity").fill("4");
    await page.locator(".btn.btn-default.cart").click();
    await page.locator("//u[normalize-space()='View Cart']").click();
    await expect(page.locator(".cart_quantity button")).toHaveText("4");
});