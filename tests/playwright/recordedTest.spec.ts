import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('randomUser747429');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('securePassword');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up')).toBeVisible();
  await page.getByLabel('Sign up').getByLabel('Close').click();
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('randomUser747429');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('securePassword');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome randomUser747429' })).toBeVisible();
});
