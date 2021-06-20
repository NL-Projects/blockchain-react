import Button from "./Button";
import Line from "./Line";

function BlockForm({ btnText }) {
  return (
    <div>
      <form>
        <Line lable={"block: "} placeholder={"1"} />
        <Line lable={"shit: "} placeholder={"here2"} />
        <textarea />
        <Line lable={"hash: "} placeholder={"kjn13jn13!~#$@3ke#$134kjn3kejn"} />
        <Button text={btnText} />
      </form>
    </div>
  );
}

export default BlockForm;
