import Basepage from '../pages/base.page'
import data from '../fixtures/my-account.json'

class MyAccountPage extends Basepage{
    constructor(){
        super()
        this.locatorAccountCreatedAlertSuccess = '.alert-success'
        this.locatorMyAccountTitle = '.page-heading'
        this.locatorAddMyFirstAddressLink = '[title="Add my first address"]'
        this.locatorOrderHistoryDetailsLink = '[title="Orders"]'
        this.locatorCreditSlipsLink = '[title="Credit slips"]'
        this.locatorAddressesLink = '[title="Addresses"]'
        this.locatorPersonalInformationLink = '[title="Information"]'
        this.locatorHomeButton = '[title="Home"]'
    }

    expectMyAccountPage(){
        cy.url().should('include', 'controller=my-account')
    }

    verifyTitleVisible() {
        cy.get(this.locatorMyAccountTitle).should('be.visible')
      }

    expectAccountCreated(){
        cy.get(this.locatorAccountCreatedAlertSuccess).should('be.visible').and('contain.text',data.account_created_succesfully)
    }

    
}

export default MyAccountPage