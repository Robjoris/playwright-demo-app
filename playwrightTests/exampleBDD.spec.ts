import { test } from "@playwright/test";
import { LoginPlaywrightPage } from "./pages/loginPage";

test("Sign up to site", async ({ page }) => {
  const loginPage = new LoginPlaywrightPage(page);

  await loginPage.goto("https://www.demoblaze.com/");
  await loginPage.signUp();
});

test("Login to site", async ({ page }) => {
  const loginPage = new LoginPlaywrightPage(page);

  await loginPage.goto("https://www.demoblaze.com/");
  await loginPage.login();
});
