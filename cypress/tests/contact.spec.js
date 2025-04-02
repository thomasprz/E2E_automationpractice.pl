import { contact, homepage } from "../fixtures/pages.fixture";
import { header } from "../fixtures/components.fixture";
import { generateContactData } from "../factory/contact.factory.js";

describe('Contact',() => {
    beforeEach(()=> {
        homepage.goTo((Cypress.env('BASE_URL')))
        homepage.expectHomePage()
    })

    it('Formulaire de contact', () => {
        //Arrange
        const contactData = generateContactData()
        //Act
        header.clickContactUs()
        contact.expectContactPage()
        contact.expectContactUsTitle()
        contact.fillContactForm(contactData)
        //Assert
        contact.expectMessageSendSuccessfully()
    })
})