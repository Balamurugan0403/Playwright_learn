import {test,expect } from '@playwright/test';

test('Dropdown Select',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption('#select-demo',{
        value:'Monday'    
    });

    await expect(page.locator('//p[@class="selected-value text-size-14"]')).toHaveText('Day selected :- Monday');
})

test('Dropdown MultiSelect',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption('#multi-select',[
        {label:'Texas'},
        {value:'Washington'}, 
    ]);
})