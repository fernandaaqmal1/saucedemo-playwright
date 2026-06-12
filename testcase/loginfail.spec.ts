import { test, expect } from '@playwright/test';

test('loginfail', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`- text: Swag Labs`);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secre_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toMatchAriaSnapshot(`
    - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
      - button
      - text: ""
    `);
});