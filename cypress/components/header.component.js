import BasePage from '../pages/base.page.js'

class HeaderComponent extends BasePage {
    constructor(){
        super()
        this.locatorContactUs = '#contact-link'
        this.locatorSignIn = '.login'
        this.locatorMainTitle = '[title="My Shop"]'
        this.locatorLoggedIn = '.account'
        this.locatorSignout = '.logout'
    }

    clickContactUs(){
        cy.get(this.locatorContactUs).click()
    }

    clickSignIn(){
        cy.get(this.locatorSignIn).click()
    }

    expectLoggedIn(firstname,lastname){
        cy.get(this.locatorLoggedIn).should('have.text',`${firstname} ${lastname}`)
    }

    expectLoggedOff() {
        cy.get(this.locatorSignIn).should('be.visible');
    }

    clickSignOut(){
        cy.get(this.locatorSignout).click()
    }

}

export default HeaderComponent