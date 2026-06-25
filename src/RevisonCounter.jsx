import React, { useState } from "react";

function RevisonCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Revision App</h1>

      <button onClick={() => setCount(count + 1)}>
        <h3>Increment Counter</h3>{" "}
      </button>

      <button onClick={() => setCount(count - 1)}>
        {" "}
        <h3>Decrement Counter</h3>{" "}
      </button>
      <h2>Counter Value {count}</h2>
    </div>
  );
}

export default RevisonCounter;
