import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('karthiksiva');
  await expect(page.getByRole('img', { name: 'First slide' })).toBeVisible();

  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('karthik@123');
  await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();

  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Log in' }).dblclick();
  await expect(page.getByRole('link', { name: 'Home (current)' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome karthiksiva');
});