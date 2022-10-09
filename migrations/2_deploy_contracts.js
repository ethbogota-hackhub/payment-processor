const HackmeToken = artifacts.require("HackmeToken.sol");
const PaymentProcessor = artifacts.require("PaymentProcessor.sol");

module.exports = async function (deployer, network, addresses) {
	const ADMIN_ADDRESS = '0x8Bee9b391799B6BCf529016aAfFa69631Aa7701D';

	await deployer.deploy(HackmeToken, "Hackme Token", "HACKMET");
	const hackmeToken = await HackmeToken.deployed();
	await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, hackmeToken);
};