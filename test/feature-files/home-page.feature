Feature: Home page functionalities work as expected

@HomePage @HomePage-Test1
Scenario: User can navigate to Home page
    When user navigates to the Home Page URL
    Then Home Page should be navigated
    And user sees the services offered: 'Consultancy, Publishing, Digital Marketing and Software Development'
    And user sees the EvilTester.com and Talotics.com links

@HomePage @HomePage-Test2
Scenario: User can see icons for social media icons in Home page
    When user navigates to the Home Page URL
    Then user sees the following icons for social media and contact: 'email, Twitter, YouTube, LinkedIn, GitHub, Pinterest, Instagram, Facebook, RSS'

@HomePage @HomePage-Test3
Scenario: User can see links for site navigation next to the logo in the header
    When user navigates to the Home Page URL
    Then user sees the following links for navigation next to site logo in the header: 'About, Contact, Join e-mail List, Software Blog, Marketing Blog'    