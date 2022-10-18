import Page from '../page';
export default class Header extends Page {

  getConnectWalletBtn() {
    return cy.contains('connect wallet');
  }

  getWalletAddress() {
    return cy.contains('...');
  }
}
