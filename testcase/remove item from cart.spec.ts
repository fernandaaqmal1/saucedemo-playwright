import { test, expect } from '@playwright/test';

test('remove item from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="item-3-img-link"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toMatchAriaSnapshot(`
    - text: /Test\\.allTheThings\\(\\) T-Shirt \\(Red\\) This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests\\. Super-soft and comfy ringspun combed cotton\\. \\$\\d+\\.\\d+/
    - button "Add to cart"
    `);
  await page.locator('[data-test="item-test.allthethings()-t-shirt-(red)-img"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toMatchAriaSnapshot(`
    - text: /Sauce Labs Bike Light A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
    - button "Add to cart"
    `);
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
});