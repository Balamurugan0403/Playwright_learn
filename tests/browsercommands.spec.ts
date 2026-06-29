import{chromium,expect,test} from '@playwright/test'

test("Login demoBLaze", async() =>{
    const browser = await chromium.launch({
        headless:false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.demoblaze.com/#');

    const title = await page.title();
    console.log(title);

    const html = await page.content();
    console.log(html.substring(0,300));

    const currentUrl = await page.url();
    console.log(currentUrl);


    //navigation commands

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);

    await page.goBack();
    await page.waitForTimeout(5000);

    await page.goForward();
    await page.waitForTimeout(5000);

    await page.reload();

    await browser.close();
});