import { Then, When } from "@cucumber/cucumber";
import { ContactPage } from "../../pages/contactPage";
import { page } from "../../hooks/hooks";
import { expect } from "playwright/test";
import { BASE_URL } from "../../project-constants/constants";

let contactPage: ContactPage;

Then('contact section should be navigated', function () {
    contactPage = new ContactPage(page);
    const actualPageUrl = contactPage.page.url();
    expect (actualPageUrl).toStrictEqual(`${BASE_URL}#contactus`);
})

Then('user sees Contact title', async function () {
    const actualPageTitle = (await contactPage.getpageTitle()).trim();
    expect(actualPageTitle).toStrictEqual('Contact');
})

Then('user sees a photo of the author', async function () {
    const isAuthorPhotoVisible = await contactPage.isAuthorPhotoVisible();
    expect(isAuthorPhotoVisible).toStrictEqual(true);
})

Then('user sees the contact email: {string}', async function (contactEmail: string) {
    const actualContactEmail = await contactPage.getContactEmail();
    expect(actualContactEmail).toStrictEqual(contactEmail);
})

When('user navigates to the Contact page', async function () {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
})

Then('user sees the site logo in site footer', async function () {
   const isSiteLogoVisible = await contactPage.isSiteLogoVisibleInFooter();
   expect(isSiteLogoVisible).toStrictEqual(true);
})
