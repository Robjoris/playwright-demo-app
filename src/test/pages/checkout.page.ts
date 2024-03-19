import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { CommonPage } from "./common.page";

const commonPage = new CommonPage();

export class CheckoutPage {

    async orderSamsungS6(){
        await pageFixture.page.waitForTimeout(2000); 
        const product = pageFixture.page.getByRole('link', { name: 'Samsung galaxy s6' });
        await product.click();
    }

    async orderProduct(productName:string) {
        const product = pageFixture.page.getByRole('link', { name: productName });
        await product.click();
        await this.clickAddToCart();
        await commonPage.goToHomepage();
    }

    async clickAddToCart() {
        await pageFixture.page.waitForTimeout(3000); 
        const cartBtn = pageFixture.page.locator(".btn-success");
        await cartBtn.click();
    }

    async clickCartPage() {
        const cartNavBtn = pageFixture.page.locator('a#cartur');
        await cartNavBtn.click();
    }

    async checkCartAmount(amount: number) {
        await this.clickCartPage();
        await expect(pageFixture.page.locator('.success')).toHaveCount(amount);
    }

}