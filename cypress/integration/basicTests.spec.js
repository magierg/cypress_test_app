import users from '../support/users.json';
import tasks from '../support/tasks.json';

describe('Storybook', () => {
    context('Tasks', () => {
        beforeEach(() => {
            cy.visit('/login');
            cy.loginAs(users.user1);
        });

        it('can add/remove task', () => {
            cy.addTask(tasks.task1);
            cy.removeTask(tasks.task1);
        });

        it('can mark/unmark task', () => {
            cy.addTask(tasks.task1);
            cy.clickTask(tasks.task1);
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
            cy.clickTask(tasks.task1);
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

        it('can navigate to All Tasks', () => {
            cy.visit('/nav/all-tasks');
            cy.get('.mat-elevation-z6')
                .contains('All Tasks')
                .should('be.visible');
        });

        it('can navigate to Important Tasks', () => {
            cy.visit('/nav/important-tasks');
            cy.get('.mat-elevation-z6')
                .contains('Important Tasks')
                .should('be.visible');
        });
    });
});
