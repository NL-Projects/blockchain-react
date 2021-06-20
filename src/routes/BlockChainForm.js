import Form from "../components/Form.js";

function BlockChainForm() {
  return (
    <div>
      <Form
        btnText={"Mine"}
        lbl1={"Block: "}
        lbl2={"chain: "}
        lbl3={"Hash: "}
        ph1={"Here!"}
        ph2={"blockChain__blockChain"}
        ph3={"blockChain__blockChain"}
      />
    </div>
  );
}

export default BlockChainForm;
