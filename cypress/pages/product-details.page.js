import BasePage from "./base.page";

export class ProductDetails extends BasePage{

    constructor(){
        super()

        this.locatorNameProduct = '[itemprop="name"]'
        this.locatorReferenceProduct = '[itemprop="sku"]'
        this.locatorConditionProduct = '#product_condition > span'
        this.locatorPriceProduct = '#our_price_display'
        this.locatorSizeProduct = '#group_1'
        this.locatorColorProduct = '#color_to_pick_list'
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
}