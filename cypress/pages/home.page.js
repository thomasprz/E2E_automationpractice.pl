import BasePage from './base.page'

class HomePage extends BasePage{
    constructor(){
        super()
    }

    expectHomePage(){
        cy.url().should('include', '/index.php')
    }
}

export default HomePage