import Page from '../page';
import Header from './header';
import ConnectModal from './connect-modal';

export default class HomePage extends Page {
  constructor() {
    super();
    this.header = new Header();
    this.connectModal = new ConnectModal();
  }

  visit() {
    cy.visit('/');
  }

  connectBrowserWallet() {
    const connectWalletButton = this.header.getConnectWalletBtn();
    connectWalletButton.click();
    const termsCheckBoxes = this.connectModal.getTermsCheckBoxes();
    termsCheckBoxes.check();
    const metamaskSelectButton = this.connectModal.getMetamaskSelectBtn();
    metamaskSelectButton.click();
  }

  waitUntilLoggedIn() {
    cy.waitUntil(() => {
      const walletAddress = this.header.getWalletAddress();
      return walletAddress.should('exist');
    });
  }

  getLoggedInWalletAddress() {
    const walletAddress = this.header.getWalletAddress();
    return walletAddress.invoke('text');
  }

}
