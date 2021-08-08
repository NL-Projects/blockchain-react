import SHA256 from "crypto-js/sha256";
class Block {
  constructor(index, timestamp, transactions, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.transactions = transactions;
    this.hash = this.calculateHash();
    this.nonce = 0;
    this.isValid = false;
  }
  calculateHash() {
    this.isValid=false;
    return SHA256(
      this.index +
        this.nonce +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.previousHash
    ).toString();
  }
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    this.isValid=true;
    console.log("Block Mined: " + this.hash);
  }
}
class BlockChain {
  constructor(difficulty = 0, createGen = true) {
    if (createGen) {
      this.chain = [this.createGenesisBlock()];
    }
    this.difficulty = difficulty;
  }
  createGenesisBlock() {
    return new Block(0, "", "", "0".repeat(64));
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}
export { Block, BlockChain, Transaction };
