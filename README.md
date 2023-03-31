# UI Testing with Playwright

This is a project for creating automated UI tests using Playwright with TypeScript.

## Prerequisites

* [Node.js](https://nodejs.org/en/download) - Download and install Node.js on your local machine

## Installation

Once you have installed Node.js successfully, you can execute following command to install playwright in your local machine

#### Using init command

```Shell
npm init playwright@latest
```
To get some help from official documentation of playwright in order to install it, please visit https://playwright.dev/docs/intro

## Getting Started

Following instructions will help you running the project. First of all, checkout/clone this project from master branch on your local machine.

Application under test is : https://www.lieferando.de/en

## Project Structure

>constants: This directory contains constants including baseUrl

>helper: This directory contains util methods

>pages: This directory contains all the UI selectors

>tests: This directory contains Test cases suite

### Execute Tests Invoking a Browser (Firefox for example)

Run the following command in Terminal to execute tests.

```sh
$ npx playwright test
```

Or Run the following command

```sh
$ npm run test
```

This will invoke a browser which should be installed by playwright already during installation process and should execute tests.

### Execute Tests Invoking a Chromium UI Window

Run the following command in Terminal to execute invoking a Chromium UI Window.

```sh
$ npx playwright test --ui
```

This will invoke a ui tab, you can manually press play icon to execute the test suite and see the recording playlist within the window.

### Execute Tests in Headless Mode

Go to playwright.config.ts file, search for "headless" config and set it as true. Then execute following command

```sh
$ npx playwright test
```

Or run following command

```sh
$ npm run test
```

This will execute tests in headless mode

### Test Report

You can find the test reports under following directories
```sh
/playwright-report
```
Or
```sh
/test-results
```
