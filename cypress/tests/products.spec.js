import { products, homepage, productdetail, cart, authentication} from "../fixtures/pages.fixture";
import { header } from "../fixtures/components.fixture";


describe('Products', () => {
    beforeEach(() => {
        homepage.goTo((Cypress.env('BASE_URL')))
        homepage.expectHomePage()
        header.clickSignIn()
        authentication.expectAuthenticationPage()
        authentication.fillLoginForm(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
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

    it.only('Ajouter un produit au panier et vérifier sa présence dans le panier', () => {
        //Arrange
        const productData = {
            name : 'Printed Dress',
            quantity : 1,
            price : 51,
            color:'Pink',
            size:'M'
        }
        //Act
        header.clickWomenMenu()
        products.expectProductsPage()
        products.clickProductTitle(productData)
        productdetail.selectProductSize(productData.size)
        productdetail.clickProductColor(productData.color)
        productdetail.expectAvailableProduct()
        productdetail.clickAddToCart()
        productdetail.expectProductAddedToCart()
        productdetail.expectProductDetailsPopUp(productData)
        productdetail.clickProceedToCheckout()
        cart.expectOneProductInCart(productData)
    })

    it('Modifier la quantité d\'un produit dans le panier et vérifier sa mise à jour', () => {
        //Arrange
        const productData = {
            name : 'Printed Dress',
            quantity : '4',
            price : 51,
            color:'Pink',
            size:'M'
        }
        //Act
        header.clickWomenMenu()
        products.expectProductsPage()
        products.clickProductTitle(productData)
        productdetail.selectProductSize(productData.size)
        productdetail.clickProductColor(productData.color)
        productdetail.expectAvailableProduct()
        productdetail.fillQuantityProduct(productData.quantity)
        productdetail.clickAddToCart()
        productdetail.expectProductAddedToCart()
        productdetail.expectProductDetailsPopUp(productData)
        productdetail.clickContinueShopping()
        productdetail.clickProceedToCheckout()
        cart.expectCartPage()
        cart.expectOneProductInCart(productData)
    })
})