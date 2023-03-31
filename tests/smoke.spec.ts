import { test, expect, Page } from "@playwright/test";
const { homepage, listingpage } = require("../pages");
const { data } = require("../constants");
const { general } = require("../helper");


test.describe("lieferando test suite", () => {

  test.beforeEach(async ({ page }, testInfo) => {

    // Open https://www.lieferando.de/en/
    // Search an address and list Restaurant results
    console.log(`Running ${testInfo.title}`);
    await page.goto(data.defaultDomain);
    await page.locator(homepage.acceptPrivacySettingInfo).click();
    await page.locator(homepage.inputAddress).fill(data.address);
    await page.locator(homepage.listLocationSuggestion).click();
  });

  test.only("Select 10,00 € or less as Minimum order amount", async ({ page }) => {

    // Select ‘10,00 € or less’ as Minimum order amount options among radio buttons
    await page.locator(listingpage.radioButton10EuroOrLess).click();

    // Assert radio button is clicked on UI
    console.log("Verify radio button is selected")
    await expect(page.locator(listingpage.radioButton10EuroOrLess)).toBeChecked();

    //Gets the selected radio button text for assertion purpose
    const radio_button_text = await page.locator(listingpage.radioButton10EuroOrLess).textContent();

    // Get number for restaurants that are available on UI of Radio Button after its clicked
    const number_of_restaurants = await general.getNumberOfRestaurantsDisplayedOnUI(radio_button_text);

    // Keep scrolling until no more content is loaded
    await general.scrollToBottom(page);

    // Gets the array list of all the restaunrants having minimum order of 10.00 Euros
    const restaurant_list = await page.locator(listingpage.listOfRestaurants).allTextContents();

    // List of restaurants
    console.log(restaurant_list);

    // Asserting the number of restaurants being displayed on UI are same
    // as number of rastaurants displayed on the radio buttion under ()
    console.log("Verify number of restaurants on UI are equal number mentioned on Radio button paranthesis()")
    expect(restaurant_list.length).toEqual(parseInt(number_of_restaurants, 10));

  });

});

