import BasePage from '../pages/base.page.js'

class HeaderComponent extends BasePage {
    constructor(){
        super()
        this.locatorContactUs = '#contact-link'
        this.locatorSignIn = '.login'
        this.locatorMainTitle = '[title="My Shop"]'
        this.locatorLoggedIn = '.account'
        this.locatorSignout = '.logout'
        this.locatorWomenMenu = 'a[title="Women"]'
        this.locatorSearchInput = '#search_query_top'
        this.locatorSearchButton = '[name="submit_search"]'
        this.locatorCheckoutButton = '#button_order_cart'
        this.locatorCartContainer='.shopping_cart'
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

    clickWomenMenu(){
        cy.get(this.locatorWomenMenu).click()
    }

    searchBar(name){
        cy.get(this.locatorSearchInput).type(name)
        cy.get(this.locatorSearchButton).click()
    }

}

export default HeaderComponent