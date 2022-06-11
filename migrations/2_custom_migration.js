const ERC721Creator = artifacts.require("ERC721Creator");

module.exports = function (deployer) {
  deployer.deploy(ERC721Creator, "contract_name", "symbol_name");
};