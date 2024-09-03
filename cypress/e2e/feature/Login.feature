Feature: nopcommerce Login Functionality 

  Scenario: Login and Logout with Valid Credentials
    Given User is on the login page
    When User clicks on login button
    And User enter valid email id and password
    And User click on the Log in  button
    And User click on Logout button
    Then User should be routed back to login page