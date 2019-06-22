import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Given('I visit the home page', () => {
  cy.visit('/')
})
Then("I should see 'Sing For Needs' as document title", () => {
  cy.title().should('contain', 'Sing for Needs')
})
