import {test,expect } from '@playwright/test';
test("Windows",async({context,page})=>{

    await page.goto("https://demoqa.com/browser-windows")

    console.log("Current Page Url : ", page.url())

    const [newWindow]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("//button[@id='windowButton']").click()
    ])

    await newWindow.waitForLoadState("domcontentloaded")

    console.log("New Window Url : ", newWindow.url())

    await expect(newWindow.locator("//h1[@id='sampleHeading']")).toHaveText("This is a sample page")

    await newWindow.close()

})