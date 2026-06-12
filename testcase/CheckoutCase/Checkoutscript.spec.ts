import { test, expect } from '@playwright/test';

test('Checkoutscript', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`- text: Swag Labs`);
  await expect(page.locator('#login_button_container')).toMatchAriaSnapshot(`
    - textbox "Username"
    - textbox "Password"
    - button "Login"
    `);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="primary-header"]')).toMatchAriaSnapshot(`- text: Swag Labs`);
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');await page.locator('body').click();
  await page.locator('[data-test="item-2-title-link"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toMatchAriaSnapshot(`
    - text: /Sauce Labs Onesie Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
    - button "Add to cart"
    `);
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toMatchAriaSnapshot(`- text: Your Cart`);
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toMatchAriaSnapshot(`- text: "Checkout: Your Information"`);
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('fernanda');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('aqmal');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('40394');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toMatchAriaSnapshot(`- text: "Checkout: Overview"`);
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="checkout-complete-container"]')).toMatchAriaSnapshot(`
    - img "Pony Express"
    - heading "Thank you for your order!" [level=2]
    - text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
    - button "Back Home"
    `);
  await expect(page.locator('[data-test="checkout-complete-container"]')).toMatchAriaSnapshot(`
    - img "Pony Express"
    - heading "Thank you for your order!" [level=2]
    - text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
    - button "Back Home"
    `);
});