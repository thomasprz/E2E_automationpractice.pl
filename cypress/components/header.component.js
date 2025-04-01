import BasePage from '../pages/base.page.js'

class HeaderComponent extends BasePage {
    constructor(){
        super()
        this.locatorContactUs = '#contact-link'
        this.locatorSignIn = '.login'
        this.locatorMainTitle = '[title="My Shop"]'
    }

    clickContactUs(){
        cy.get(this.locatorContactUs).click()
    }

    clickSignIn(){
        cy.get(this.locatorSignIn).click()
    }

}

export default HeaderComponent