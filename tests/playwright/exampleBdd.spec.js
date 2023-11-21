// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/Login.page');

test('Sign up to site', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto('https://www.demoblaze.com/');
  await loginPage.signUp();
});

test('Login to site', async ({page}) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto('https://www.demoblaze.com/');
  await loginPage.login();
});