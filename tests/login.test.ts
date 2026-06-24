import {test,expect} from '@playwright/test';
test('Login Test',async({page})=>{
    await page.goto(
        process.env.BASE_URL!
    );
    await page.fill(
        '#username',
        process.env.USERNAME!
    );
    await page.fill(
        '#password',
        process.env.PASSWORD!
    );
    await page.click(
        'button[type="submit"]'
    );
    
});
test('Invalid Test',async({page})=>{
    await page.goto(
        process.env.BASE_URL!
    );
    await page.fill(
        '#username',
        process.env.INVALID_USERNAME!
    );
    await page.fill(
        '#password',
        process.env.INVALID_PASSWORD!
    );
    await page.click(
        'button[type="submit"]'
    );
});