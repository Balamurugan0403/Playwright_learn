import { test, expect } from '@playwright/test';

test('Simple Alert', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

    let alertMessage = '';

    page.once('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    await page.locator('#alertBox').click();
});

test('Confirmation Alert', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

    let alertMessage = '';

    page.once('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.dismiss();
    });

    await page.locator('#confirmBox').click();

    expect(alertMessage).toBe('Press a button!');

    await expect(page.locator('#output')).toHaveText('You pressed Cancel in confirmation popup');
});

test('Prompt Alert', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

    let alertMessage = '';

    page.once('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.accept('balamurugan');
    });

    await page.locator('#promptBox').click();

    expect(alertMessage).toBe('Please enter your name:');

    await expect(page.locator('#output')).toHaveText('You entered name as balamurugan');
});