// @ts-nocheck
const { test, expect } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('Take screenshot', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');
  await percySnapshot(page,"demoblaze homepage");

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
