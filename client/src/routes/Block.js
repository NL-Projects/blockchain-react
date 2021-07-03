import BlockForm from "../components/BlockForm.js";

function Block() {
  return (
    <div className="Container">
      <BlockForm
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

export default Block;
