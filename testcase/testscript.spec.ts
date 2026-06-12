import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="login-container"]')).toMatchAriaSnapshot(`
    - textbox "Username"
    - textbox "Password"
    - button "Login"
    `);
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});