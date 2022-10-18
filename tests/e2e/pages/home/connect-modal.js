import Page from '../page';
export default class Header extends Page {

  getTermsCheckBoxes() {
    return cy.get('[type="checkbox"]');
  }

  getMetamaskSelectBtn() {
    return cy.contains('MetaMask');
  }
}
