// import Line from "./Line";
import "../index.css";
import { useState } from "react";
const SHA256 = require("crypto-js/sha256");

function SHAform() {
  const str = "Type text here . . .";
  const [hashedData, setHashedData] = useState(SHA256(str));

  return (
    <div className="SHAcontainer">
      <textarea
        className="sha256Data"
        placeholder={str}
        onChange={(e) => setHashedData(SHA256(e.target.value))}
      />
      <span>
        Hash:
        <input
          className="inputSHALength"
          type="text"
          placeholder={hashedData}
          disabled
        />
      </span>
    </div>
  );
}

export default SHAform;
