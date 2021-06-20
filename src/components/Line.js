function Line({ lable, placeholder }) {
  return (
    <div>
      <span>
        {lable}
        <input name="test" id="test" type="text" placeholder={placeholder} />
      </span>
    </div>
  );
}

// "Enter your input"

export default Line;
