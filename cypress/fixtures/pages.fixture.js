import  AuthenticationPage from '../pages/authentication.page.js';
import  MyAccountPage from '../pages/my-account.page.js';
import  CreateAccountPage  from '../pages/create-account.page.js';
import  HomePage  from '../pages/home.page.js'
import ContactPage from '../pages/contact.page.js'
import ProductsPage from '../pages/products.page.js'
import ProductDetailsPage from '../pages/product-details.page.js';
import CartPage from '../pages/cart.page.js'

const authentication = new AuthenticationPage();
const homepage= new HomePage();
const myaccount = new MyAccountPage();
const createaccount = new CreateAccountPage();
const contact = new ContactPage();
const products = new ProductsPage();
const productdetail= new ProductDetailsPage();
const cart = new CartPage();

export {
  authentication,
  homepage,
  myaccount,
  createaccount,
  contact,
  products,
  productdetail,
  cart,
};