Feature: checkout flow

    Background:
        Given I go to the homepage

    Scenario: checkout one product
        When I order the samsung galaxy s6
        And I add the product to the cart
        Then I should have "1" product in the cart
