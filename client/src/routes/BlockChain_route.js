import BlockForm from "../components/BlockForm";
import axios from "axios";
import { useState, useEffect } from "react";
// const MINE_REQ_URL = "http://localhost:3001/operations/mine";
const BLOCKCHAIN_GET_URL = "http://localhost:3001/block/chain";

function BlockChainForm({ title = "Block Chain" }) {
  const [blockChain, setblockChain] = useState({ chain: [], difficuty: 4 });
  const NUM_OF_BLOCKS = 4;
  const flag = false;
  let filledArray = new Array(NUM_OF_BLOCKS).fill({ BlockForm });

  const fetchBlockChain = async () => {
    setblockChain(await axios.get(BLOCKCHAIN_GET_URL).then((res) => res.data));
    console.log(blockChain);
  };

  useEffect(() => fetchBlockChain(), []);

  return (
    <div>
      <h2 className="toppic">{title}</h2>
      <div className="scrolling-wrapper">
        {blockChain.chain != [] &&
          blockChain.chain.map((block, index) => (
            <div>
              <BlockForm
                className="card"
                key={index}
                indexCount={block.index+1}
                nonce={block.nonce}
                prev={block.previousHash}
                hash={block.hash}
                id="block"
                bool={flag}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default BlockChainForm;
