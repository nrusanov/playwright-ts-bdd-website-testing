import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, webkit, Page, LaunchOptions } from "@playwright/test";
import { DEFAULT_TIMEOUT } from "../project-constants/constants";

setDefaultTimeout(DEFAULT_TIMEOUT);

let page: Page;
let browser: Browser;
let context: BrowserContext;

const options: LaunchOptions = {
    headless: false,
};

BeforeAll(async function () {

    const browserType = process.env.BROWSER || 'chromium';

    switch (browserType) {
        case 'firefox':
            browser = await firefox.launch(options);
            break;
        case 'webkit':
            browser = await webkit.launch(options);
            break;
        case 'chromium':
            browser = await chromium.launch(options);
            break;
        default:         
            throw new Error('Invalid browser name');            
    }

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