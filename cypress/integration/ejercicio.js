//<reference types="cypress" />


it('visit welcome Shifting Content',() => {

    cy.visit ('https://the-internet.herokuapp.com')
    cy.get(':nth-child(39) > a').type("Shifting Content")
    cy.get('.fa').click()
    cy.get('[href="/shifting_content/menu"]').type("Example 1: Menu Element")
    //cy.get('[href="/shifting_content/image"]').type("Example 2: An image")
    //cy.get('[href="/shifting_content/list"]').type("Example 2: An image")
    cy.get('.fa').click()

    cy.get(':nth-child(1) > a')
    cy.get(':nth-child(7) > :nth-child(2) > a')
    cy.get(':nth-child(7) > :nth-child(3) > a')
    cy.get(':nth-child(7) > :nth-child(4) > a')
    cy.get('.shift')
})
           