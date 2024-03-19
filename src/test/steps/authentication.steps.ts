// @ts-check
import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { pageFixture } from "../../hooks/pageFixture";

const loginPage = new LoginPage(); 

When('I click on {string}', async function(typeOfLogin) {
    if (typeOfLogin === "login") {
        console.log('login scenario');
        await loginPage.login();
    } else if (typeOfLogin === "sign up") {
        console.log('sign up scenario');
        await loginPage.signUp();
    }
});

Then('I should be able to login on the website', async function() {
    await expect(pageFixture.page.getByRole('link', { name: 'Welcome testuser13433' })).toBeVisible();
});

Then(/I should be able to register/, async function() {
    await expect(pageFixture.page.getByText('New message × Contact Email: Contact Name: Message: Close Send message Sign up')).toBeVisible();
});