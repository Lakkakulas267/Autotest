import * as contactPage from "../pageObjects/contactPage";

module.exports = function () {

    this.When(/^I select "([^"]*)", enter "([^"]*)", "([^"]*)", and "([^"]*)"$/, function(heading,email,reference,message) {
        contactPage.enterFeedbackDetails(heading,email,reference,message);
    });
    

    this.When(/^I submit$/, contactPage.submit);

    this.Then(/^I should see successful message$/, contactPage.success);
};

