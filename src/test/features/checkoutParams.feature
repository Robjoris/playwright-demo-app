Feature: checkout flow with params

    Background:
        Given I go to the homepage

    Scenario: checkout one product
        When I buy a product with name "Samsung galaxy s6"
        Then I should have "1" product in the cart

    Scenario: checkout multiple products
        When I buy a product with name "Samsung galaxy s6"
        And I buy a product with name "Nexus 6"
        And I buy a product with name "Iphone 6 32gb"
        Then I should have "3" product in the cart