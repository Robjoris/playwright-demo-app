Feature: Authentication

Scenario: Sign up on website
Given I go to the homepage
When I click on sign up
Then I should be able to register

Scenario: Login to website
Given I go to the homepage
When I click on login
Then I should be able to login on the website