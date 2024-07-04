import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Browser, Page, chromium } from "playwright";
import { HomePage } from "../../pages/homePage";
import { page } from "../../hooks/hooks";

//let browser: Browser;
//let page: Page;

When('user navigates to the Home Page URL', async function () {
//    browser = await chromium.launch({headless: false});
//    page = await browser.newPage();

    await page.goto('https://compendiumdev.co.uk/');
});

Then('Home Page should be navigated', async function () {
  await page.pause();
  await expect(page).toHaveTitle('Software Development, Testing and Marketing Consultancy');
  //await browser.close();
})
