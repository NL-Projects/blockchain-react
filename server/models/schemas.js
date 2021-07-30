const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  fromAddress: String,
  toAddress: String,
  amount: Number,
});

const blockSchema = new mongoose.Schema({
  index: Number,
  timestamp: String,
  previousHash: String,
  transactions: [String],
  hash: String,
  nonce: Number,
});

const blockchainSchema = new mongoose.Schema({
  chain: [blockSchema],
  difficulty: Number,
});



module.exports = {
  BlockModel: mongoose.model("Block", blockSchema),
  BlockchainModel: mongoose.model("Blockchain", blockchainSchema),
  TransactionModel: mongoose.model("Transaction", transactionSchema),
};
