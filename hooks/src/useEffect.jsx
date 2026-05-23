import React, { useState, useEffect } from "react";

function UsingUseEffect() {
  const [count, setCount] = useState(1);
  const[age, setAge] = useState(48);

  useEffect(() => {
    document.title = `count: ${count}`;
  });

  return (
    <div>
      <div>
        <h1>Function based components Life Cycle</h1>

        <h3>Count is: {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Increament Count
        </button>
      </div>
      <div>
        <h3>Age is: {age}</h3>
        <button onClick={() => setAge((age) => age + 1)}>Increament Age</button>
      </div>
    </div>
  );
}

export default UsingUseEffect;