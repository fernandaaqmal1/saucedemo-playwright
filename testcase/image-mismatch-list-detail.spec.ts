import { test, expect } from '@playwright/test';

test('Verify product image consistency', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Ambil gambar produk di halaman inventory
  const listImage = await page
    .locator('[data-test="item-4-img-link"] img')
    .getAttribute('src');

  // Buka detail produk
  await page.locator('[data-test="item-4-title-link"]').click();

  // Verifikasi nama produk
  await expect(
    page.locator('[data-test="inventory-item-name"]')
  ).toHaveText('Sauce Labs Fleece Jacket');

  // Ambil gambar di halaman detail
  const detailImage = await page
    .locator('.inventory_details_img')
    .getAttribute('src');

  console.log('List Image   :', listImage);
  console.log('Detail Image :', detailImage);

  // Validasi gambar sama
  expect(listImage).toBe(detailImage);
});