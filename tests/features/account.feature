@account
Feature: Account Page

  Scenario Outline: Page Leading to account page scenario
    Given I am on the SignIn page
    When I enter username as "<username>" and password as "<password>"
    And I click SignIn
    Then I should see my account page

  Examples:
  |username              |password |
  |test@rest.com         |test123  |
  


