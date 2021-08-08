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
          Public Key:
          <input
            className="keySignInput"
            //   placeholder={str}
            //   onChange={(e) => fetchHash(e.target.value)}
          />
          <div className="marging">
            Signature:
            <input
              className="keySignInput"
              type="text"
              //   placeholder={hashedData}
            />
          </div>
          <Button
            text="Verify"
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
