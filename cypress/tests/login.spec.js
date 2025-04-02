import { authentication, homepage, myaccount, createaccount } from '../fixtures/pages.fixture'
import { header } from '../fixtures/components.fixture'
import { generateRegisterData } from '../factory/register.factory'

describe('Login', () => {
  beforeEach(() => {
    homepage.goTo((Cypress.env('BASE_URL')))
    homepage.expectHomePage()
  })
  it('Inscription d\'un utilisateur', () => {
    //Arrange
    const userData = generateRegisterData()
    //Act
    header.clickSignIn()
    authentication.expectAuthenticationPage()
    authentication.fillCreateAccountForm(userData.email)
    createaccount.expectCreateAccountPage()
    createaccount.expectEmailAddress(userData.email)
    createaccount.fillPersonalInformationForm(userData)
    //Assert
    myaccount.expectMyAccountPage() 
    myaccount.verifyTitleVisible()
    myaccount.expectAccountCreated()
    header.expectLoggedIn(userData.firstname,userData.lastname)
  })

  it('Connexion de l\'utilisateur avec un email et un mot de passe corrects', () => {
    //Act
    header.clickSignIn()
    authentication.expectAuthenticationPage()
    authentication.fillLoginForm(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    //Assert
    myaccount.expectMyAccountPage()
    myaccount.verifyTitleVisible()
    header.expectLoggedIn(Cypress.env('FIRSTNAME'), Cypress.env('LASTNAME'));
  })

  it.only('Connexion de l\'utilisateur avec un email et un mot de passe incorrects', () => {
    //Arrange
    const userData = {
      email: 'incorrect@email.com',
      password: 'mauvais_mot_de_passe'
    }
    //Act
    header.clickSignIn()
    authentication.expectAuthenticationPage()
    authentication.fillLoginForm(userData.email, userData.password);
    //Assertion
    authentication.expectErrorAuthentification()
  })

  it('Déconnexion de l\'utilisateur', () => {
    //Act
    header.clickSignIn()
    authentication.expectAuthenticationPage()
    authentication.fillLoginForm(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
    myaccount.expectMyAccountPage()
    myaccount.verifyTitleVisible()
    header.expectLoggedIn(Cypress.env('FIRSTNAME'), Cypress.env('LASTNAME'));
    header.clickSignOut()
    //Assert
    header.expectLoggedOff();
  })

  it('Inscription avec un email déjà existant', () => {
    //Act
    header.clickSignIn()
    authentication.expectAuthenticationPage()
    authentication.fillCreateAccountForm(Cypress.env('EMAIL'))
    authentication.expectErrorExistingEmailSignup()
  })
})