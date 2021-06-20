import Form from "../components/Form.js";

function BlockForm({ btnText, lbl1, lbl2, lbl3, ph1, ph2, ph3 }) {
  return (
    <div>
      <Form
        btnText={"Mine"}
        lbl1={"Block: "}
        lbl2={"Fucker: "}
        lbl3={"Hash: "}
        ph1={"Here!"}
        ph2={"shitshit"}
        ph3={"kjn13jn13!~#$@3ke#$134kjn3kejn"}
      />
    </div>
  );
}

export default BlockForm;
