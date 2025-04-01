import  AuthenticationPage from '../pages/authentication.page.js';
import  MyAccountPage from '../pages/my-account.page.js';
import  CreateAccountPage  from '../pages/create-account.page.js';
import  HomePage  from '../pages/home.page.js'

const authentication = new AuthenticationPage();
const homepage= new HomePage();
const myaccount = new MyAccountPage();
const createaccount = new CreateAccountPage();

export {
  authentication,
  homepage,
  myaccount,
  createaccount,
};