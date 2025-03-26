import React, { useState } from "react";
import Button from "./Button.tsx";

function Counter() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const removeValue = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <h2 className="font-semibold my-5">Counter: {counter}</h2>
      <Button
        className="m-5 bg-blue-500"
        btnFunction={addValue}
        btnText="Add Value"
      />
      <Button
        className="m-4 bg-pink-500"
        btnFunction={removeValue}
        btnText="Remove Value"
      />
      {counter === 10 && (
        <p className="text-red-400">Maximum limit reached (10)!</p>
      )}
      {counter === 0 && (
        <p className="text-red-400">Minimum limit reached (0)!</p>
      )}
    </>
  );
}

export default Counter;
