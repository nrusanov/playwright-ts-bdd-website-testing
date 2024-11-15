# Playwright (TS) + Cucumber (BDD) Testing project

This is a UI automation project of website: https://compendiumdev.co.uk/. The project is built with Playwright as a testing library and TypeScript as a programming language and using Cucumber for behaviour driven development (BDD) tool. Project is written with Page Object Model design pattern. More detailed structure below. 

## Prerequisites

Make sure you have node.js installed.

After repository is locally cloned, make sure you have run the following commands (in case installations are not made prior cloning):

1. Install packages from package.json: 

    ```console
    npm i
    ```

2. Install browsers working with Playwright: 

    ```console
    npx playwright install
    ```

## Project structure

1. .vscode directory holds settings.json file for setting relative paths to features and step definitions files.

2. hooks directory contains hooks.ts with logic for hooks that should be executed before and after all run tests and before and after each single test

3. pages directory is for all UI objects and each class there holds page Object and functions for actions on that page.

4. In test directory are features with BDD scenarios and step definition.

5. test-results directory is for HTML reports of test executions.

6. On root directory level: .gitignore, cucumber.json (for cucumber settings), package-lock.json, package.json, Readme file.

## Run tests

I. To run all tests use command:

    npm run test

II. Or you can manage test runs via tags in scenarios

For example if you want to run all the tests from home-page.feature, use a command like so:

    npx cucumber-js --tags "@HomePage"

If you want to run a single test, use its unique tag. For example: 

    npx cucumber-js --tags "@HomePage-Test2"

## Browsers management

Default browser engine is Chromium. 

If you want to change default browser, you can do so by changing the const browserType definition in hooks.ts with the desired default browser, i.e.:

    const browserType = process.env.BROWSER || 'firefox';

Otherwise you can use the same commands for test runs without need to pass explicitly the browser type when you want to do the test run with the default browser.

If you want to run all tests with different from default browser, use these commands:

    BROWSER=firefox npm run test

OR

    BROWSER=webkit npm run test

If you want to run test/s with specific tags, you can use the same commands as with default browser, but with added BROWER=browserType in front of the command. For example:

    BROWSER=webkit npx cucumber-js --tags "@HomePage-Test1"

OR

    BROWSER=webkit npx cucumber-js --tags "@NavigationTests"  

## Reporting

Currently the project saves only HTML report for the run in test-results directory. To open the report navigate to the directory on your machine and open cucumber-report.html file in your browser.

## Test failures

For demonstration purposes there is one failing test - Scenario: User can navigate to Contact section of the site. Email should not contain spaces - currently it's **contact @compendiumdev.co.uk**, but should be: **contact@compendiumdev.co.uk**



