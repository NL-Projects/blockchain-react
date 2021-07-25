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
  req = req.body.data;
  console.log(req);
  let newBlock = new Block(
    req.index,
    req.data,
    req.previousHash
  );
  newBlock.mineBlock(4);
  res.json({
      nonce:newBlock.nonce,
      hash:newBlock.hash.toString()
    });
});

module.exports = router;
