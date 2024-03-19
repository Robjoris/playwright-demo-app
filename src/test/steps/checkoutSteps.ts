import { When, Then } from "@cucumber/cucumber";
import { CheckoutPage } from "../pages/checkout.page";

const checkoutPage = new CheckoutPage();

When('I order the samsung galaxy s6', async () =>{
    await checkoutPage.orderSamsungS6();
});

When('I buy a product with name {string}', async (product: string) => {
    await checkoutPage.orderProduct(product);
});

When('I add the product to the cart', async () => {
    await checkoutPage.clickAddToCart();
});

Then('I should have {string} product in the cart', async (amount : string) => {
    await checkoutPage.checkCartAmount(parseInt(amount));
});