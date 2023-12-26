Feature: Authentication

Background:
Given I go to the homepage

Scenario: Sign up on website to be successful
When I click on "sign up"
Then I should be able to register

Scenario: Login to website to be successful
When I click on "login"
Then I should be able to login on the website