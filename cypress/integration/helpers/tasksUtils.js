export const addTask = task => {
    cy.findByPlaceholderText('Task title').type(task.title);
    cy.findByText('Add').click();
    cy.findByText(task.title).should('be.visible');
};

export const removeTask = task => {
    cy.findByText(task.title).should('exist');
    cy.findByText(task.title)
        .parent()
        .within($form => {
            cy.get('.remove-icon').click();
        });
    cy.get('.mat-card-content')
        .contains(task.title)
        .should('not.be.visible');
};

export const markTask = task => {
    cy.findByText(task.title).should('exist');
    cy.findByText(task.title)
        .parent()
        .within($form => {
            cy.get('.mat-checkbox-inner-container').click();
        });
};
