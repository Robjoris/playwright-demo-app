[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Cucumber](https://img.shields.io/badge/Documentation-Cucumber-23d96c.svg?logo=cucumber)](https://cucumber.io/docs/cucumber)
[![GitHub actions](https://img.shields.io/badge/Documentation-GitHub%20Actions-23d96c.svg?logo=github)](https://playwright.dev/docs/ci-intro)
<br>

# Playwright Workshop Template with Typescript - Cucumber - BDD

Workshop Ready: GitHub template project designed for workshops, offering a structured starting point with documentation, sample code, and collaborative features. Accelerate learning and engagement in your workshops with this organized and customizable repository.

## Installation

### Execute if using template

- Install necessary modules
    - `npm i`

### Set-up from scratch

- Open visual studio code
- Click on extensions
- Install plugins
    - [Playwright Test for VSCode](vscode:extension/ms-playwright.playwright)
    - [Cucumber (Gherking) Full Support](vscode:extension/alexkrechik.cucumberautocomplete)
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> => Install Playwright => OK
- Install dependencies: 
    - `npm i @cucumber/cucumber -D`
    - `npm i ts-node -D`
    - `npm i @percy/playwright -D`
    - `npm i @percy/cli -D`
- Create folder `src/test/features` and `src/test/steps`
- Create `cucumber.json` file
- Copy code into `cucumber.json`
    ```json
    {
        "default": {
            "formatOptions": {
                "snippetInterface": "async-await"
            },
            "paths": [
                "src/test/features/"
            ],
            "require": [
                "src/test/steps/*.ts",
                "src/hooks/hooks.ts"
            ],
            "requireModule": [
                "ts-node/register"
            ],
            "format": [
                "html:cucumber-reports/cucumber-report.html"
            ]
        }
    }
    ```

## Test set-up

- To test installation run these commands:
      - `npm cucumber:test`
      - `npm playwright:test`

## Extra's

- Install optional plugins
    - [Playwright Runner](vscode:extension/ortoni.ortoni) -> execute test inside the spec file
    - [Snippets and Syntax Highlight for Gherkin (Cucumber)](vscode:extension/stevejpurves.cucumber) -> Use snippets to create methods and scenario templates

- Make Gherkin steps clickable in feature file
    - Create a `.vscode` folder in the project root
    - Create a `settings.json` file under `.vscode` folder
    - Copy code into the `settings.json` file
    
    ```json
    {
        "cucumberautocomplete.steps": [
            "src/test/steps/*.ts"
        ],
        "cucumberautocomplete.syncfeatures": "src/test/features/*feature", 
        "cucumberautocomplete.strictGherkinCompletion": true
    }
    ```

- Percy set-up 
    - [![Percy visual](https://img.shields.io/badge/Documentation-Percy-23d96c.svg?logo=percy)](https://www.browserstack.com/docs/percy/integrate/playwright)

## Challenges

1. Write a scenario with a scenario outline and examples table
2. Expand github actions yml file for cucumber​ testing and reporting
3. Percy visual regression testing
4. Add extra API testing and use the response in a UI test
5. Fix safari issue in one of the playwright tests
