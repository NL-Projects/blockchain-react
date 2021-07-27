import BlockForm from "../components/BlockForm";
// import { Container, Row, Col } from "react-bootstrap";

function BlockChainForm() {
  // const blockchain = [BlockForm, BlockForm, BlockForm];
  let filledArray = new Array(3).fill({ BlockForm });
  const listItems = filledArray.map((block, index) => (
    // <Container>
    //   <Row>
    //     <Col>
    <div className="Container" id="test">
      <BlockForm key={index}>{block}/</BlockForm>
    </div>
    //     </Col>
    //   </Row>
    // </Container>
  ));

  return (
    <div>
      <h1 className="toppic">Block Chain</h1>
      {listItems}
    </div>
  );
}

export default BlockChainForm;
