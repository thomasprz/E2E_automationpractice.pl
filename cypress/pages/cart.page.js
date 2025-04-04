import BasePage from "./base.page";
import data from '../fixtures/cart.json'

class CartPage extends BasePage {
    constructor(){
    super()
    this.locatorCartPageTitle='#cart_title'
    this.locatorNameProduct ='.product-name'
    this.locatorUnitPriceProduct ='.cart_unit ul li'
    this.locatorTotalPriceProduct='.cart_total .price'
    this.locatorQuantityProduct='.cart_quantity_input'
    this.locatorTotalOrderPrice='#total_price'
    this.locatorProductDescription='.cart_description small a'
    }


    expectCartPage(){
        cy.url().should('to.include', 'controller=order')
        cy.get(this.locatorCartPageTitle).should('contain.text', data.cartPage_header)
    }

    expectOneProductInCart(product) {
        const totalPrice = product.price * Number(product.quantity); // Calcul du total
        cy.get(this.locatorNameProduct).should('contain.text', product.name);
        cy.get(this.locatorProductDescription).should('contain.text', `Size : ${product.size}, Color : ${product.color}`);
        cy.get(this.locatorUnitPriceProduct).should('contain.text', product.price);
        cy.get(this.locatorTotalPriceProduct).should('contain.text', `$${totalPrice}`); // Utilisation de totalPrice ici
        cy.get(this.locatorQuantityProduct).should('have.value', product.quantity);
    }

    expectProductsInCart(){

    }


}
export default CartPage