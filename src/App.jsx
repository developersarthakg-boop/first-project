import React from "react";
import Counter, { userName } from "./Counter";
import RevisonCounter from "./RevisonCounter";
import VariableUse from "./VariableUse";
import Arrey from "./Arrey";

function App() {
  return (
    <div>
      <p>
        This is the react application that would lead me to 50 lakhs of package.
      </p>
      <Counter />
      <Apple />

      <Cars />
      <RevisonCounter />
      <h2>Hello {userName}</h2>
      <Geeky />
      <VariableUse />
      <Arrey />
    </div>
  );
}

function Apple() {
  return (
    <div>
      <h2>5 lakhs mobile sold in a minute</h2>
    </div>
  );
}

function Cars() {
  return (
    <div>
      <h2>10 lakhs cars sold in a minute</h2>
    </div>
  );
}

function Geeky() {
  return (
    <>
      <h4>Hello Guru ji Geeksy</h4>
      <h2>Hello Guru ji Sarthak Pandat ji</h2>
    </>
  );
}

export default App;
