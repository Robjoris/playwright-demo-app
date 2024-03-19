import { Given } from "@cucumber/cucumber";
import { CommonPage } from "../pages/common.page";

const commonPage = new CommonPage();

Given(/I go to the homepage/, async function()  {
    commonPage.goto('https://www.demoblaze.com/');
});