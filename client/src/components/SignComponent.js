import { React, useRef, useState, useEffect } from "react";
import Button from "./Button";
import Transaction from "../services/signVerify";

const axios = require("axios");
const REQUEST_URL = "http://localhost:3001/operations/sha256";

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

function SignComponent() {
  const [message, setMessage] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [signatre, setSignatre] = useState("");
  const [privateKey, setPrivateKey] = useState(
    "c13a8e7f680c2b406c9141659e881e5bdb3f125735ded622536e339070ff652f"
  );

  const textArea = useRef("");

  const initSignature = () => {
    const key = ec.keyFromPrivate(privateKey, "hex");
    setPublicKey(key.getPublic("hex"));
    setMessage(textArea.current.value);
    document.getElementById("prKey").value = privateKey;
  };
  // await axios
  //   .post(REQUEST_URL, { data: { message, privateKey } })
  //   .then((res) => {
  //     document.getElementById("prKey").value = res.data.hash;
  // // res.data.hash);
  // console.log();
  // });

  // let Transaction = new Transaction(fromPublicKey, toPublicKey, message);

  // newBlockChain.chain[0].mineBlock(newBlockChain.difficulty);
  // for (let i = 1; i < length; i++) {
  //   newBlockChain.addBlock(new Block(i, "", "", ""));
  //   newBlockChain.chain[i].mineBlock(newBlockChain.difficulty);
  // }
  // setblockChain(newBlockChain);

  const updatePrivate = (data) => {
    setPrivateKey(data);
  };

  const sign = (e) => {
    // const transaction = new Transaction(publicKey, "", message);
    // console.log(transaction);
    // setSignatre(transaction.signTransaction);
    // console.log(signatre);
    // document.getElementById("prKey").value = privateKey;
  };

  useEffect(() => initSignature(), []);

  return (
    <div>
      <form onSubmit={""}>
        <div>Message</div>
        <textarea
          ref={textArea}
          className="blockMessage"
          placeholder="Enter text here..."
          name="data"
          //   onChange={(e) => onInput(e, indexCount, textArea.current.value)}
        />
        <div className="lineSeparator">
          Private Key:
          <input
            id="prKey"
            className="keySignInput"
            onChange={(e) => updatePrivate(e.target.value)}
          />
          <Button
            text="Sign"
            type="submit"
            value="Submit"
            className="longBTN"
            // onClick={sign}
          />
          Message Signature:
          <input
            className="keySignInputDisabled"
            type="text"
            //   placeholder={hashedData}
            disabled
          />
        </div>
      </form>
    </div>
  );
}

export default SignComponent;
