import * as homePage from "../pageObjects/homePage";

module.exports = function () {

    this.Given(/^I am on the home page$/, homePage.goHome);

    this.Given(/^I am on the SignIn page$/, homePage.SignIn);

    this.Given(/^I am on the contact page$/, homePage.contactPage);

    this.When(/^I click on cart$/, homePage.clickCart);

    this.When(/^I go to home page$/, homePage.gotoHomePage);

    this.When(/^I click SignIn$/, homePage.clickSignIn);
     
};
 