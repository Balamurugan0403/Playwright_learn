import {test,expect } from '@playwright/test';

test('frames',async({page})=>{
    await page.goto("https://letcode.in/frame");
    
    const allFrames = page.frames();
    console.log(allFrames.length);

    const frame = page.frame("firstFr");

    const fname = "balamurugan";
    const lname = "S";
    await frame?.locator("input[name='fname']").fill(fname);
    await frame?.locator("input[name='lname']").fill(lname);
    await expect(frame?.locator('//*[@id="root"]/div/div/div[1]/p')).toContainText('balamurugan');
    const innerFrame = frame?.frameLocator("iframe[src='/innerframe']");
    await innerFrame?.locator("input[name='email']").fill('bala@gmail.com');

});