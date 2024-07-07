Feature: Site navigations work as expected

@NavigationTests @Navigation-Test1
Scenario: User can navigate to Contact section of the site
    Given user navigates to the Home Page URL
    When user clicks on 'contact' link in site header
    Then contact section should be navigated
    And user sees Contact title 
    And user sees a photo of the author
    And user sees the contact email: 'contact@compendiumdev.co.uk'