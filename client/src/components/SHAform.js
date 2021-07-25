// import Line from "./Line";
import "../index.css";
import { useState, useEffect } from "react";
const axios = require("axios");

const REQUEST_URL = "http://localhost:3001/operations/sha256";

function SHAform() {
  const str = "Type text here . . .";
  const [hashedData, setHashedData] = useState("");

  // recieves data to send and updates the hash field
  const fetchHash = async (data) => {
    setHashedData(
      await axios.post(REQUEST_URL, {data}).then((res) => res.data.hash)
    );
  };

  // runs once on mount
  useEffect(() => fetchHash(""), []);

  return (
    <div className="SHAcontainer">
      <textarea
        className="sha256Data"
        placeholder={str}
        onChange={(e)=>fetchHash(e.target.value)}
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
