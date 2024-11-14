import { Page, Locator } from "playwright";
import { BASE_URL } from "../project-constants/constants";

export class ContactPage {

    readonly page: Page;
    private pageTitle: Locator;
    private authorPhoto: Locator;
    private lastParagraph: Locator;
    private siteLogoImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('h2#contact');
        this.authorPhoto = page.locator('.sized-responsive-wrap');
        this.lastParagraph = page.locator('//html//div[@id="contactus"]/div/div[2]/p[3]');
        this.siteLogoImage = page.locator('//div[@class="copyright-notice"]//img');
    }

    async navigate() {
        await this.page.goto(`${BASE_URL}#contactus`);
        await this.page.waitForURL(`${BASE_URL}#contactus`);
    }

    async getpageTitle() {
        return await this.pageTitle.textContent(); 
    }

    async isAuthorPhotoVisible() {
        return await this.authorPhoto.isVisible();
    }

    async getContactEmail() {
        const lastParagraphAllText = await this.lastParagraph.innerText();
        return lastParagraphAllText.substring(lastParagraphAllText.indexOf('"') + 1, lastParagraphAllText.length - 1);
    }

    async isSiteLogoVisibleInFooter() {
        return await this.siteLogoImage.isVisible();
    }
}   