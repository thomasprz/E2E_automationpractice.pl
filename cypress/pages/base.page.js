class BasePage {
    constructor() {
    }

    goTo(url) {
        cy.visit(url)
    }
}
export default BasePage