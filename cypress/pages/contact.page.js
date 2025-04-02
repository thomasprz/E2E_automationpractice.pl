import data from '../fixtures/contact.json'
import BasePage from '../pages/base.page'

class ContactPage extends BasePage{
    constructor(){
        super()
        this.locatorContactUsTitle = '.page-heading'
        this.locatorSubjectSelect = '#id_contact'
        this.locatorEmailInput = "#email"
        this.locatorOrderReferenceInput = '[name="id_order"]'
        this.locatorFileUpload = "#fileUpload"
        this.locatorMessageInput = '#message'
        this.locatorSendButton = '#submitMessage'
        this.locatorMessageSuccess='.alert-success'

    }

    expectContactPage(){
        cy.url().should('include','controller=contact')
    }

    expectContactUsTitle(){
        cy.get(this.locatorContactUsTitle).should('be.visible')
    }

    uploadFile() {
        cy.get(this.locatorFileUpload).selectFile('cypress/fixtures/files/jpg.png');
    }

    fillContactForm(contact){
        cy.get(this.locatorSubjectSelect).select('2')
        cy.get(this.locatorEmailInput).type(contact.email)
        cy.get(this.locatorOrderReferenceInput).type(contact.order)
        this.uploadFile()
        cy.get(this.locatorMessageInput).type(contact.message)
        cy.get(this.locatorSendButton).click()
    }

    expectMessageSendSuccessfully(){
        cy.get(this.locatorMessageSuccess).should('be.visible').and('contain.text',data.message_successful)
    }
}
export default ContactPage