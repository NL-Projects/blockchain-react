import TokensForm from "../components/TokensForm";

function TokensChainForm({ arr = [5, 7, 2, 3], title = "Tokens" }) {
  // const blockchain = [BlockForm, BlockForm, BlockForm];
  const NUM_OF_BLOCKS = 4;
  let filledArray = new Array(NUM_OF_BLOCKS).fill({ TokensForm });
  // const arr = ;
  const listItems = filledArray.map((block, index) => (
    <div>
      <TokensForm className="card" key={index} id="block" val={arr[index]}>
        {block}/
      </TokensForm>
    </div>
  ));

  return (
    <div>
      <h2 className="toppic">{title}</h2>
      <div className="scrolling-wrapper">{listItems}</div>
    </div>
  );
}

export default TokensChainForm;
