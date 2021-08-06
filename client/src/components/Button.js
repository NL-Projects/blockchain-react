import "../index.css";
function Button({ text, type, value, flag, className = "btn" }) {
  return (
    <button className={className} type={type} value={value} disabled={flag}>
      {text}
    </button>
  );
}
export default Button;
