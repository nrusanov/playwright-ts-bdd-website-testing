import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, LaunchOptions, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let page: Page;
let browser: Browser;
let context: BrowserContext;

const options: LaunchOptions = {
    headless: false,
};

BeforeAll(async function () {
    browser = await chromium.launch(options);
    context = await browser.newContext();
});

Before(async function () {
    page = await context.newPage();
});

After(async function () {
    await page.close();
});

AfterAll(async function () {
    await context.close();
    await browser.close();
});

export {
    page,
    browser,
};