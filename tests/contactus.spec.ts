import { test, expect } from '@playwright/test';
test('contact us form filling', async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const homepage = await page.title();
    console.log(homepage);
    await expect(homepage).toEqual("Automation Exercise");
    await page.locator("//a[normalize-space()='Contact us']").click();
    await expect(page.getByRole("heading", { name: "Get In Touch" })).toBeVisible();
    await page.getByPlaceholder("Name").fill("david");
    await page.locator('[data-qa="email"]').fill("david321@gmail.com");
    await page.getByPlaceholder("Subject").fill("Issue with Order Delivery-order no:23424");
    await page.getByPlaceholder('Your Message Here').fill(
        'Hi Support Team,\n\nI recently placed an order on your website (Order no:23234) and have not received any shipping confirmation or tracking details yet. It has been 5 business days since the order was placed.\n\nCould you please look into this and provide an update at your earliest convenience?\n\nThank you,\nJohn Smith'
    );

    await page.locator("//input[@name='upload_file']").setInputFiles("tests/testdata/Playwright_Complete_Guide.pdf");
    page.on('dialog', async (dialog) => { 
        await dialog.accept();    //listener registered, watching for dialog
    });
    await page.getByRole("button", { name: "submit" }).click();  //after submit button popup appears
    await page.getByRole("link",{name:" Home"}).click();
    await expect(page).toHaveTitle("Automation Exercise");

});