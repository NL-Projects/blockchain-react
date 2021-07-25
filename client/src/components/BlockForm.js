import "../index.css";
import Button from "./Button";
import { useState,useEffect } from "react";
const axios = require("axios");

const REQUEST_URL = "http://localhost:3001/operations/mine";

function BlockForm() {
  const [hashedData, setHashedData] = useState("");
  const [nonce, setNonce] = useState("");

  const fetchMiningResults = async (data) => {
    const res = await axios.post(REQUEST_URL, { data });
    setNonce(res.data.nonce);
    setHashedData(res.data.hash);
    console.log(res.data);
  };
  
  useEffect(() => fetchMiningResults({index:"1",data:""}), []);
  // const [block, setBlock] = useState({
  //   index: 1,
  //   timestamp: "",
  //   nonce: 0,
  //   data: "Hello world",
  //   // hash: SHA256(1, "", 12, JSON.stringify("Hello world")).toString(),
  //   hash: "",
  //   // transactions: "",
  //   // previousHash: "",
  // });

  // const index = block.index;
  // const timestamp = block.timestamp;
  // const nounce = block.nonce;
  // const data = block.data;

  // console.log(block);

  // function calculateHash(index, timestamp, nounce, data) {
  //   return ""
  //   // SHA256(index + timestamp + nounce + JSON.stringify(data)).toString();
  // }

  // function setIndex(e) {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setBlock((prevBlock) => ({
  //     ...prevBlock,
  //     [name]: value,
  //     hash: calculateHash(index, timestamp, nounce, data),
  //   }));
  // }

  // function setNounce(e) {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setBlock((prevBlock) => ({
  //     ...prevBlock,
  //     [name]: value,
  //     hash: calculateHash(index, timestamp, nounce, data),
  //   }));
  // }

  // function setData(e) {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setBlock((prevBlock) => ({
  //     ...prevBlock,
  //     [name]: value,
  //     hash: calculateHash(index, timestamp, nounce, data),
  //   }));
  // }

  // function handleSubmit(difficulty = 5) {
  //   while (
  //     block.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0 ")
  //   ) {
  //     block.nonce++;
  //     block.hash = calculateHash(index, timestamp, nounce, data);
  //   }
  //   console.log("Block Mined: " + block.hash);
  // }

  return (
    <div>
      <form action={REQUEST_URL} method="post" onSubmit={()=> false}>
        <div>
          Block #
          <input
            className="inputBlockLength"
            type="text"
            name="index"
            placeholder="1"
          />
        </div>
        <div>
          Nonce
          <input
            className="inputBlockLength"
            type="text"
            name="nounce"
            placeholder={nonce}
          />
        </div>
        <div>Data</div>
        <textarea className="blockData" placeholder="Enter text here..." name="data" />
        <div>
          <div >
            Previous Hash
            <input
              className="inputBlockLength"
              type="text"
              disabled
            />
          </div>
          <div>
            Hash
            <input
              className="inputBlockLength"
              type="text"
              disabled
              value={hashedData}
            />
          </div>
          <Button text="Mine" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default BlockForm;
