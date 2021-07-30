const express = require("express");
const router = express.Router();
const { Block, BlockChain, Transaction } = require("../logic/blockchain");

const { BlockchainModel } = require("../models/schemas");

const DIFFICULTY = 4;
const SIZE = 5;
blockChainLogic = new BlockChain(DIFFICULTY);
for (let i = 1; i < SIZE; i++) {
  blockChainLogic.addBlock(new Block(i, "", [], ""));
}
// Init blockchain collection
(async () => {
  try {
    await BlockchainModel.deleteMany();
    await BlockchainModel.create({
      chain: blockChainLogic.chain,
      difficulty: blockChainLogic.difficulty,
    });
  } catch (err) {
    console.log(err.message);
  }
})();

// retrieves an initial chain stored on db
router.get("/chain", async (req, res) => {
  res.json(await BlockchainModel.find());
});

module.exports = router;
