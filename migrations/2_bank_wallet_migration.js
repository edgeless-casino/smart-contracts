const BankWallet = artifacts.require('./BankWallet.sol');

module.exports = deployer => {
    deployer.deploy(
        BankWallet,
        '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c',
        '0x91f273b7a28f5169fd7b7995a54b767ca797bc63'
    );
};
