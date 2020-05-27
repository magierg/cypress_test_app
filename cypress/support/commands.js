// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('loginAs', user => {
    cy.findByPlaceholderText('Email').type(user.email);
    cy.findByPlaceholderText('Password').type(user.password);
    cy.findByText('Login').click();
    cy.get('.mat-elevation-z6')
        .contains('My day')
        .should('be.visible');
});

Cypress.Commands.add('addTask', task => {
    cy.findByPlaceholderText('Task title').type(task.title);
    cy.findByText('Add').click();
    cy.findByText(task.title).should('be.visible');
});

Cypress.Commands.add('removeTask', task => {
    cy.findByText(task.title).should('exist');
    cy.findByText(task.title)
        .parent()
        .within($form => {
            cy.get('.remove-icon').click();
        });
    cy.get('.mat-card-content')
        .contains(task.title)
        .should('not.be.visible');
});
Cypress.Commands.add('clickTask', task => {
    cy.findByText(task.title).should('exist');
    cy.findByText(task.title)
        .parent()
        .within($form => {
            cy.get('.mat-checkbox-inner-container').click();
        });
});
