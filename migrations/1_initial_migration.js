const ERC721CreatorImplementation = artifacts.require("ERC721CreatorImplementation");

module.exports = function (deployer) {
  deployer.deploy(ERC721CreatorImplementation);
};