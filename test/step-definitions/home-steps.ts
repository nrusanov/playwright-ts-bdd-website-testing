import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks";
import { HomePage } from "../../pages/homePage";

let homePage: HomePage;

When('user navigates to the Home Page URL', async function () {
  homePage = new HomePage (page);
  await homePage.navigate(); 
})

When('user clicks on {string} link in site header', async function (linkName: string) {
  await homePage.clickLinkInSiteHeadingNavigation(linkName);
})

Then('Home Page should be navigated', async function () {
  await homePage.isPageTitleAvailable('Software Development, Testing and Marketing Consultancy');
})

Then('user sees the services offered: {string}', async function (offeredServices: string) {
  const actualServices = await homePage.getMainHeadingText() as string;
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

Then('user sees the following links for navigation next to site logo in the header: {string}', async function (navigationLinks: string) {
  const expectedVisibleLinksInHeaderArray = navigationLinks.split(',');
  for (let i = 0; i < expectedVisibleLinksInHeaderArray.length; i++) {
    const isLinkVisible =  await homePage.isLinkInSiteHeadingNavigationVisible(expectedVisibleLinksInHeaderArray[i].trim());
    expect(isLinkVisible).toStrictEqual(true);
  }  
})