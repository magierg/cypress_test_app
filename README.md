[![CircleCI](https://circleci.com/gh/magierg/cypress_test_app/tree/master.svg?style=svg)](https://circleci.com/gh/magierg/cypress_test_app/tree/master)

# UPDATE - MACIEJ

I have timeboxed this excercise so the framework can be improved.
As the requirements are not availble I have made some assumptions about the expected behaviour when creating issues.
I have added cypress testing library plus few things to run tests in CI.

- [x] Create automation tests
- [x] Report bugs in the issues page -> https://github.com/magierg/cypress_test_app/issues
- [x] Create a CircleCI build - the tests are failing the build which is expected as there are bugs.
- [ ] Add mochawesome reports


# Task Manager - Test Automation Challenge

This application is a task manager and presents a UI for the user to manage their tasks.

## Description

This is an Angular application and allows the users to manage their tasks. The tasks are protected with user credentials. The application doesn't have any server or database connected, so the tasks will get reset on every restart of the application. There is one valid test user Username - user, Password - user which you can use to login with.

Angular CLI Version: 8.0.1 \
Angular Material Version: 8.0.0

## Requirements

Your challenge is to provide a test automation suite for this application.Cypress is the preferred tool to be used for automation , however you can use any other automation tool with which you are comfortable 

The test automation should cover the following scenarios:
1. Login to the application
2. Validate landing page
3. Validate add and remove a task.
4. Validate marking/unmarking a task as done.
5. Validate all tasks page.
6. Validate favorites page.

Expectation from automation suite is, it should be 
- Data driven
- Can be extended to include more features

## Pre-requisites

NodeJS needs to be installed on the system. Check if this is installed by running the command `node --version`. We recommed a version > 10

NPM needs to be installed on the system. Check if this is installed by running the command `npm --version`. We recommend a version > 6

Refer [NodeJS Downloads](https://nodejs.org/en/download/) to download NodeJS for your system.

## Running the application

```javascript

/* First, Install the needed packages */
npm install

/* Then start the application */
npm start

```

This should automatically launch the browser at [http://localhost:4200/](http://localhost:4200/). Feel free to find and report any bugs in the application. Happy testing!
