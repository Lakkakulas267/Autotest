import * as cartPage from "../pageObjects/cartPage";

module.exports = function () {
    
    this.Then(/^I should see shopping cart page$/, cartPage.onCartPage);

    this.Then(/^I should see "([^"]*)", "([^"]*)" items in the cart$/, function(product1,product2){
        cartPage.seeProductInCart(product1,product2);
    });

};

