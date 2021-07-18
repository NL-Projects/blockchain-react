function Line({ lable, placeholder }) {
  return (
    <div>
      <span>
        {lable}
        <input name="test" type="text" placeholder={placeholder} disabled />
      </span>
    </div>
  );
}

// "Enter your input"

export default Line;
