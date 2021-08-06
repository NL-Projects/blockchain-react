import "../index.css";
import Button from "./Button";
import { useState, useEffect } from "react";
const axios = require("axios");

const REQUEST_URL = "http://localhost:3001/operations/sha256";

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

function KeysForm() {
  const str = "Type text here . . .";
  const [hashedData, setHashedData] = useState("");
  const [privateKey, setPrivateKey] = useState(
    "c13a8e7f680c2b406c9141659e881e5bdb3f125735ded622536e339070ff652f"
  );

  const fetchHash = async (data) => {
    await axios
      .post(REQUEST_URL, { data })
      .then((res) => setPrivateKey(res.data.hash));
    const key = ec.keyFromPrivate(privateKey, "hex");
    setHashedData(key.getPublic("hex"));
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
          <Button text="Random" type="submit" value="Submit" flag={true} />
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
