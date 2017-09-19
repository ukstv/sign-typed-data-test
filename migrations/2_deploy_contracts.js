var SignTypedData = artifacts.require("./SignTypedData.sol");

module.exports = function(deployer) {
  deployer.deploy(SignTypedData);
};
