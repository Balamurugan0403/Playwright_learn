import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await expect(page1.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page1.getByRole('link', { name: 'Log in' }).click();
  await expect(page1.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page1.locator('#loginusername').click();
  await page1.locator('#loginusername').click();
  await page1.locator('#loginusername').fill('karthiksiva');
  await expect(page1.getByRole('img', { name: 'Second slide' })).toBeVisible();

  await page1.locator('#loginpassword').click();
  await page1.locator('#loginpassword').fill('karthik@123');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await expect(page1.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page1.getByRole('link', { name: 'Welcome karthiksiva' }).click();