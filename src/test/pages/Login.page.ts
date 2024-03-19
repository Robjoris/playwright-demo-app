import { setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

const password = "securePassword!";

setDefaultTimeout(60 * 1000 * 2);

export class LoginPage {
    
    async signUp() {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const randomUser = "randonUser" + randomNumber;

        const loginButton = pageFixture.page.locator("a#signin2");
        const loginForm = pageFixture.page.locator("div#signInModal  .modal-content");
        const userNameSignUp = pageFixture.page.locator("input#sign-username");
        const passwordSignUp = pageFixture.page.locator("input#sign-password");
        const signUpButton = pageFixture.page.getByRole('button', { name: 'Sign up' });

        await pageFixture.page.waitForTimeout(3000);
        await loginButton.click();
        await loginForm.isVisible();
        await userNameSignUp.fill(randomUser);
        await passwordSignUp.fill(password);
        await signUpButton.click();
    }    

    async login() {
        await pageFixture.page.waitForTimeout(3000);       
        await pageFixture.page.locator('a#login2').click();
        await pageFixture.page.locator("div#logInModal  .modal-content").isVisible();
        await pageFixture.page.locator('input#loginusername').fill("testuser13433");
        await pageFixture.page.locator('input#loginpassword').fill(password);
        await pageFixture.page.locator("div#logInModal > div[role='document'] .btn.btn-primary").click();
    }
}