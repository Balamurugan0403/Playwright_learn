import {test,expect} from '@playwright/test'
test("verify move to test case page",async({page})=>{
   await page.goto("http://automationexercise.com");
   await expect(page).toHaveTitle("Automation Exercise");
   await page.locator("//a[contains(text(),'Test Cases')]").click();
   const testpagetitle=await page.title();
   console.log(testpagetitle);
   await expect(testpagetitle).toEqual("Automation Practice Website for UI Testing - Test Cases");
});