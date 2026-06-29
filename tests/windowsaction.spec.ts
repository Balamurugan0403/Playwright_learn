import {test,expect } from '@playwright/test';

test("Windows Action",async({context,page})=>{

    await page.goto("https://demoqa.com/browser-windows");

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState();

    const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState();

    const pages = context.pages();

    console.log(pages.length);

    for(const p of pages){
        console.log(p.url());
        console.log(await p.title());
    }


});