
class nopcommerceLogin {

    loginURL() {
        cy.visit('http://nimithatest-001-site1.ctempurl.com/');   
    }

    clickOnLogin(){
        cy.get('.ico-login').click()
    }

    enterEmail(email) {
        cy.get('#Email').type(email)
    }

    enterPassword(password){
        cy.get('#Password').type(password)
    }

    clickOnLoginButton(){
        cy.get('.buttons').find('.button-1.login-button').click()
    }
}

export default loginPage