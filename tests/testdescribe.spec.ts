import { expect, test } from '@playwright/test';

test.describe("Grouping Tests", () => {

    test.describe.skip("Skipping the tests", () => {

        test("register user", async ({ page }) => {
            await page.goto("https://automationexercise.com/");

            const title = await page.title();
            expect.soft(title).toBe("Automation Exercise");

            await page.locator("//a[@href='/login']").click();
            await expect.soft(page.getByText("New User Signup!"))
                .toHaveText("New User Signup!");

            await page.getByRole("textbox", { name: "name" }).fill("bala");
            await page.locator("//input[@data-qa='signup-email']").fill("bala7304@gmail.com");
            await page.getByRole("button", { name: "Signup" }).click();

            await expect.soft(page.getByText("Enter Account Information"))
                .toBeVisible();

            await page.locator("input[name='password']").fill("balacse@123");
            await page.locator("input[name='first_name']").fill("BALAMURUGAN");
            await page.locator("input[name='last_name']").fill("S");
            await page.locator("input[name='address1']").fill("9/165,Eripudur East");
            await page.locator("select[name='country']").selectOption("India");
            await page.locator("input[name='state']").fill("TamilNadu");
            await page.locator("input[name='city']").fill("Salem");
            await page.locator("input[name='zipcode']").fill("636106");
            await page.locator("input[name='mobile_number']").fill("93476834876");

            await page.getByRole("button", { name: "Create Account" }).click();

            await expect.soft(page.getByRole("heading", { name: "Account Created!" }))
                .toBeVisible();

            await page.getByRole("link", { name: "Continue" }).click();

            await expect.soft(page.getByText("Logged in as bala"))
                .toBeVisible();

            await page.getByRole("link", { name: " Delete Account" }).click();

            await expect.soft(page.getByRole("heading", { name: "Account Deleted!" }))
                .toBeVisible();

            await page.getByRole("link", { name: "Continue" }).click();
        });

        test.only("register user using only", async ({ page }) => {
            await page.goto("https://automationexercise.com/");

            const title = await page.title();
            expect.soft(title).toBe("Automation Exercise");

            await page.locator("//a[@href='/login']").click();
            await expect.soft(page.getByText("New User Signup!"))
                .toHaveText("New User Signup!");

            await page.getByRole("textbox", { name: "name" }).fill("bala");
            await page.locator("//input[@data-qa='signup-email']").fill("bala7304@gmail.com");
            await page.getByRole("button", { name: "Signup" }).click();

            await expect.soft(page.getByText("Enter Account"))
                .toBeVisible();

            await page.locator("input[name='password']").fill("balacse@123");
            await page.locator("input[name='first_name']").fill("BALAMURUGAN");
            await page.locator("input[name='last_name']").fill("S");
            await page.locator("input[name='address1']").fill("9/165,Eripudur East");
            await page.locator("select[name='country']").selectOption("India");
            await page.locator("input[name='state']").fill("TamilNadu");
            await page.locator("input[name='city']").fill("Salem");
            await page.locator("input[name='zipcode']").fill("636106");
            await page.locator("input[name='mobile_number']").fill("93476834876");

            await page.getByRole("button", { name: "Create Account" }).click();

            await expect.soft(page.getByRole("heading", { name: "Account Created!" }))
                .toBeVisible();

            await page.getByRole("link", { name: "Continue" }).click();

            await expect.soft(page.getByText("Logged as bala"))
                .toBeVisible();

            await page.getByRole("link", { name: " Delete Account" }).click();

            await expect.soft(page.getByRole("heading", { name: "Account Deleted!" }))
                .toBeVisible();

            await page.getByRole("link", { name: "Continue" }).click();
        });

        test("register user without skip", async ({ page }) => {
            await page.goto("https://automationexercise.com/");

            const title = await page.title();
            expect.soft(title).toBe("Automation Exercise");

            await page.locator("//a[@href='/login']").click();
            await expect.soft(page.getByText("New User Signup!"))
                .toHaveText("New User Signup!");

            await page.getByRole("textbox", { name: "name" }).fill("bala");
            await page.locator("//input[@data-qa='signup-email']").fill("bala7304@gmail.com");
            await page.getByRole("button", { name: "Signup" }).click();

            await expect.soft(page.getByText("Enter Account"))
                .toBeVisible();

            await page.locator("input[name='password']").fill("balacse@123");
            await page.locator("input[name='first_name']").fill("BALAMURUGAN");
            await page.locator("input[name='last_name']").fill("S");
            await page.locator("input[name='address1']").fill("9/165,Eripudur East");
            await page.locator("select[name='country']").selectOption("India");
            await page.locator("input[name='state']").fill("TamilNadu");
            await page.locator("input[name='city']").fill("Salem");
            await page.locator("input[name='zipcode']").fill("636106");
            await page.locator("input[name='mobile_number']").fill("93476834876");

            await page.getByRole("button", { name: "Create Account" }).click();

            await expect.soft(page.getByRole("heading", { name: "Account Created!" }))
                .toBeVisible();

            await page.getByRole("link", { name: "Continue" }).click();

            await expect.soft(page.getByText("Logged as bala"))
                .toBeVisible();

            await page.getByRole("link", { name: " Delete Account" }).click();

            await expect.soft(page.getByRole("heading", { name: "Account Deleted!" }))
                .toBeVisible();

            await page.getByRole("link", { name: "Continue" }).click();
        });

    });

});

