import BlockForm from "../components/BlockForm";
import { useState, useEffect } from "react";
import { BlockChain, Block } from "../services/blockchain_lib";

function BlockChainForm({ length = 1, showPrev = true }) {
  const [blockChain, setblockChain] = useState({ chain: [], difficuty: 4 });

  const initBlockChain = () => {
    let newBlockChain = new BlockChain(4);
    newBlockChain.chain[0].mineBlock(newBlockChain.difficulty);
    for (let i = 1; i < length; i++) {
      newBlockChain.addBlock(new Block(i, "", "", ""));
      newBlockChain.chain[i].mineBlock(newBlockChain.difficulty);
    }
    setblockChain(newBlockChain);
  };

  const updateHashes = (e, index, data) => {
    console.log("INDEX: ", index, " DATA: ", data);
    // convert to array index
    const currentIndex = index - 1;
    // copy the blockchain (its immutable with states)
    let bc = new BlockChain(4, false);
    bc.chain = blockChain.chain;

    // insert the new data to the copied block in the chain
    bc.chain[currentIndex].transactions = data;
    // update hashes on current and the rest
    for (let i = currentIndex; i < length - 1; i++) {
      bc.chain[i].hash = bc.chain[i].calculateHash();
      bc.chain[i].isValid = false;
      bc.chain[i + 1].previousHash = bc.chain[i].hash;
      setblockChain(bc);
    }
    bc.chain[length - 1].hash = bc.chain[length - 1].calculateHash();
    setblockChain(bc);
  };

  const mine = (e, index, data) => {
    e.preventDefault();
    // convert to array index
    const currentIndex = index - 1;
    // copy the blockchain (its immutable with states)
    let bc = new BlockChain(4, false);
    bc.chain = blockChain.chain;
    // insert the new data to the copied block in the chain
    bc.chain[currentIndex].transactions = data;
    bc.chain[currentIndex].mineBlock(bc.difficulty);
    bc.chain[currentIndex].isValid = true;
    // update the next blocks prevHash, up until length
    if (currentIndex + 1 < length) {
      bc.chain[currentIndex + 1].previousHash = bc.chain[currentIndex].hash;
    }

    setblockChain(bc);
  };

  useEffect(() => initBlockChain(), []);

  return (
    <div>
      <div className="scrolling-wrapper">
        {blockChain.chain.length > 0 &&
          blockChain.chain.map((block) => (
            <BlockForm
              className="card"
              key={block.index}
              indexCount={block.index + 1}
              nonce={block.nonce}
              prev={block.previousHash}
              hash={block.hash}
              id="block"
              showPrev={showPrev}
              isValid={block.isValid}
              onSubmit={(e, index, data) => mine(e, index, data)}
              onInput={(e, index, data) => updateHashes(e, index, data)}
            />
          ))}
      </div>
    </div>
  );
}

export default BlockChainForm;
