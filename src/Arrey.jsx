import React, { useState } from "react";

function Arrey() {
  let isLogin = true;

  let user = {
    name: "Sarthak Tripathi",
    email: "sarthaktripathi047@gmail.com",
  };
  const [fruit, setFruit] = useState(["Apple", "Banana", "Orange", "Grapes "]);

  function addTwo(a, b) {
    return a * b;
  }
  return (
    <div>
      <h1>Arrey Component</h1>
      <p> {isLogin && "You are logged in"}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>{fruit[1]}</h2>
      <button onClick={() => setFruit([...fruit, "santara"])}>Add fruit</button>
      {/* <button onClick={() => fruit.pop("Apple")}>Remove fruit</button>
      <button onClick={() => fruit.sort()}>sort fruit</button>
      <button onClick={() => alert("This button is clicked")}>Alert</button> */}
      {/* {fruit.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
     */}
      {/* {fruit.map((item, index) => (
        <p key={index}>{item}</p>
      ))} */}

      <p> {addTwo(7, 8)}</p>
    </div>
  );
}

export default Arrey;
