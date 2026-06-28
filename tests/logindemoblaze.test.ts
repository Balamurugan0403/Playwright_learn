import { chromium, test } from "@playwright/test";

test("Login Test demo", async () => {
    test.setTimeout(60000);
    
    const browser = await chromium.launch({
        headless: false,
        slowMo: 500
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/");

    const title = await page.title();
    console.log("title: " + title);

    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']", "karthiksiva");
    await page.fill("//input[@id='loginpassword']", "karthiksiva@123");
    await page.click("//button[text()='Log in']");

    await page.waitForTimeout(2000);

    const page1 = await context.newPage();
    await page1.goto("https://www.demoblaze.com/");

    await page.waitForTimeout(2000);

    console.log("moving backward");
    await page.goBack();

    await page.waitForTimeout(2000);

    console.log("moving forward");
    await page.goForward();

    await page.waitForTimeout(2000);

    console.log("page reloads");
    await page.reload();

    await page.waitForTimeout(2000);

    await browser.close();
});