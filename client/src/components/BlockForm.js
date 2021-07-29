import "../index.css";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";
const axios = require("axios");

const MINE_REQ_URL = "http://localhost:3001/operations/mine";
const SHA_REQ_URL = "http://localhost:3001/operations/sha256";

function BlockForm({ bool = true }) {
  const [hashedData, setHashedData] = useState("");
  const [nonce, setNonce] = useState("");
  // grab the text area
  const textArea = useRef(null);
  const blockDiv = useRef(null);

  // updates hash on every input
  const handleTextAreaInput = async () => {
    setHashedData(
      await axios
        .post(SHA_REQ_URL, { data: textArea.current.value })
        .then((res) => res.data.hash)
        .then((blockDiv.current.style.backgroundColor = "rgb(255, 156, 156)"))
    );
  };

  const handleSubmit = (e) => {
    // prevent page reload after submit
    e.preventDefault();
    fetchMiningResults(textArea.current.value).then(
      (blockDiv.current.style.backgroundColor = "rgb(104, 238, 131)")
    );
  };

  const fetchMiningResults = async (data) => {
    const res = await axios.post(MINE_REQ_URL, { data });
    setNonce(res.data.nonce);
    setHashedData(res.data.hash);
  };

  useEffect(() => fetchMiningResults({ index: "1", data: "" }), []);

  return (
    <div className="container" ref={blockDiv}>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div>
          Block #
          <input
            readOnly
            className="inputBlockLength"
            type="text"
            name="index"
            value="1"
          />
        </div>
        <div>
          Nonce
          <input
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
            <input readOnly className="inputBlockLength" type="text" disabled />
          </div>
          <div>
            Hash
            <input
              readOnly
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
