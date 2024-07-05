import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";
import { HomePage } from "../../pages/homePage";

let homePage: HomePage;

When('user navigates to the Home Page URL', async function () {
  homePage = new HomePage (page);
  await homePage.navigate(); 
});

Then('Home Page should be navigated', async function () {
  await homePage.isPageTitleAvailable('Software Development, Testing and Marketing Consultancy');
})

Then('user sees the services offered: {string}', async function (offeredServices: string) {
  let actualServices = await homePage.getMainHeadingText() as string;
  expect(offeredServices).toStrictEqual(actualServices.trim());
})

Then('user sees the EvilTester.com and Talotics.com links', async function () {
  const evilTesterLinkIsVisible = await homePage.isSoftwareDevelopmentAndTestingLinkVisible();
  const marketingLinkIsVisible = await homePage.isMarketingLinkVisible();
  expect(evilTesterLinkIsVisible).toStrictEqual(true);
  expect(marketingLinkIsVisible).toStrictEqual(true);
})

Then('user sees the following icons for social media and contact: {string}', async function (expectedVisibleIcons: string) {
  const expectedVisibleIconsArray = expectedVisibleIcons.toLowerCase().split(',');
  for (let i = 0; i < expectedVisibleIconsArray.length; i++) {
    const isIconVisible =  await homePage.isIconForSocialMediaVisible(expectedVisibleIconsArray[i].trim());
    expect(isIconVisible).toStrictEqual(true);
  }
})
