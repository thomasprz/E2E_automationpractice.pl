import { authentication, homepage, myaccount, createaccount } from '../fixtures/pages.fixture'
import { header } from '../fixtures/components.fixture'
import { generateRegisterData } from '../factory/register.factory'

describe('Login', () => {
  before(() => {
    homepage.goTo('/')
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
    myaccount.expectAccountCreated()
  })
})