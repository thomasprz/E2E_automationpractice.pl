import { products, homepage, productdetail } from "../fixtures/pages.fixture";
import { header } from "../fixtures/components.fixture";


describe('Products', () => {
    beforeEach(() => {
        homepage.goTo((Cypress.env('BASE_URL')))
        homepage.expectHomePage()
    })

    it('Vérifier tous les produits et la page de détail du produit', () => {
        //Arrange 
        const product = {
            name:'Printed Chiffon Dress',
            reference:'demo_7',
            price:16,
            condition:'New product'
        }
        //Act
        header.clickWomenMenu()
        products.expectProductsPage()
        products.expectProductList()
        products.clickProductTitle(product.name)
        //Assert
        productdetail.expectProductDetails(product)
    })

    it('Rechercher un produit existant', () => {
        //Arrange
        const product = {
            search: 'Blouse'
        }
        //Act
        header.searchBar(product.search)
        //Assert
        products.expectSearchProduct(product.search)
    })

    it('Rechercher un produit non existant', () => {
        //Arrange
        const unknownProduct = {
            search: 'itemInexistant'
        }
        //Act
        header.searchBar(unknownProduct.search)
        //Assert
        products.expectNoResultSearch(unknownProduct.search)
    })
})