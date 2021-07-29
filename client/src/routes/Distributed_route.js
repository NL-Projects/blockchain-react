import BlockChainForm from "../routes/BlockChain_route";

function Distributed() {
  // BlockChainForm
  return (
    // <div></div>
    <div className="grid-container-dist">
      <h1 className="toppic">Distributed</h1>
      <div className="grid-item">
        <BlockChainForm title="pipe 1" />
      </div>
      <div className="grid-item">
        {/* <h1 className="toppic">pipe2</h1> */}
        <BlockChainForm title="pipe 2" />
      </div>
      <div className="grid-item">
        {/* <h1 className="toppic">pipe3</h1> */}
        <BlockChainForm title="pipe 3" />
      </div>
      <div className="grid-item">
        {/* <h1 className="toppic">pipe4</h1> */}
        <BlockChainForm title="pipe 4" />
      </div>
      <div className="grid-item">
        {/* <h1 className="toppic">pipe5</h1> */}
        <BlockChainForm title="pipe 5" />
      </div>
    </div>
  );
}

export default Distributed;
