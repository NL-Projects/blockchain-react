import React from "react";
import Button from "./Button";

function VerifyComponent() {
  return (
    <div>
      <form
      // onSubmit={(e) => onSubmit(e, indexCount, textArea.current.value)}
      // action=""
      >
        <div>Message</div>
        <textarea
          //   ref={textArea}
          className="blockMessage"
          placeholder="Enter text here..."
          name="data"
          //   onChange={(e) => onInput(e, indexCount, textArea.current.value)}
        />
        <div className="lineSeparator">
          Private Key:
          <input
            className="keySignInput"
            //   placeholder={str}
            //   onChange={(e) => fetchHash(e.target.value)}
          />
          Public Key:
          <input
            className="keySignInputDisabled"
            type="text"
            //   placeholder={hashedData}
            disabled
          />
          <Button
            text="Sign"
            type="submit"
            value="Submit"
            flag={true}
            className="longBTN"
          />
        </div>
      </form>
    </div>
  );
}

export default VerifyComponent;
