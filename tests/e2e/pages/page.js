export default class Page {

  getMetamaskWalletAddress() {
    return cy.fetchMetamaskWalletAddress();
  }

  acceptMetamaskAccessRequest() {
    cy.acceptMetamaskAccess();
  }
}
