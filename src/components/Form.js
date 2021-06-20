import Line from "../components/Line";
import Button from "../components/Button";

function Form({ btnText, lbl1, lbl2, lbl3, ph1, ph2, ph3 }) {
  return (
    <form>
      <Line lable={lbl1} placeholder={ph1} />
      <Line lable={lbl2} placeholder={ph2} />
      <textarea />
      <Line lable={lbl3} placeholder={ph3} />
      <Button text={btnText} />
    </form>
  );
}

export default Form;
