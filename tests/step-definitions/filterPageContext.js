import * as filterPage from "../pageObjects/filterPage";

module.exports = function () {
    this.Given(/^I filter by option "([^"]*)"$/, function(filterOption){
        filterPage.filterByOption(filterOption);
    });

    this.Given(/^I select colour "([^"]*)"$/, function(colour){
        filterPage.filterByColour(colour);
    });

    this.Given(/^I clear all filters$/, filterPage.clearAllFilters);

    this.When(/^I apply these filters$/, filterPage.applySelectedFilters);
};