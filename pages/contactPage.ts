import { Page } from "playwright";
import { BASE_URL } from "../project-constants/constants";

export class ContactPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(`${BASE_URL}#contactus`);
        await this.page.waitForURL(`${BASE_URL}#contactus`);
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

    async isSiteLogoVisibleInFooter() {
        const siteLogoImage = this.page.locator('//div[@class="copyright-notice"]//img');
        return await siteLogoImage.isVisible();
    }
}   