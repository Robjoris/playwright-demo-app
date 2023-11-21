// @ts-check
const { Given, When, Then, After } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { LoginPage } = require('../../../playwright/Pages/Login.page');

Given(/I go to the homepage/, async function()  {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();

    const loginPage = new LoginPage(this.page);
    await loginPage.goto('https://www.demoblaze.com/');
});

When(/I click on login/, async function() {
    const loginPage = new LoginPage(this.page);
    await loginPage.login();
    await expect(this.page.getByRole('link', { name: 'Welcome testuser13433' })).toBeVisible();
});

Then('I should be able to login on the website', async function() {
    await expect(this.page.getByRole('link', { name: 'Welcome testuser13433' })).toBeVisible();
});

When(/I click on sign up/, async function() {
    const loginPage = new LoginPage(this.page);
    await loginPage.signUp();
    await expect(this.page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up')).toBeVisible();
});

Then(/I should be able to register/, async function() {
    await expect(this.page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up')).toBeVisible();
});

After(async function (scenario) {
    this.browser.close();
});