import React, { useState } from "react";

function RevisonCounter() {
  const [count, setCount] = useState(0);
  let a = 20;
  let b = 30;

  let isLogin = false;
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
      <p> the sum is {a + b}</p>
      <p>{isLogin ? "Welcome back" : "Please log in"}</p>
    </div>
  );
}

export default RevisonCounter;
