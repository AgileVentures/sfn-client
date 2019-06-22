Feature: Artists

   As User
   If I click the Artists link
   I should be able to see the artist page
  
  Background: Home page
    Given I am on the home page

   @focus
  Scenario: Visit from artist link on the nav bar
    
    When I click on 'artist' link
    Then I should be on the 'artist' page
  
  @focus
  Scenario: Visit artists page from from link in the footer
    When I click on 'artist' link on the footer
    Then I should be on the 'artist' page