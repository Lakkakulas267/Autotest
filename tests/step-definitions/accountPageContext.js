import * as accountPage from "../pageObjects/accountPage";

module.exports = function () {

    this.When(/^I enter username as "([^"]*)" and password as "([^"]*)"$/, function(username,password) {
        accountPage.enterEmail(username,password);
    });

    this.Then(/^I should see my account page$/, accountPage.account);

    
};