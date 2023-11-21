const { expect } = require('@playwright/test');

const password = "securePassword!";

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
    }

   
    async goto(url) {
        await this.page.goto(url);
    }

    async signUp() {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const randomUser = "randonUser" + randomNumber;

        const signUpHomeButton = this.page.locator("xpath=/html//a[@id='signin2']");
        const userNameSignUp = this.page.locator("input#sign-username");
        const passwordSignUp = this.page.locator("input#sign-password");
        const signUpButton = this. page.getByRole('button', { name: 'Sign up' });

        await signUpHomeButton.click();
        await userNameSignUp.fill(randomUser);
        await passwordSignUp.fill(password);
        await signUpButton.click();
    }    

    async login() {
        const loginHomeButton = this.page.locator('a#login2');
        const userNameLogin = this.page.locator('input#loginusername');
        const passwordLogin = this.page.locator('input#loginpassword');
        const loginButton = this.page.locator("div#logInModal > div[role='document'] .btn.btn-primary");
        
        await loginHomeButton.click();
        await userNameLogin.fill("testuser13433");
        await passwordLogin.fill(password);
        await loginButton.click();
    }
}