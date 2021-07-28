import BlockForm from "../components/BlockForm";
// import { Container, Row, Col } from "react-bootstrap";

function BlockChainForm({ title = "Block Chain" }) {
  // const blockchain = [BlockForm, BlockForm, BlockForm];
  const NUM_OF_BLOCKS = 4;
  let filledArray = new Array(NUM_OF_BLOCKS).fill({ BlockForm });
  const flag = false;

  const listItems = filledArray.map((block, index) => (
    <div>
      <BlockForm className="card" key={index} id="block" bool={flag}>
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
