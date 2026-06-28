import { expect, test } from '@playwright/test';
test("register with existing email", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const title = await page.title();
    await expect(title).toBe("Automation Exercise");
    await page.locator("//a[@href='/login']").click();
    await expect(page.getByText("New User Signup!")).toHaveText("New User Signup!");
    await page.getByRole("textbox", { name: "name" }).fill("bala");
    await page.locator("//input[@data-qa='signup-email']").fill("bala7994@gmail.com");
    await page.getByRole("button", { name: "Signup" }).click();
    await expect(page.getByText("Email Address already exist!")).toBeVisible();
});