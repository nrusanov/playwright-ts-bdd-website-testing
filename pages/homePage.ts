import { Page } from "playwright";
import { expect } from "playwright/test";

export class HomePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async navigate () {
        await this.page.goto('https://compendiumdev.co.uk/');
    }

    async isPageTitleAvailable (title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async getMainHeadingText () {
        const mainHeadingElement = await this.page.locator('h1');
        return mainHeadingElement.textContent();
    }

    async isSoftwareDevelopmentAndTestingLinkVisible () {
       return await this.isLinkOnHomePageVisible('//a[@href="https://eviltester.com"]');            
    }

    async isMarketingLinkVisible () {
       return await this.isLinkOnHomePageVisible('(//a[@href="https://talotics.com"])[1]');
    }

    async isIconForSocialMediaVisible (iconNamePlaceholder: string) {    
        const iconElement = this.page.locator(`.topright [src="/images/icons/${iconNamePlaceholder}.png"]`);
        return await iconElement.isVisible();
    }

    async isLinkOnHomePageVisible (linkSelector: string) {
        const linkElement = this.page.locator(linkSelector);
        return await linkElement.isVisible();
    }

}