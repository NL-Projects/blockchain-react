import "../index.css";
import Button from "./Button";
import { useState } from "react";
// const SHA256 = require("crypto-js/sha256");

function BlockForm() {
  const [block, setBlock] = useState({
    index: 1,
    timestamp: "",
    nonce: 0,
    data: "Hello world",
    // hash: SHA256(1, "", 12, JSON.stringify("Hello world")).toString(),
    hash: "",
    // transactions: "",
    // previousHash: "",
  });

  const index = block.index;
  const timestamp = block.timestamp;
  const nounce = block.nonce;
  const data = block.data;

  console.log(block);

  function calculateHash(index, timestamp, nounce, data) {
    return ""
    // SHA256(index + timestamp + nounce + JSON.stringify(data)).toString();
  }

  function setIndex(e) {
    const value = e.target.value;
    const name = e.target.name;
    setBlock((prevBlock) => ({
      ...prevBlock,
      [name]: value,
      hash: calculateHash(index, timestamp, nounce, data),
    }));
  }

  function setNounce(e) {
    const value = e.target.value;
    const name = e.target.name;
    setBlock((prevBlock) => ({
      ...prevBlock,
      [name]: value,
      hash: calculateHash(index, timestamp, nounce, data),
    }));
  }

  function setData(e) {
    const value = e.target.value;
    const name = e.target.name;
    setBlock((prevBlock) => ({
      ...prevBlock,
      [name]: value,
      hash: calculateHash(index, timestamp, nounce, data),
    }));
  }

  function handleSubmit(difficulty = 5) {
    while (
      block.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0 ")
    ) {
      block.nonce++;
      block.hash = calculateHash(index, timestamp, nounce, data);
    }
    console.log("Block Mined: " + block.hash);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Block:
          <input
            className="inputBlockLength"
            type="text"
            name="index"
            placeholder={index}
            onChange={(e) => setIndex(e)}
          />
        </div>
        <div>
          Nounce:
          <input
            className="inputBlockLength"
            type="text"
            name="nounce"
            placeholder=""
            onChange={(e) => setNounce(e)}
          />
        </div>
        <div>Data:</div>
        <textarea
          className="blockData"
          placeholder=""
          name="data"
          onChange={(e) => setData(e)}
        />
        <div>
          <div>
            Hash:
            <input
              className="inputBlockLength"
              type="text"
              placeholder={block.hash}
              disabled
            />
          </div>
          <div hidden>
            Previous Block:
            <input
              className="inputBlockLength"
              type="text"
              placeholder={block.hash}
              disabled
            />
          </div>
          <Button text="Mine" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default BlockForm;
