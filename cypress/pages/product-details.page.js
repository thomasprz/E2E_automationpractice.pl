import BasePage from "./base.page";
import data from '../fixtures/product-details.json'

export class ProductDetailsPage extends BasePage{

    constructor(){
        super()

        this.locatorNameProduct = '[itemprop="name"]'
        this.locatorReferenceProduct = '[itemprop="sku"]'
        this.locatorConditionProduct = '#product_condition > span'
        this.locatorPriceProduct = '#our_price_display'
        this.locatorSizeProduct = '#group_1'
        this.locatorColorProduct = '#color_to_pick_list'
        this.locatorAddToCartButton = '[name="Submit"]'
        this.locatorQuantityInput = '#quantity_wanted'
        this.locatorSizeProduct = '[name="group_1"]'
        this.locatorColorList= '#color_to_pick_list'
        this.locatorAvailabilityProduct = '#availability_value'
        this.locatorPopupProductAddedToCartConfirmation = '.layer_cart_product h2'
        this.locatorPopupProductName= '#layer_cart_product_title'
        this.locatorPopupProductSizeColor= '#layer_cart_product_attributes'
        this.locatorPopupProductQuantity='#layer_cart_product_quantity'
        this.locatorPopupProductTotal='#layer_cart_product_price'
        this.locatorPopupContinueShoppingButton='[title="Continue shopping"]'
        this.locatorPopupProceedToCheckoutButton='[title="Proceed to checkout"]'
    }

    expectProductDetailsPage(){
        cy.url().should('include','id_product=')
    }

    getNameProduct(){
        return cy.get(this.locatorNameProduct).invoke('text').then((name) => { 
            return name.trim();
        });    
    }

    getReferenceProduct(){
        return cy.get(this.locatorReferenceProduct).invoke('text').then((reference) => { 
            return reference.trim();
        });  
    }

    getConditionProduct(){
        return cy.get(this.locatorConditionProduct).invoke('text').then((condition) => { 
            return condition.trim();
        });  
    }

    getPriceProduct(){
        return cy.get(this.locatorPriceProduct).invoke('text').then((price) => { 
            return price.trim();
        });  
    }

    expectProductDetails(product){
        this.getNameProduct().then((name) => {
            cy.get(this.locatorNameProduct).should('contain.text', product.name);
        });
        this.getReferenceProduct().then((reference) => {
            cy.get(this.locatorReferenceProduct).should('contain.text', product.reference);
        });
        this.getConditionProduct().then((condition) => {
            cy.get(this.locatorConditionProduct).should('contain.text', product.condition);
        });
        this.getPriceProduct().then((price) => {
            cy.get(this.locatorPriceProduct).should('contain.text', `$${product.price}`);
        });
    }

    selectProductQuantity(quantity){
        cy.get(this.locatorQuantityInput).type(quantity)
    }


    selectProductSize(size){
        cy.get(this.locatorSizeProduct).select(size).should('contain.text', size)
    }


    clickProductColor(color){
        cy.get(this.locatorColorList).find('a.color_pick').filter(`[title="${color}"]`).click()
    }

    clickAddToCart(){
        cy.get(this.locatorAddToCartButton).click()
    }

    expectAvailableProduct(){
        cy.get(this.locatorAvailabilityProduct).should('be.visible').and('contain.text',data.product_available)
    }

    expectUnavailableProduct(){
        cy.get(this.locatorAvailabilityProduct).should('be.visible').and('contain.text',data.product_unavailable)
    }

    //MODAL AFTER ADDTOCART PRODUCT 
    expectProductAddedToCart(){
        cy.get(this.locatorPopupProductAddedToCartConfirmation).should('be.visible').and('contain.text',data.product_successfully_added)
    }
    
    expectProductDetailsPopUp(product){
        const totalPrice= product.price * Number(product.quantity)
        cy.get(this.locatorPopupProductName).should('contain.text',product.name)
        cy.get(this.locatorPopupProductSizeColor).should('contain.text',`${product.size}, ${product.color}`)
        cy.get(this.locatorPopupProductQuantity).should('contain.text',product.quantity)
        cy.get(this.locatorPopupProductTotal).should('contain.text',`$${totalPrice}`)
    }

    clickContinueShopping(){
        cy.get(this.locatorPopupContinueShoppingButton).click()
    }
    clickProceedToCheckout(){
        cy.get(this.locatorPopupProceedToCheckoutButton).click()
    }

    fillQuantityProduct(quantity) {
        cy.get(this.locatorQuantityInput).clear({ force: true }).type(quantity, { force: true }); // forcer le type aussi
    }

    awaitQuantityFillVisible() {
        cy.get(this.locatorQuantityInput).should('be.visible');
    }
}

export default ProductDetailsPage