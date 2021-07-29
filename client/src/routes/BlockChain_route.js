import BlockForm from "../components/BlockForm";

// const MINE_REQ_URL = "http://localhost:3001/operations/mine";
// const SHA_REQ_URL = "http://localhost:3001/operations/sha256";

function BlockChainForm({ title = "Block Chain" }) {
  const NUM_OF_BLOCKS = 4;
  const flag = false;
  let filledArray = new Array(NUM_OF_BLOCKS).fill({ BlockForm });

  // const val =()=> {
  //   if (indexCount + 1 > 1)
  //     val = document.getElementById;
  // }

  const listItems = filledArray.map((block, index) => (
    <div>
      <BlockForm
        className="card"
        key={index}
        indexCount={index + 1}
        // prev={val}
        id="block"
        bool={flag}
      >
        {block}/
      </BlockForm>
    </div>
  ));

  return (
    <div>
      <h2 className="toppic">{title}</h2>
      <div className="scrolling-wrapper">{listItems}</div>
    </div>
  );
}

export default BlockChainForm;
