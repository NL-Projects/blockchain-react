import Form from "../components/BlockForm.js";

function BlockChainForm() {
  return (
    <div className="grid-container">
      <div className="grid-item">
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
      <div className="grid-item">
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
      <div className="grid-item">
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
    </div>
  );
}

export default BlockChainForm;
