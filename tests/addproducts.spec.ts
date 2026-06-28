import { test, expect } from '@playwright/test';

test('add products to cart', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const homepage = await page.title();
    console.log(homepage);
    await expect(homepage).toEqual("Automation Exercise");
    await page.locator("//a[@href='/products']").click();
    await expect(page.getByRole("heading", { name: "ALL PRODUCTS" })).toBeVisible();
    await page.evaluate(()=>window.scroll(0,300));
    await page.locator(".product-image-wrapper").first().hover();
    await page.locator(".productinfo .add-to-cart").first().click();
    await page.locator(".btn-success.close-modal").click();

    await page.locator(".product-image-wrapper").nth(1).hover();
    await page.locator(".productinfo .add-to-cart").nth(1).click();
    await page.locator(".btn-success.close-modal").click();
    await page.locator("a[href='/view_cart']").first().click();

    await expect(page.locator("#cart_info_table tbody tr")).toHaveCount(2);
    await expect(page.locator(".cart_price").first()).toBeVisible();
    await expect(page.locator(".cart_quantity").first()).toBeVisible();
    await expect(page.locator(".cart_total").first()).toBeVisible();
    await expect(page.locator(".cart_price").nth(1)).toBeVisible();
    await expect(page.locator(".cart_quantity").nth(1)).toBeVisible();
    await expect(page.locator(".cart_total").nth(1)).toBeVisible();
});