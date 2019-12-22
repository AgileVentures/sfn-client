import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
/* global Cypress */
Cypress.on('window:before:load', win => {
  win.gapi = { load: cy.stub().as('load') }
})

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

/**
 * Disable css smooth scroll, that doesn't plays nice with cypress.
 * See https://github.com/cypress-io/cypress/issues/3200
 */
const disableSmoothScroll = () => {
  cy.document().then(document => {
    const node = document.createElement('style')
    node.innerHTML = 'html { scroll-behavior: inherit !important; }'
    document.body.appendChild(node)
  })
}

Given('I am on the home page', () => {
  cy.visit('/')
})

When("I click on 'artist' link", () => {
  disableSmoothScroll()
  cy.get('.nav-container__left')
    .find('a')
    .contains('Artists')
    .click()
})

When("I click on 'artist' link on the footer", () => {
  disableSmoothScroll()
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
