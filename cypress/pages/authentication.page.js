import data from '../fixtures/authentication.json'
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
        this.locatorErrorLoginMessage = '.alert-danger:nth-child(2)'
        this.locatorErrorRegister = '.clearfix .alert-danger'

    }

    expectAuthenticationPage() {
        cy.url().should('include', 'controller=authentication')
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

    expectErrorAuthentification(){
        cy.get(this.locatorErrorLoginMessage).should('be.visible').and('contain.text',data.login_error)
    }

    expectErrorExistingEmailSignup(){
        cy.get(this.locatorErrorRegister).should('be.visible').and('contain.text',data.email_exist_error)
    }

}

export default AuthenticationPage