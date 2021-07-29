import TokensChainForm from "../routes/Tokens_route";

function CoinBase() {
  const pipe1 = [3, 2, 7, 1];
  const pipe2 = [6, 5, 4, 3];
  const pipe3 = [2, 1, 3, 2];
  const pipe4 = [7, 2, 1, 5];

  return (
    <div className="grid-container-dist">
      <h1 className="toppic">Coin Base</h1>
      <div className="grid-item">
        <TokensChainForm title="pipe 1" />
      </div>
      <div className="grid-item">
        <TokensChainForm title="pipe 2" arr={pipe1} />
      </div>
      <div className="grid-item">
        <TokensChainForm title="pipe 3" arr={pipe2} />
      </div>
      <div className="grid-item">
        <TokensChainForm title="pipe 4" arr={pipe3} />
      </div>
      <div className="grid-item">
        <TokensChainForm title="pipe 5" arr={pipe4} />
      </div>
    </div>
  );
}

export default CoinBase;
