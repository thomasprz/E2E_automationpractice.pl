import BasePage from './base.page'

class CreateAccountPage extends BasePage{

    constructor(){
        super()
        this.locatorPersonalInformationTitle = '.page-subheading'
        this.locatorGenderInput = '#uniform-id_gender1'
        this.locatorFirstNameInput = '#customer_firstname'
        this.locatorLastNameInput = '#customer_lastname'
        this.locatorEmailInput = '#email'
        this.locatorPasswordInput = '#passwd'
        this.locatorDayInput = '#days'
        this.locatorMonthInput = '#months'
        this.locatorYearInput = '[name="years"]'
        this.locatorNewsletter = '#newsletter'
        this.locatorRegisterButton = '#submitAccount'
    }

    expectCreateAccountPage() {
        cy.url().should('include', '#account-creation')
    }

    fillPersonalInformationForm(user){
        cy.get(this.locatorGenderInput).click()
        cy.get(this.locatorFirstNameInput).type(user.firstname)
        cy.get(this.locatorLastNameInput).type(user.lastname)
        cy.get(this.locatorPasswordInput).type(user.password)
        cy.get(this.locatorDayInput).select(user.day)
        cy.get(this.locatorMonthInput).select(user.month)
        cy.get(this.locatorYearInput).select(user.year.toString())
        cy.get(this.locatorNewsletter).check()
        cy.get(this.locatorRegisterButton).click()
    }

    expectEmailAddress(email){
        cy.get(this.locatorEmailInput).should('have.value',email)
    }
}

export default CreateAccountPage