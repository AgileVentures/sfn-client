import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Given('I am on the home page', () => {
  cy.visit('/')
})

When("I click on 'artist' link", () => {
  cy.get('.nav-container__left')
    .find('a')
    .contains('Artists')
    .click()
})

When("I click on 'artist' link on the footer", () => {
  cy.get('.footer__container')
    .find('nav')
    .find('a')
    .contains('Artists')
    .click()
})

Then("I should be on the 'artist' page", () => {
  cy.url().should('contain', '/artists')
  cy.get('.trending-artists-title').should('contain', 'Trending Artists')
  cy.get('.explore-artists-title').should('contain', 'Explore Artists')
})

Then("I should see 'Sing For Needs' as document title", () => {
  cy.title().should('contain', 'Sing for Needs')
})
