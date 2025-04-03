import { homepage } from "../fixtures/pages.fixture";
import { footer } from "../fixtures/components.fixture";
import { faker } from "@faker-js/faker";

describe('Homepage',() => {
    beforeEach(()=> {
        homepage.goTo((Cypress.env('BASE_URL')))
        homepage.expectHomePage()
    })

    it('Inscription réussie à la newsletter avec un email valide', () => {
        //Arrange
        const emailValid = faker.internet.email()
        //Act
        footer.fillNewsletterForm(emailValid)
        //Assert
        footer.expectSuccessNewsletter()
    })

    it('Inscription à la newsletter échouée : email invalide', () => {
        //Arrange
        const emailError = 'test@gmail;com'
        //Act
        footer.fillNewsletterForm(emailError)
        //Assert
        footer.expectErrorNewsletter()
    })
})