import { test, expect } from '@playwright/test';

test('verify subscription in home page', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const homepage = await page.title();
    console.log(homepage);
    await expect(homepage).toEqual("Automation Exercise");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByRole("heading", { name: "SUBSCRIPTION" })).toBeVisible();
    await page.locator("#susbscribe_email").fill("david321@gmail.com");
    await page.locator("#subscribe").click();
    await expect(page.getByText("You have been successfully subscribed!")).toBeVisible();
});