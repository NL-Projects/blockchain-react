import Button from "./Button";
import "../index.css";
const { BlockChain, Block } = require("../models/blockchain_functionallity");

function BlockForm() {
  // const [blockChain, setBlockChain] = useState(new BlockChain());
  // const [block, setBlock] = useState(blockChain.getLatestBlock());
  // blockChain.addBlock(new Block(1, "20/01/2019", { amount: 4 }));
  // blockChain.addBlock(new Block(2, "20/02/2019", { amount: 8 }));

  return (
    <div>
      <div>
        Block:
        <input className="inputBlockLength" type="text" placeholder="block" />
      </div>
      <div>
        Nounce:
        <input className="inputBlockLength" type="text" placeholder="" />
      </div>
      <div>
        Data:
        <form>
          <textarea className="blockData" placeholder="" />
          <span>
            Hash:
            <input
              className="inputBlockLength"
              type="text"
              // placeholder={hashedData}
              disabled
            />
          </span>
          <Button text="Mine" />
        </form>
      </div>
    </div>
  );
}

export default BlockForm;
