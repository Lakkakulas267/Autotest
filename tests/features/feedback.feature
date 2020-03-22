@feedback
Feature: Feedback Page

  Scenario Outline: Page Leading to product description page scenario
    Given I am on the contact page
    When I select "<Heading>", enter "<email>", "<Order reference>", and "<Message>"
    And I submit 
    Then I should see successful message

  Examples:
  |Heading              |email             |Order reference|Message|
  |Customer service     |test1@test.com    |ABC123         |Good   |
  |Webmaster            |test2@test.com    |XYZ456         |Bad    |

