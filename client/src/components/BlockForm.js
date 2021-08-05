import "../index.css";
import Button from "./Button";
import { useRef } from "react";

const ZERO = "0".repeat(64);

function BlockForm({
  indexCount = 1,
  nonce = 0,
  hash,
  prev = ZERO,
  showPrev,
  onSubmit,
  onInput,
}) {
  // grab the text area
  const textArea = useRef(null);
  const blockDiv = useRef(null);

  return (
    <div className="container" ref={blockDiv} id="test">
      <form
        onSubmit={(e) => onSubmit(e, indexCount, textArea.current.value)}
        action=""
      >
        <div>
          Block
          <input
            readOnly
            className="inputBlockLength"
            type="text"
            name="index"
            value={indexCount}
          />
        </div>
        <div>
          Nonce
          <input
            readOnly
            className="inputBlockLength"
            type="text"
            name="nonce"
            value={nonce}
          />
        </div>
        <div>Data</div>
        <textarea
          ref={textArea}
          className="blockData"
          placeholder="Enter text here..."
          name="data"
          onChange={(e) => onInput(e, indexCount, textArea.current.value)}
        />
        <div>
          <div hidden={!showPrev}>
            Previous Hash
            <input
              readOnly
              className="inputBlockLength"
              type="text"
              disabled
              value={prev}
            />
          </div>
          <div>
            Hash
            <input
              readOnly
              className="inputBlockLength"
              type="text"
              disabled
              value={hash}
            />
          </div>
          <Button text="Mine" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default BlockForm;
