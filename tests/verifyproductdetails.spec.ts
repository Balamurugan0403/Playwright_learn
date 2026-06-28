import { test, expect } from '@playwright/test';

test('verify product details', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const homepage = await page.title();
    console.log(homepage);
    await expect(homepage).toEqual("Automation Exercise");
    await page.locator("//a[@href='/products']").click();
    await expect(page.getByRole("heading", { name: "ALL PRODUCTS" })).toBeVisible();
    await expect(page.locator(".productinfo")).not.toHaveCount(0);
    await page.locator("//a[normalize-space()='View Product']").first().click();
    await expect(page).toHaveURL(/.*product_details.*/);
    await expect(page.locator(".product-information h2")).toBeVisible();
    await expect(page.locator(".product-information p").filter({ hasText: "Category" })).toBeVisible();
    await expect(page.locator(".product-information span span")).toBeVisible();
    await expect(page.locator(".product-information p").filter({ hasText: "Availability" })).toBeVisible();
    await expect(page.locator(".product-information p").filter({ hasText: "Condition" })).toBeVisible();
    await expect(page.locator(".product-information p").filter({ hasText: "Brand" })).toBeVisible();
});