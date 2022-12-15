import { useState } from "react";
function Input({ handleSubmit }) {
  const [value, setValue] = useState("");

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => handleSubmit(value)}>addTodo</button>
    </>
  );
}

export default Input;
