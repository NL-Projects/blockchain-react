import React from "react";
import BlockChainForm from "../components/BlockChainForm";

function Block() {
  return (
    <div>
      <h2 className="toppic">Block</h2>
      <div className="centerDiv">
        <BlockChainForm showPrev={false} />
      </div>
    </div>
  );
}

export default Block;
