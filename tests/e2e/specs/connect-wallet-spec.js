import HomePage from '../pages/home/home-page';

const home = new HomePage();

let metamaskWalletAddress;

describe('MetaMask Smoke Test', () => {
  before(() => {
    home.getMetamaskWalletAddress().then(address => {
      metamaskWalletAddress = address;
    });
    home.visit();
  });
  context('Connect metamask wallet', () => {
    it('should login with success', () => {
      home.connectBrowserWallet();
      home.acceptMetamaskAccessRequest();
      home.waitUntilLoggedIn();
      home.getLoggedInWalletAddress().then(walletAddress => {
        const formattedMetamaskWalletAddress =
          metamaskWalletAddress.slice(0, 6) +
          '...' +
          metamaskWalletAddress.slice(-4);
        expect(walletAddress).to.equal(
          formattedMetamaskWalletAddress,
        );
      });
    });
  });
});
