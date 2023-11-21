import { test, expect } from '@playwright/test';

const randomNumber = Math.floor(Math.random() * 1000000);
const randomUser = "randomUser" + randomNumber;
console.log(randomUser);

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill(randomUser);
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('securePassword');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up')).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill(randomUser);
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('securePassword');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: `Welcome ${randomUser}` })).toBeVisible();
});
