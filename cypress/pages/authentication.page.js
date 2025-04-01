import BasePage from './base.page'

class AuthenticationPage extends BasePage {
    constructor(){
        super()
        this.locatorAuthenticationTitle = '.page-heading'
        this.locatorEmailLoginInput = '#email'
        this.locatorPasswordInput = '#passwd'
        this.locatorEmailRegisterInput = '#email_create'
        this.locatorCreateAccountButton = '#SubmitCreate'
        this.locatorSignInButton = '#SubmitLogin'
        this.locatorForgotPasswordLink = '.lost_password'
    }

    expectAuthenticationPage(){
        cy.url().should('include', 'my-account')
    }

    fillCreateAccountForm(email){
        cy.get(this.locatorEmailRegisterInput).type(email)
        cy.get(this.locatorCreateAccountButton).click()
    }

    fillLoginForm(email, password){
        cy.get(this.locatorEmailLoginInput).type(email)
        cy.get(this.locatorPasswordInput).type(password)
        cy.get(this.locatorSignInButton).click()
    }

}

export default AuthenticationPage