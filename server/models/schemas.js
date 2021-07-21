const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  index: Number,
  timestamp: String,
  previousHash: String,
  transactions: [transactionSchema],
  hash: String,
  nonce: Number,
});

const blockchainSchema = new mongoose.Schema({
  chain: [blockSchema],
  difficulty: Number,
});

const transactionSchema = new mongoose.Schema({
  fromAddress: String,
  toAddress: String,
  amount: Number,
});

module.exports = {
  Block: mongoose.model("Block", blockSchema),
  Blockchain: mongoose.model("Blockchain", blockchainSchema),
  Transaction: mongoose.model("Transaction", tramsactionSchema),
};
