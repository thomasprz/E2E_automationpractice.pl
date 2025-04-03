import BasePage from "../pages/base.page";
import data from '../fixtures/footer.json'

class FooterComponent extends BasePage {


    constructor(){
        super()
        this.locatorNewsletterInput='#newsletter-input'
        this.locatorNewsletterButton='[name="submitNewsletter"]'
        this.locatorAlertErrorNewsletterEmail ='.alert-danger'
        this.locatorAlertSuccessNewsletterEmail ='.alert-success'
    }

    fillNewsletterForm(email){
        cy.get(this.locatorNewsletterInput).type(email)
        cy.get(this.locatorNewsletterButton).click()
    }

    expectErrorNewsletter() {
        cy.get(this.locatorAlertErrorNewsletterEmail).should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).to.equal(data.error_email);
          });
    }

    expectSuccessNewsletter() {
        cy.get(this.locatorAlertSuccessNewsletterEmail).should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).to.equal(data.success_newsletter);
          });
    }
}

export default FooterComponent