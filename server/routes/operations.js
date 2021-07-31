const express = require("express");
const router = express.Router();
const { Block } = require("../logic/blockchain");

const SHA256 = require("crypto-js/sha256");

router.post("/sha256", (req, res) => {
  res.json({
    hash: SHA256(req.body.data).toString(),
  });
});

router.post("/mine", (req, res) => {
  req = req.body;
  let newBlock = new Block(req.index, req.data, req.previousHash);
  newBlock.mineBlock(4);
  res.json({
    nonce: newBlock.nonce,
    hash: newBlock.hash.toString(),
  });
});

router.post("/hashBlock", (req, res) => {
  req = req.body;
  let newBlock = new Block(
    req.data.blockData.idx,
    req.data.blockData.transactions,
    req.data.blockData.previousHash
  );
  newBlock.calculateHash();
  res.json({
    index: newBlock.index,
    nonce: newBlock.nonce,
    hash: newBlock.hash,
  });
});

router.post("/genesisBlock", (req, res) => {
  req = req.body;
  var blockChain = new BlockChain(req.difficulty);
  blockChain.createGenesisBlock();
});

router.post("/add", (req, res) => {
  req = req.body;
  console.log(req.data);
  // let addBlock = new BlockChain(req.difficulty);
  // addBlock.addBlock(req);
  res.json({
    // index: newBlock.index,
    // nonce: addBlock.nonce,
    // hash: addBlock.hash.toString(),
  });
});

module.exports = router;
