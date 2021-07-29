import "../index.css";
import Button from "./Button";
import { useState, useEffect } from "react";
const axios = require("axios");

const REQUEST_URL = "http://localhost:3001/operations/sha256";

function KeysForm() {
  const str = "Type text here . . .";
  const [hashedData, setHashedData] = useState("");

  // recieves data to send and updates the hash field
  const fetchHash = async (data) => {
    setHashedData(
      await axios.post(REQUEST_URL, { data }).then((res) => res.data.hash)
    );
  };

  // runs once on mount
  useEffect(() => fetchHash(""), []);

  return (
    <div>
      <h2 className="toppic">Public / Private Key Pairs</h2>
      <div className="keyContainer">
        <div className="lineSeparator">
          Private Key:
          <input
            className="keyInput"
            placeholder={str}
            onChange={(e) => fetchHash(e.target.value)}
          />
          <Button text="Random" type="submit" value="Submit" />
        </div>
        <span>
          Public Key:
          <input
            className="keyInput"
            type="text"
            placeholder={hashedData}
            disabled
          />
        </span>
      </div>
    </div>
  );
}

export default KeysForm;
