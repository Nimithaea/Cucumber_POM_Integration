/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../Pages/loginPage'

beforeEach(function() {
    cy.fixture('loginData').as('data')
})

const LoginPage= new loginPage()

Given('User is on the login page', function() {
    LoginPage.loginURL()
   })

When('User clicks on login button', function(){
    LoginPage.clickOnLogin()
})

When('User enter valid email id and password', function() {
    LoginPage.enterEmail(this.data.email)
    LoginPage.enterPassword(this.data.password)

})

