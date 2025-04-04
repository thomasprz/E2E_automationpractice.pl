import BasePage from '../pages/base.page'


class ProductsPage extends BasePage{

    constructor(){
        super()
        this.locatorProductList = '.product_list'
        this.locatorProductContainer = '.product-container'
        this.locatorProductName = '.product-name'
        this.locatorAlertSearch = '.alert'
        this.locatorProductPrice = '.product-price'
    }

    expectProductsPage(){
        cy.url().should('include','controller=category')
    }

    expectProductList(){
        cy.get(this.locatorProductList).should('be.visible')
    }

    clickProductTitle(product) {
        cy.get(this.locatorProductContainer).filter((index, element) => {
            const $el = Cypress.$(element);
            return $el.text().includes(product.name) && $el.text().includes(product.price);
        })
          .find(this.locatorProductName)
          .click();
    }

    expectSearchProduct(search){
        cy.get(this.locatorProductContainer).each(($el) => {
            cy.wrap($el).find(this.locatorProductName).should('contain.text', search)
        })
    }

    expectNoResultSearch(search) {
        cy.get(this.locatorAlertSearch).should('be.visible').invoke('text').then((text) => {
                const cleanedText = text.replace(/\s+/g, ' ').trim();
                    expect(cleanedText).to.include(`No results were found for your search "${search}"`);
        });
    }
}
export default ProductsPage