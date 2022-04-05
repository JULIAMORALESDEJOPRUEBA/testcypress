///<reference types="cypress" />


it('valid user can login',() => {


cy.visit ('https://the-internet.herokuapp.com/login')
cy.get('#username').type("tomsmith")
cy.get('#password').type ("SuperSecretPassword!")
cy.get('.fa').click()
//cy.get('#flash').constains(" You logged into a secure area!")
})


it('valid user can login',() => {


    cy.visit ('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("toms mith")
    cy.get('#password').type ("SupeSecretPassword!")
    cy.get('.fa').click()
    //cy.get('#flash').constains("  Your username is invalid!")
    })