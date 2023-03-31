const { listingpage } = require("../pages");
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
        if (await page.isVisible(listingpage.footer)) {
          break;
        }
      }
    },

    // Get a number from String extracted from the UI inside () parentheses to use for assertions

    async getNumberOfRestaurantsDisplayedOnUI(str){

        const regex = /\((\d+)\)/; // regular expression to extrat the number of restaurants inside parentheses
        const match = regex.exec(str);
        let numberOfRestaurants;
    
        if (match) {
          numberOfRestaurants = match[1];
          console.log("Total Number of Restaurants Fetched from UI paranthesis (number of retaurants) are ", numberOfRestaurants);
        } else {
          console.log("Number of Restaurants are not found");
        }
        
        return numberOfRestaurants;
    },

    // Get a number from String

    async extractNumberFromString(str) {
        if (!str) return null; // return null if string is null or empty
        const match = str.match(/\d+/); // regular expression to find first occurrence of one or more digits
        return match ? parseInt(match[0], 10) : null; // convert matched string to integer or return null if no match
      }

}