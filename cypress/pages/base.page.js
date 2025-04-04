class BasePage {
    constructor() {
    }

    goTo(url) {
        cy.visit(url)
    }

    waitFor(){
        cy.wait(2000)
    }

}
export default BasePage