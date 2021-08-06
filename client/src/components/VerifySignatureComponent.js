import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import SignComponent from "./SignComponent";
import VerifyComponent from "./VerifyComponent";

function VerifySignatureComponent() {
  const [key, setKey] = useState("sign");

  return (
    <div className="verifyContainer">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="sign" title="Sign">
          <SignComponent />
        </Tab>
        <Tab eventKey="verify" title="Verify">
          <VerifyComponent />
        </Tab>
      </Tabs>
    </div>
  );
}

export default VerifySignatureComponent;
