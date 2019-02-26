const WalletController = artifacts.require("./WalletController.sol");

module.exports = deployer => {
    deployer.deploy(WalletController);
};
