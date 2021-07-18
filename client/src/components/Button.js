import "../index.css";
function Button({ text, type, value }) {
  return (
    <button className="btn" type={type} value={value}>
      {text}
    </button>
  );
}
export default Button;
