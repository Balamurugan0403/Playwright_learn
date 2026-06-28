import {test,expect} from '@playwright/test';
test('login with incorrect email and password',async({page})=>{
    await page.goto("https://automationexercise.com/");
    const title = await page.title();
    await expect(title).toBe("Automation Exercise");
    await page.locator("//a[@href='/login']").click();
    await expect(page.getByRole("heading",{name:"Login to your account"})).toBeVisible();
    await page.locator("//input[@data-qa='login-email']").fill("bala224@gmail.com");
    await page.locator("//input[@placeholder='Password']").fill("balacse@1923");
    await page.getByRole("button",{name:"Login"}).click();
    await expect(page.getByText("Your email or password is incorrect!")).toBeVisible();
});