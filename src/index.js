require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3(process.env.RPC_ENDPOINT);
const { AdminClient } = require("defender-admin-client");

exports.coldWalletWithdraw = async function coldWalletWithdraw(
  erc20Contract,
  amount
) {
  const client = new AdminClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  });

  // let erc20Contract = "0x2ec5B0Befb5E1852358256C3734A42e312EAD07F"
  // let amount = web3.utils.toWei("10", "ether")
  try {
    let proposal = await client.createProposal({
      contract: {
        address: process.env.VAULT_MANAGER_CONTRACT,
        network: process.env.NETWORK,
      }, // Target contract

      title: "ColdWallet withdraw", // Title of the proposal
      description: "withdraw", // Description of the proposal
      type: "custom", // Use 'custom' for custom admin actions
      functionInterface: {
        name: "coldWalletWithdraw",
        inputs: [
          { type: "address", name: "erc20Contract" },
          { type: "uint256", name: "amount" },
        ],
      }, // Function ABI
      functionInputs: [erc20Contract, amount.toString()], // Arguments to the function
      via: process.env.GNOSIS_SAFE_ADDRESS, // Address to execute proposal
      viaType: "Gnosis Safe", // 'Gnosis Safe', 'Gnosis Multisig', or 'EOA'
    });
    console.log(proposal);
    return proposal.url;
  } catch (error) {
    console.log(1111, error);
  }
};

exports.coldWalletApprove = async function coldWalletApprove(
  erc20Contract,
  spender,
  amount
) {
  const client = new AdminClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  });
  // let erc20Contract = "0x2ec5B0Befb5E1852358256C3734A42e312EAD07F"
  // let amount = web3.utils.toWei("10", "ether")
  try {
    let proposal = await client.createProposal({
      contract: { address: erc20Contract, network: process.env.NETWORK }, // Target contract
      title: "Approve", // Title of the proposal
      description: "approve", // Description of the proposal
      type: "custom", // Use 'custom' for custom admin actions
      functionInterface: {
        name: "approve",
        inputs: [
          { type: "address", name: "spender" },
          { type: "uint256", name: "amount" },
        ],
      }, // Function ABI
      functionInputs: [spender, amount.toString()], // Arguments to the function
      via: process.env.GNOSIS_SAFE_ADDRESS, // Address to execute proposal
      viaType: "Gnosis Safe", // 'Gnosis Safe', 'Gnosis Multisig', or 'EOA'
    });
    console.log(proposal.url);
    return proposal.url;
  } catch (error) {
    console.log(error);
  }
};

exports.coldWalletDeposit = async function coldWalletDeposit(
  erc20Contract,
  amount
) {
  const client = new AdminClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  });
  // let erc20Contract = "0x2ec5B0Befb5E1852358256C3734A42e312EAD07F"
  // let amount = web3.utils.toWei("10", "ether")
  try {
    let proposal = await client.createProposal({
      contract: {
        address: process.env.VAULT_MANAGER_CONTRACT,
        network: process.env.NETWORK,
      }, // Target contract
      title: "Approve", // Title of the proposal
      description: "approve", // Description of the proposal
      type: "custom", // Use 'custom' for custom admin actions
      functionInterface: {
        name: "coldWalletDeposit",
        inputs: [
          { type: "address", name: "erc20Contract" },
          { type: "uint256", name: "amount" },
        ],
      }, // Function ABI
      functionInputs: [erc20Contract, amount.toString()], // Arguments to the function
      via: process.env.GNOSIS_SAFE_ADDRESS, // Address to execute proposal
      viaType: "Gnosis Safe", // 'Gnosis Safe', 'Gnosis Multisig', or 'EOA'
    });
    console.log(proposal.url);
    return proposal.url;
  } catch (error) {
    console.log(error);
  }
};
