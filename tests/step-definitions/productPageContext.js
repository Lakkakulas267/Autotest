import * as productPage from "../pageObjects/productPage";

module.exports = function () {

    this.Then(/^I should see the product description page for "([^"]*)"$/, function(product) {
        productPage.seeProductPage(product);
    });

    this.When(/^I scroll to and click on product "([^"]*)"$/, function(product) {
        productPage.gotoProduct(product);
    });

    this.When(/^I click on add to cart$/, productPage.clickAddToCart);


    // this.Given(/^I am viewing product list "([^"]*)"$/, function(product) {
    //     productPage.gotoProductPage(product);
    // });
    //
    // this.Given(/^I filter the product list$/, productPage.clickOnFilterTab);
    //
    // this.Then(/^I should see filter button has "([^"]*)" filter$/, function(numberOfFilters){
    //     productPage.numberOfFiltersApplied(numberOfFilters);
    // });
    //
    // this.Then(/^I should see filter returns a product list$/, productPage.hasProductList);
    //
    // this.Then(/^I should see filter button has no filters$/, productPage.hasNoFilters);
};

