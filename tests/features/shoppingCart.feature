@cart
Feature: Shopping Cart Page

  Scenario: Page Leading to shopping cart scenario
    Given I am on the home page
    When I click on cart
    Then I should see shopping cart page

  Scenario Outline: Adding products to shopping cart scenario
    Given I am on the home page
    When I scroll to and click on product "<product1>"
    And I click on add to cart
    And I go to home page
    And I scroll to and click on product "<product2>"
    And I click on add to cart
    And I go to home page
    And I click on cart
    Then I should see "<product1>", "<product2>" items in the cart

  Examples:
  |product1|product2                   |
  |Blouse  |Faded Short Sleeve T-shirts|


