import React from "react";
import "../index.css";
import Button from "./Button";
import { useState, useEffect } from "react";

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

function KeysForm() {
  const str = "Type text here . . .";
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState(
    "c13a8e7f680c2b406c9141659e881e5bdb3f125735ded622536e339070ff652f"
  );

  const key = ec.genKeyPair();
  const pbKey = key.getPublic("hex");
  const prKey = key.getPrivate("hex");

  const fetchHash = () => {
    setPrivateKey(prKey);
    const key = ec.keyFromPrivate(privateKey, "hex");
    setPublicKey(key.getPublic("hex"));
  };

  const onClick = () => {
    setPrivateKey(prKey);
    setPublicKey(pbKey);
    console.log(pbKey);
    console.log(prKey);
    document.getElementById("prKey").value = prKey;
  };

  useEffect(() => fetchHash(""), []);

  return (
    <div>
      <h2 className="toppic">Public / Private Key Pairs</h2>
      <div className="keyContainer">
        <div className="lineSeparator">
          Private Key:
          <input
            id="prKey"
            className="keyInput"
            placeholder={str}
            onChange={(e) => fetchHash(e.target.value)}
          />
          <Button
            text="Random"
            type="submit"
            value="Submit"
            onClick={onClick}
          />
        </div>
        <span>
          Public Key:
          <input
            className="keyInput"
            type="text"
            placeholder={publicKey}
            disabled
          />
        </span>
      </div>
    </div>
  );
}

export default KeysForm;
