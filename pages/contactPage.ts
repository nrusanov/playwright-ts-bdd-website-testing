import { Page } from "playwright";

export class ContactPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getpageTitle() {
        return await this.page.locator('h2#contact').innerText();
    }

    async isAuthorPhotoVisible() {
        return await this.page.locator('.sized-responsive-wrap').isVisible();
    }

    async getContactEmail() {
        const lastParagraphAllText = await this.page.locator('//html//div[@id="contactus"]/div/div[2]/p[3]').innerText();
        return lastParagraphAllText.substring(lastParagraphAllText.indexOf('"') + 1, lastParagraphAllText.length - 1);
    }
}   