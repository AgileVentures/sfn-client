Feature: Page Title
   
   As a user
   I should see 'Sing For Needs' as document title for all pages
   Whenever a page loads

   @focus
  Scenario: visitig home page
    Given I visit the home page
    Then I should see 'Sing For Needs' as document title