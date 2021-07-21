const express = require("express");
const router = express.Router();
const { Block } = require("../logic/blockchain");

const SHA256 = require("crypto-js/sha256");

router.get("/sha256", (req, res) => {
  res.json({
    hash: SHA256(req.body.data).toString(),
  });
});

router.get("/mine", (req, res) => {
  let newBlock = new Block(
    req.body.index,
    Date.now(),
    req.body.data,
    req.body.previousHash
  );
  newBlock.mineBlock(4);
  res.json({
      "nonce":newBlock.nonce,
      "hash":newBlock.hash.toString()
    });
});

module.exports = router;
