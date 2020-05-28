import users from '../fixtures/users.json';
import tasks from '../fixtures/tasks.json';
import { addTask, removeTask, markTask } from './helpers/tasksUtils';

describe('Tasks App', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.loginAs(users.user1);
    });
    context('Task actions', () => {
        it('can add/remove task', () => {
            addTask(tasks.task1);
            removeTask(tasks.task1);
        });
        it('can mark/unmark task', () => {
            addTask(tasks.task1);
            cy.log('Mark task');
            markTask(tasks.task1);
            cy.findByText(tasks.task1.title).should(
                'have.css',
                'text-decoration-line',
                'line-through',
            );
            cy.findByText(tasks.task1.title)
                .parent()
                .within($form => {
                    cy.get('.mat-checkbox-inner-container').should(
                        'be.checked',
                    );
                });
            cy.log('Unmark task');
            markTask(tasks.task1);
            cy.findByText(tasks.task1).should(
                'not.have.css',
                'text-decoration-line',
                'line-through',
            );
            cy.findByText(tasks.task1.title)
                .parent()
                .within($form => {
                    cy.get('.mat-checkbox-inner-container').should(
                        'be.checked',
                    );
                });
        });
    });
    context('Pages', () => {
        it('can navigate to All Tasks psge', () => {
            cy.visit('/nav/all-tasks');
            cy.get('.mat-elevation-z6')
                .contains('All Tasks')
                .should('be.visible');
        });
        it('can navigate to Important Tasks page', () => {
            cy.visit('/nav/important-tasks');
            cy.get('.mat-elevation-z6')
                .contains('Important Tasks')
                .should('be.visible');
        });
    });
});
