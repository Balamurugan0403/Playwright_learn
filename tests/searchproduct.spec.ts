import { test, expect } from '@playwright/test';

test('searching a product', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const homepage = await page.title();
    console.log(homepage);
    await expect(homepage).toEqual("Automation Exercise");
    await page.locator("//a[@href='/products']").click();
    await expect(page.getByRole("heading", { name: "ALL PRODUCTS" })).toBeVisible();
    await page.locator("#search_product").fill("jeans");
    await page.locator("#submit_search").click();
    await expect(page.getByRole("heading", { name: "SEARCHED PRODUCTS" })).toBeVisible();
    await expect(page.locator(".productinfo")).not.toHaveCount(0);
});