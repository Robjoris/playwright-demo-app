import { pageFixture } from "../../hooks/pageFixture";

export class CommonPage {
    
    async goto(url:string) {
        await pageFixture.page.goto(url);
    }

    async goToHomepage() {
        await pageFixture.page.waitForTimeout(2000); 
        const homepage = pageFixture.page.locator('a#nava');
        await homepage.click();
    }
}