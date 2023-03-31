module.exports = {

    // Scroll to the bottom of the page to load all page content
    async scrollToBottom (page){
    
    // Keep scrolling until no more content is loaded
    while (true) {
        // Scroll to the bottom of the page
        await page.evaluate(() => {
          window.scrollTo(0, document.body.scrollHeight);
        });
  
        // Exit the loop if footer is visible
        if (await page.isVisible("//a[contains(@data-qa, 'footer-link-privacyStatement')]")) {
          break;
        }
      }
    },


    // get a number extracted from the UI inside () parentheses to use for assertions

    async getNumberOfRestaurantsDisplayedOnUI(selector_text){

        const regex = /\((\d+)\)/; // regular expression to extrat the number of restaurants inside parentheses
        const match = regex.exec(selector_text);
        let number_of_restaurants;
    
        if (match) {
          number_of_restaurants = match[1];
          console.log("Total Number of Restaurants Fetched from UI paranthesis (number of retaurants) are ", number_of_restaurants);
        } else {
          console.log("Number of Restaurants are not found");
        }
        
        return number_of_restaurants;
    }

}