/// <reference types="cypress" />

Cypress.Commands.add('login', (username, password)=>{
    cy.visit('https://demo.mahara.org/') 
    cy.get('#login_login_username').type(username, {delay:100}).should('have.value', username)
    cy.get('#login_login_password').type(password, {delay:100}).should('have.value', password)    
    cy.get('#login_submit').click()
    cy.get('h1').should('have.text', 'About this demo site')
})

describe('Cypress Learning Examples', () => {
    beforeEach(() => {
        cy.login('admin', 'MaharaDemo')
    }) 
    it('Test case 1 -- logout test', () => {
        cy.get('.user-toggle > .icon').click()
        cy.get('#logoutbutton > .nav-title').click()
        cy.get('.alert').should('have.text', 'You have been logged out successfully')
  
    })      
})
  