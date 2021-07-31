import "../index.css";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";
const axios = require("axios");

const MINE_REQ_URL = "http://localhost:3001/operations/mine";
const SHA_REQ_URL = "http://localhost:3001/operations/sha256";
const ZERO = "0".repeat(64);

function BlockForm({ bool = true, indexCount = 1, nonce =0,prev=ZERO, hash }) {
  // const [hashedData, setHashedData] = useState("");
  // const [nonce, setNonce] = useState(nonceValue);

  // grab the text area
  const textArea = useRef(null);
  const blockDiv = useRef(null);
  const nonceField = useRef(null);
  const prevField = useRef(null);
  const hashField = useRef(null);

  // updates hash on every input
  const handleTextAreaInput = async () => {
    hashField.current.value = 
      await axios
        .post(SHA_REQ_URL, { data: textArea.current.value })
        .then((res) => res.data.hash)
    blockDiv.current.style.backgroundColor = "rgb(253, 184, 184)";
  };

  const handleSubmit = (e) => {
    // prevent page reload after submit
    e.preventDefault();
    fetchMiningResults(indexCount + nonce + textArea.current.value + prev).then(
      (blockDiv.current.style.backgroundColor = "rgb(183, 248, 196)")
    );
  };

  const fetchMiningResults = async (data) => {
    const res = await axios.post(MINE_REQ_URL, { data });
    nonceField.current.value = res.data.nonce;
    hashField.current.value = res.data.hash;
  };

  // useEffect(() => fetchMiningResults({ index: "1", data: "" }), []);

  return (
    <div className="container" ref={blockDiv} id="test">
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div>
          Block
          <input
            className="inputBlockLength"
            type="text"
            name="index"
            value={indexCount}
          />
        </div>
        <div>
          Nonce
          <input
            ref={nonceField}
            className="inputBlockLength"
            type="text"
            name="nonce"
            value={nonce}
          />
        </div>
        <div>Data</div>
        <textarea
          ref={textArea}
          className="blockData"
          placeholder="Enter text here..."
          name="data"
          onChange={handleTextAreaInput}
        />
        <div>
          <div hidden={bool}>
            Previous Hash
            <input
              ref={prevField}
              readOnly
              className="inputBlockLength"
              type="text"
              disabled
              value={prev}
            />
          </div>
          <div>
            Hash
            <input
            ref={hashField}
              readOnly
              className="inputBlockLength"
              type="text"
              disabled
              value={hash}
            />
          </div>
          <Button text="Mine" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default BlockForm;
